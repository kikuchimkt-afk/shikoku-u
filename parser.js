
const fs = require('fs');

function parseP1(content) {
    const parts = content.split('解答と解説');
    const qPart = parts[0];
    const aPart = parts[1] || "";

    const lines = qPart.split('\n');
    let questions = [];
    let currentQ = null;

    for (let line of lines) {
        line = line.trim();
        if (!line) continue;

        let mQ = line.match(/^\((\d+)\)\s+(.*)$/);
        if (mQ) {
            questions.push({
                id: `m1_${mQ[1]}`,
                type: 'choice',
                q: mQ[2],
                cat: '模擬 大問1'
            });
            currentQ = questions[questions.length - 1];
            continue;
        }

        if (currentQ && !currentQ.a) {
            let opts = line.split(' / ');
            opts = opts.map(o => o.replace(/^\d+\.\s*/, '').trim());

            // Sometimes split might fail if spaces are missing, handle simple case first
            if (opts.length >= 4) {
                if (opts.length > 4) {
                    // fallback heuristic if extra slashes appear?
                    // Just take first 4? No, assume well-formed for now.
                    opts = opts.slice(0, 4);
                }
                currentQ.a = opts;
            } else {
                // Try splitting by number pattern "2.", "3.", "4."
                // "opt1 2. opt2 3. opt3 4. opt4"
                const complexOpts = line.split(/\s+\d+\.\s+/);
                if (complexOpts.length === 4) {
                    currentQ.a = complexOpts.map(o => o.trim());
                }
            }
        }
    }

    // Normalize newlines for easier regex matching
    const normalizedA = aPart.replace(/\r\n/g, '\n');
    const aPattern = /\((\d+)\)\s*\n\s*(\d)\s*\n\s*\((.*?)\)[：:]([\s\S]*?)(?=(\(\d+\)\s*\n|$))/g;

    let match;
    let ansMap = {};
    while ((match = aPattern.exec(normalizedA)) !== null) {
        ansMap[parseInt(match[1])] = {
            correct: parseInt(match[2]) - 1,
            exp: match[4].trim()
        };
    }

    questions = questions.filter(q => {
        let qNum = parseInt(q.id.split('_')[1]);
        if (ansMap[qNum]) {
            q.correct = ansMap[qNum].correct;
            q.exp = ansMap[qNum].exp;
            q.a = q.a || []; // Ensure array exists
            return true;
        }
        // console.log("Skipping P1 " + q.id);
        return false;
    });
    return questions;
}

function parseP2(content) {
    const parts = content.split('解答とポイント');
    const qPart = parts[0];
    const aPart = parts[1] || "";

    const lines = qPart.split('\n');
    let questions = [];
    let currentQ = null;

    for (let line of lines) {
        line = line.trim();
        if (!line) continue;

        // (1) Japanese
        let mQ = line.match(/^\((\d+)\)\s+(.*)$/);
        if (mQ) {
            questions.push({
                id: `m2_${mQ[1]}`,
                type: 'scramble',
                jp: mQ[2],
                cat: '模擬 大問2'
            });
            currentQ = questions[questions.length - 1];
            continue;
        }

        if (currentQ && !currentQ.fixed) {
            // I am ( forward / looking / moving / to ) to a new house.
            let mS = line.match(/(.*)\(\s*(.*)\s*\)(.*)/);
            if (mS) {
                currentQ.fixed = [mS[1].trim(), mS[3].trim()];
                currentQ.words = mS[2].split('/').map(w => w.trim());
            }
        }
    }

    const normalizedA = aPart.replace(/\r\n/g, '\n');
    // (1) \n correct \n (exp)
    const aPattern = /\((\d+)\)\s*\n\s*(.*?)\s*\n\s*\((.*?)\)(?=[\s\S]*?(\(\d+\)\s*\n|$))/g;

    let match;
    let ansMap = {};
    while ((match = aPattern.exec(normalizedA)) !== null) {
        ansMap[parseInt(match[1])] = {
            correct: match[2].trim(),
            exp: match[3].trim()
        };
    }

    questions = questions.filter(q => {
        let qNum = parseInt(q.id.split('_')[1]);
        if (ansMap[qNum]) {
            q.correct = ansMap[qNum].correct;
            q.exp = ansMap[qNum].exp;
            return true;
        }
        return false;
    });
    return questions;
}

function parseP3(content) {
    const parts = content.split('解答と解説');
    const qPart = parts[0];
    const aPart = parts[1] || "";

    // Split by "(N)" at start of line
    const chunks = qPart.split(/^\((\d+)\)\s+/m);
    // chunks[0] = header, chunks[1]="1", chunks[2]=block, chunks[3]="2", ...

    let questions = [];
    for (let i = 1; i < chunks.length; i += 2) {
        const qNum = chunks[i];
        const block = chunks[i + 1];

        const lines = block.trim().split('\n');
        let convLines = [];
        let options = [];

        for (let line of lines) {
            line = line.trim();
            if (line.match(/^1\.\s+/)) {
                // Options: 1. ... / 2. ...
                let opts = line.split(/\s+\/\s+\d+\.\s+/);
                opts[0] = opts[0].replace(/^1\.\s+/, '');
                options = opts.map(o => o.trim());
            } else {
                convLines.push(line);
            }
        }

        questions.push({
            id: `m3_${qNum}`,
            type: 'choice',
            q: convLines.join('\n'),
            a: options,
            cat: '模擬 大問3'
        });
    }

    const normalizedA = aPart.replace(/\r\n/g, '\n');
    // (1) \n 2 \n ：exp
    const aPattern = /\((\d+)\)\s*\n\s*(\d)\s*\n\s*[：:]([\s\S]*?)(?=(\(\d+\)\s*\n|$))/g;

    let match;
    let ansMap = {};
    while ((match = aPattern.exec(normalizedA)) !== null) {
        ansMap[parseInt(match[1])] = {
            correct: parseInt(match[2]) - 1,
            exp: match[3].trim()
        };
    }

    questions = questions.filter(q => {
        let qNum = parseInt(q.id.split('_')[1]);
        if (ansMap[qNum]) {
            q.correct = ansMap[qNum].correct;
            q.exp = ansMap[qNum].exp;
            return true;
        }
        return false;
    });
    return questions;
}

try {
    const p1Raw = fs.readFileSync('raw_p1.txt', 'utf8');
    const p1Data = parseP1(p1Raw);

    const p2Raw = fs.readFileSync('raw_p2.txt', 'utf8');
    const p2Data = parseP2(p2Raw);

    const p3Raw = fs.readFileSync('raw_p3.txt', 'utf8');
    const p3Data = parseP3(p3Raw);

    const outContent = `const mockP1Data = ${JSON.stringify(p1Data, null, 4)};\n` +
        `const mockP2Data = ${JSON.stringify(p2Data, null, 4)};\n` +
        `const mockP3Data = ${JSON.stringify(p3Data, null, 4)};\n`;

    fs.writeFileSync('mock_data.js', outContent, 'utf8');
    console.log(`Success! P1:${p1Data.length}, P2:${p2Data.length}, P3:${p3Data.length}`);
} catch (e) {
    console.error(e);
}
