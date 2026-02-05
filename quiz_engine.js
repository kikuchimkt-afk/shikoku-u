
// データマッピング
const masterData = {
    // Past Exams (from exam_data.js)
    past_p1: (typeof pastDataP1 !== 'undefined') ? pastDataP1 : [],
    past_p2: (typeof pastDataP2 !== 'undefined') ? pastDataP2 : [],
    past_p3: (typeof pastDataP3 !== 'undefined') ? pastDataP3 : [],
    past_p4: (typeof pastDataP4 !== 'undefined') ? pastDataP4 : [],

    // Mock Exams (from mock_data.js)
    mock_p1: (typeof mockP1Data !== 'undefined') ? mockP1Data : [],
    mock_p2: (typeof mockP2Data !== 'undefined') ? mockP2Data : [],
    mock_p3: (typeof mockP3Data !== 'undefined') ? mockP3Data : []
};

// ヘルパー関数（バッジ表示用）
const bMarker = (num) => `<span class="blank-badge">${num}</span>`;
const uMarker = (text, num) => `<span class="u-meaning-orange">${text}</span><span class="marker-circle">${num}</span>`;

const quizApp = {
    currentSet: [],
    currentIdx: 0,
    score: 0,
    isAnswered: false,
    userOrder: [],
    mode: '', // 'past', 'mock', 'weak'
    passageIdx: 0,

    init: function (mode) {
        this.mode = mode;
        this.score = 0;
        this.currentIdx = 0;
        this.currentSet = [];

        // 問題抽出ロジック
        if (mode === 'weak_review') {
            this.currentSet = JSON.parse(localStorage.getItem('weak_list') || '[]');
            if (this.currentSet.length === 0) { this.goHome(); return; }
        }
        else if (mode.includes('p4')) {
            // P4の特殊処理
            if (masterData.past_p4 && masterData.past_p4.length > 0) {
                // 1題だけ選ぶか、全題か？
                // Step 536のUIでは 'past_p4' しかなかったが、前のバージョンでは random/all があった。
                // ここではシンプルに全題モードとするか、ランダムにするか。
                // UIのボタンは init('past_p4') となっていた。
                // 全題やることにする。
                // P4はデータ構造が違う（passageの中にquestionsがある）。
                // クイズエンジンはフラットなquestionsリストを期待している部分と、P4用の分岐がある。

                // Step 536のコードを見ると:
                /*
                if (this.mode.includes('p4')) {
                    const passageData = masterData.past_p4[0]; 
                    ...
                    const subQ = passageData.questions[this.currentIdx % passageData.questions.length];
                */
                // 常に[0]番目の文章を使っている実装だった。
                // これで良しとする。
                this.currentSet = masterData.past_p4[0].questions; // ダミーセット
            }
        }
        else {
            // 通常モード (p1, p2, p3)
            let baseKey = mode;
            let isRandom = false;
            let limit = 0;

            if (mode.endsWith('_random')) {
                baseKey = mode.replace('_random', '');
                isRandom = true;
                limit = 10;
            } else if (mode.endsWith('_all')) {
                baseKey = mode.replace('_all', '');
            }

            const source = masterData[baseKey] || [];
            if (source.length === 0) {
                alert("データ読み込みエラー: " + baseKey);
                this.goHome();
                return;
            }

            if (isRandom) {
                this.currentSet = [...source].sort(() => 0.5 - Math.random()).slice(0, limit);
            } else {
                this.currentSet = [...source];
            }
        }

        // UI切替
        document.getElementById('start-screen').classList.add('hidden');
        document.getElementById('result-screen').classList.add('hidden');
        document.getElementById('status-area').classList.remove('hidden');
        document.getElementById('quiz-screen').classList.remove('hidden');

        this.renderQuestion();
    },

    renderQuestion: function () {
        this.isAnswered = false;
        this.userOrder = [];

        // P4の場合のデータ取得
        let q;
        if (this.mode.includes('p4')) {
            const passageData = masterData.past_p4[0];
            q = passageData.questions[this.currentIdx];
            // Update passage view
            const passageContainer = document.getElementById('passage-container');
            passageContainer.innerHTML = passageData.passage;
            passageContainer.classList.remove('hidden');
        } else {
            q = this.currentSet[this.currentIdx];
            document.getElementById('passage-container').classList.add('hidden');
        }

        if (!q) {
            console.error("Question data missing");
            return;
        }

        // 進捗表示
        const total = this.mode.includes('p4') ? masterData.past_p4[0].questions.length : this.currentSet.length;
        document.getElementById('question-count-label').innerText = `Question ${this.currentIdx + 1} / ${total}`;
        document.getElementById('mode-badge').innerText = q.cat || "Quiz";
        const progress = ((this.currentIdx) / total) * 100;
        document.getElementById('progress-bar-fill').style.width = `${progress}%`;

        // 表示クリア
        document.getElementById('explanation-card').style.display = 'none';
        document.getElementById('next-btn-action').classList.add('hidden');
        document.getElementById('jp-hint-box').classList.add('hidden');
        document.getElementById('scramble-box').classList.add('hidden');
        document.getElementById('options-grid').classList.remove('hidden');

        if (q.type === 'choice') {
            this.renderChoice(q);
        } else if (q.type === 'scramble') {
            this.renderScramble(q);
        }

        this.updateScoreUI();
    },

    renderChoice: function (q) {
        const qDisplay = document.getElementById('q-text-display');
        qDisplay.innerHTML = q.q.replace(/\n/g, '<br>');

        const grid = document.getElementById('options-grid');
        grid.innerHTML = '';

        if (!q.a) {
            grid.innerHTML = '<div class="text-red-500">Error: No options data</div>';
            return;
        }

        q.a.forEach((opt, idx) => {
            const btn = document.createElement('button');
            btn.className = "flex items-center gap-4 p-5 rounded-2xl border-2 border-slate-100 bg-slate-50 hover:border-[#003366] hover:bg-white transition-all text-left group shadow-sm w-full";
            btn.innerHTML = `
                <span class="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center font-black text-slate-400 group-hover:text-[#003366] group-hover:border-[#003366] shrink-0">${idx + 1}</span>
                <span class="font-bold text-slate-700">${opt}</span>
            `;
            btn.onclick = () => this.handleChoice(idx, btn, q);
            grid.appendChild(btn);
        });
    },

    renderScramble: function (q) {
        document.getElementById('options-grid').classList.add('hidden');
        document.getElementById('scramble-box').classList.remove('hidden');
        document.getElementById('jp-hint-box').innerText = `和訳: ${q.jp}`;
        document.getElementById('jp-hint-box').classList.remove('hidden');

        // Handle fixed parts safely
        const pre = (q.fixed && q.fixed[0]) ? q.fixed[0] : "";
        const post = (q.fixed && q.fixed[1]) ? q.fixed[1] : "";
        document.getElementById('q-text-display').innerHTML = `${pre} ( <span id="dynamic-blank" class="text-blue-600 font-black">?</span> ) ${post}`;

        const preview = document.getElementById('sentence-preview');
        preview.innerHTML = '<span class="text-slate-300 font-medium italic">単語をタップして文章を作成...</span>';
        preview.className = "min-h-[90px] p-6 bg-slate-50 border-2 border-dashed border-slate-300 rounded-3xl mb-8 flex flex-wrap gap-3 items-center shadow-inner";

        const pool = document.getElementById('word-pool-display');
        pool.innerHTML = '';

        if (!q.words) {
            pool.innerHTML = "Error: No words data";
            return;
        }

        const shuffled = [...q.words].sort(() => 0.5 - Math.random());
        shuffled.forEach(word => {
            const chip = document.createElement('button');
            chip.className = "word-chip bg-white px-5 py-3 rounded-2xl border-2 border-slate-200 shadow-sm font-black text-slate-700 hover:border-[#003366] hover:text-[#003366]";
            chip.innerText = word;
            chip.onclick = () => this.addWord(word, chip);
            pool.appendChild(chip);
        });
    },

    addWord: function (word, chip) {
        if (this.isAnswered) return;
        const preview = document.getElementById('sentence-preview');
        // Clear placeholder text if first word
        if (this.userOrder.length === 0) preview.innerHTML = '';

        this.userOrder.push(word);
        chip.classList.add('selected');

        const wordElem = document.createElement('span');
        wordElem.className = "bg-[#003366] text-white px-4 py-2 rounded-xl font-bold text-sm shadow-md animate-bounce";
        wordElem.innerText = word;
        preview.appendChild(wordElem);
    },

    resetScramble: function () {
        if (this.isAnswered) return;
        this.userOrder = [];
        this.renderQuestion();
    },

    handleChoice: function (idx, btn, q) {
        if (this.isAnswered) return;
        this.isAnswered = true;

        const btns = document.querySelectorAll('#options-grid button');
        const isCorrect = (idx === q.correct);

        if (isCorrect) {
            btn.classList.add('correct');
            this.score++;
        } else {
            btn.classList.add('wrong');
            if (btns[q.correct]) btns[q.correct].classList.add('correct');
            this.saveToWeak(q);
        }

        this.showExplanation(q.exp);
    },

    checkScramble: function () {
        if (this.isAnswered || this.userOrder.length === 0) return;
        this.isAnswered = true;

        const q = this.currentSet[this.currentIdx];
        const userSent = this.userOrder.join(' ').toLowerCase().replace(/\s+/g, ' ').trim();
        const correctSent = q.correct.toLowerCase().replace(/\s+/g, ' ').trim();

        const preview = document.getElementById('sentence-preview');
        if (userSent === correctSent) {
            preview.classList.remove('bg-slate-50', 'border-slate-300');
            preview.classList.add('bg-emerald-50', 'border-emerald-500');
            this.score++;
        } else {
            preview.classList.remove('bg-slate-50', 'border-slate-300');
            preview.classList.add('bg-red-50', 'border-red-500');
            const correctMsg = document.createElement('div');
            correctMsg.className = "w-full mt-4 text-xs text-red-600 font-black border-t border-red-100 pt-4 uppercase tracking-widest";
            correctMsg.innerText = `Correct: ${q.correct}`;
            preview.appendChild(correctMsg);
            this.saveToWeak(q);
        }

        this.showExplanation(q.exp);
    },

    showExplanation: function (msg) {
        document.getElementById('explanation-text-display').innerText = msg || "No explanation available.";
        document.getElementById('explanation-card').style.display = 'block';
        document.getElementById('next-btn-action').classList.remove('hidden');

        // モバイル向けスクロール
        setTimeout(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }), 100);
    },

    goNext: function () {
        this.currentIdx++;
        // P4の場合の長さチェック
        const total = this.mode.includes('p4') ? masterData.past_p4[0].questions.length : this.currentSet.length;

        if (this.currentIdx < total) {
            this.renderQuestion();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            this.showResults(total);
        }
    },

    showResults: function (total) {
        document.getElementById('quiz-screen').classList.add('hidden');
        document.getElementById('result-screen').classList.remove('hidden');

        document.getElementById('final-score-val').innerText = this.score;
        document.getElementById('final-total-val').innerText = total;

        const percent = (this.score / total) * 100;
        const msg = document.getElementById('result-message-display');
        if (percent === 100) msg.innerText = "PERFECT!! 合格間違いなし。";
        else if (percent >= 80) msg.innerText = "素晴らしい！本番も自信を持って。";
        else if (percent >= 60) msg.innerText = "合格圏内。ミスを復習しましょう。";
        else msg.innerText = "基礎をもう一度固めましょう。";

        this.initChart(this.score, total - this.score);
    },

    initChart: function (correct, wrong) {
        const ctx = document.getElementById('scoreChart').getContext('2d');
        if (this.chartInstance) this.chartInstance.destroy();

        this.chartInstance = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['正解', '不正解'],
                datasets: [{
                    data: [correct, wrong],
                    backgroundColor: ['#10b981', '#f1f5f9'],
                    borderWidth: 0
                }]
            },
            options: {
                cutout: '80%',
                plugins: { legend: { display: false } }
            }
        });
    },

    saveToWeak: function (q) {
        let weak = JSON.parse(localStorage.getItem('weak_list') || '[]');
        if (!weak.find(item => item.id === q.id)) {
            weak.push(q);
            localStorage.setItem('weak_list', JSON.stringify(weak));
        }
        this.updateWeakUI();
    },

    updateWeakUI: function () {
        const weak = JSON.parse(localStorage.getItem('weak_list') || '[]');
        const section = document.getElementById('weak-area');
        if (section) {
            if (weak.length > 0) {
                section.classList.remove('hidden');
                const cnt = document.getElementById('weak-count-text');
                if (cnt) cnt.innerText = weak.length;
            } else {
                section.classList.add('hidden');
            }
        }
    },

    goHome: function () {
        document.getElementById('quiz-screen').classList.add('hidden');
        document.getElementById('result-screen').classList.add('hidden');
        document.getElementById('status-area').classList.add('hidden');
        document.getElementById('start-screen').classList.remove('hidden');
        this.updateWeakUI();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
};

window.onload = () => quizApp.updateWeakUI();
