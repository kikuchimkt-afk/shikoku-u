const mockP1Data = [
    {
        "id": "m1_1",
        "type": "choice",
        "q": "I have been looking for a job ( ) I graduated from university.",
        "cat": "模擬 大問1",
        "a": [
            "since",
            "for",
            "during",
            "when"
        ],
        "correct": 0,
        "exp": "過去の起点。"
    },
    {
        "id": "m1_2",
        "type": "choice",
        "q": "It is essential that every student ( ) the school regulations.",
        "cat": "模擬 大問1",
        "a": [
            "obeys",
            "obey",
            "obeyed",
            "is obeying"
        ],
        "correct": 1,
        "exp": "仮定法現在。"
    },
    {
        "id": "m1_3",
        "type": "choice",
        "q": "The bridge ( ) at the moment will be completed next spring.",
        "cat": "模擬 大問1",
        "a": [
            "building",
            "to build",
            "being built",
            "built"
        ],
        "correct": 2,
        "exp": "受動進行。"
    },
    {
        "id": "m1_4",
        "type": "choice",
        "q": "No ( ) how hard you try, you cannot please everyone.",
        "cat": "模擬 大問1",
        "a": [
            "way",
            "matter",
            "wonder",
            "problem"
        ],
        "correct": 1,
        "exp": "譲歩の表現。"
    },
    {
        "id": "m1_5",
        "type": "choice",
        "q": "I'm looking forward to ( ) from you in the near future.",
        "cat": "模擬 大問1",
        "a": [
            "hear",
            "hearing",
            "be heard",
            "have heard"
        ],
        "correct": 1,
        "exp": "toは前置詞。"
    },
    {
        "id": "m1_6",
        "type": "choice",
        "q": "The number of international students in our college ( ) increasing.",
        "cat": "模擬 大問1",
        "a": [
            "is",
            "are",
            "be",
            "have"
        ],
        "correct": 0,
        "exp": "The number of Aは単数扱い。"
    },
    {
        "id": "m1_7",
        "type": "choice",
        "q": "I ( ) my bicycle repaired at the shop yesterday.",
        "cat": "模擬 大問1",
        "a": [
            "did",
            "made",
            "had",
            "let"
        ],
        "correct": 2,
        "exp": "使役の語法。"
    },
    {
        "id": "m1_8",
        "type": "choice",
        "q": "There is no ( ) what will happen next in this story.",
        "cat": "模擬 大問1",
        "a": [
            "say",
            "saying",
            "to say",
            "said"
        ],
        "correct": 1,
        "exp": "There is no ~ing「できない」。"
    },
    {
        "id": "m1_9",
        "type": "choice",
        "q": "This coffee is ( ) hot for me to drink right now.",
        "cat": "模擬 大問1",
        "a": [
            "very",
            "too",
            "so",
            "enough"
        ],
        "correct": 1,
        "exp": "too ~ to do構文。"
    },
    {
        "id": "m1_10",
        "type": "choice",
        "q": "I haven't seen my uncle ( ) last Monday.",
        "cat": "模擬 大問1",
        "a": [
            "for",
            "since",
            "during",
            "from"
        ],
        "correct": 1,
        "exp": "起点。"
    },
    {
        "id": "m1_11",
        "type": "choice",
        "q": "Hardly ( ) the station when the train started moving.",
        "cat": "模擬 大問1",
        "a": [
            "I reached",
            "had I reached",
            "did I reach",
            "I had reached"
        ],
        "correct": 1,
        "exp": "Hardly ~ whenの倒置。"
    },
    {
        "id": "m1_12",
        "type": "choice",
        "q": "Smoking is ( ) prohibited in all areas of this building.",
        "cat": "模擬 大問1",
        "a": [
            "strictly",
            "strongly",
            "hardly",
            "highly"
        ],
        "correct": 0,
        "exp": "定型的な副詞。"
    },
    {
        "id": "m1_13",
        "type": "choice",
        "q": "You should ( ) advantage of this great opportunity.",
        "cat": "模擬 大問1",
        "a": [
            "get",
            "make",
            "take",
            "do"
        ],
        "correct": 2,
        "exp": "熟語。"
    },
    {
        "id": "m1_14",
        "type": "choice",
        "q": "The lecture was so ( ) that I almost fell asleep.",
        "cat": "模擬 大問1",
        "a": [
            "bore",
            "boring",
            "bored",
            "to bore"
        ],
        "correct": 1,
        "exp": "現在分詞の形容詞的用法。"
    },
    {
        "id": "m1_15",
        "type": "choice",
        "q": "He insisted ( ) for the dinner last night.",
        "cat": "模擬 大問1",
        "a": [
            "to pay",
            "on paying",
            "paying",
            "that he pays"
        ],
        "correct": 1,
        "exp": "insistの語法。"
    },
    {
        "id": "m1_16",
        "type": "choice",
        "q": "If it ( ) not for your help, I would fail the exam.",
        "cat": "模擬 大問1",
        "a": [
            "is",
            "were",
            "had been",
            "been"
        ],
        "correct": 1,
        "exp": "If it were not for ~「もし今〜がなければ」。"
    },
    {
        "id": "m1_17",
        "type": "choice",
        "q": "I wish I ( ) more money when I was a student.",
        "cat": "模擬 大問1",
        "a": [
            "have",
            "had",
            "had had",
            "would have"
        ],
        "correct": 2,
        "exp": "過去の事実に反する願望。"
    },
    {
        "id": "m1_18",
        "type": "choice",
        "q": "He speaks English as if he ( ) a native speaker.",
        "cat": "模擬 大問1",
        "a": [
            "is",
            "be",
            "were",
            "will be"
        ],
        "correct": 2,
        "exp": "as if + 仮定法。"
    },
    {
        "id": "m1_19",
        "type": "choice",
        "q": "The news ( ) everyone in the office this morning.",
        "cat": "模擬 大問1",
        "a": [
            "surprised",
            "was surprised",
            "surprising",
            "was surprising"
        ],
        "correct": 0,
        "exp": "能動態「驚かせた」。"
    },
    {
        "id": "m1_20",
        "type": "choice",
        "q": "I have two brothers; one is a doctor and ( ) is a lawyer.",
        "cat": "模擬 大問1",
        "a": [
            "another",
            "others",
            "other",
            "the other"
        ],
        "correct": 3,
        "exp": "特定の残りの一人。"
    },
    {
        "id": "m1_21",
        "type": "choice",
        "q": "I'll call you as soon as I ( ) at the airport.",
        "cat": "模擬 大問1",
        "a": [
            "arrive",
            "will arrive",
            "arrived",
            "have arrived"
        ],
        "correct": 0,
        "exp": "時・条件の副詞節は現在形。"
    },
    {
        "id": "m1_22",
        "type": "choice",
        "q": "It ( ) for three days when the flood occurred.",
        "cat": "模擬 大問1",
        "a": [
            "is raining",
            "was raining",
            "had been raining",
            "has rained"
        ],
        "correct": 2,
        "exp": "過去完了進行形。"
    },
    {
        "id": "m1_23",
        "type": "choice",
        "q": "The movie ( ) by the time we arrived at the theater.",
        "cat": "模擬 大問1",
        "a": [
            "starts",
            "has started",
            "had started",
            "would start"
        ],
        "correct": 2,
        "exp": "過去完了（完了）。"
    },
    {
        "id": "m1_24",
        "type": "choice",
        "q": "Please wait here until I ( ) back.",
        "cat": "模擬 大問1",
        "a": [
            "come",
            "will come",
            "came",
            "have come"
        ],
        "correct": 0,
        "exp": "時を表す副詞節。"
    },
    {
        "id": "m1_25",
        "type": "choice",
        "q": "I ( ) rather stay home than go out in this heavy rain.",
        "cat": "模擬 大問1",
        "a": [
            "should",
            "would",
            "could",
            "might"
        ],
        "correct": 1,
        "exp": "would rather A than B。\n26-50"
    },
    {
        "id": "m1_26",
        "type": "choice",
        "q": "You ( ) have told me the truth much earlier.",
        "cat": "模擬 大問1",
        "a": [
            "must",
            "should",
            "may",
            "can"
        ],
        "correct": 1,
        "exp": "should have p.p.「すべきだったのに」。"
    },
    {
        "id": "m1_27",
        "type": "choice",
        "q": "She ( ) have forgotten our meeting today.",
        "cat": "模擬 大問1",
        "a": [
            "should",
            "can",
            "must",
            "ought"
        ],
        "correct": 2,
        "exp": "must have p.p.「したに違いない」。"
    },
    {
        "id": "m1_28",
        "type": "choice",
        "q": "It is time you ( ) your room. It’s very messy.",
        "cat": "模擬 大問1",
        "a": [
            "clean",
            "to clean",
            "cleaned",
            "should clean"
        ],
        "correct": 2,
        "exp": "It is time + 仮定法過去。"
    },
    {
        "id": "m1_29",
        "type": "choice",
        "q": "The police ordered the driver ( ) the car immediately.",
        "cat": "模擬 大問1",
        "a": [
            "stop",
            "to stop",
            "stopping",
            "stopped"
        ],
        "correct": 1,
        "exp": "order A to do。"
    },
    {
        "id": "m1_30",
        "type": "choice",
        "q": "It is no use ( ) over spilled milk.",
        "cat": "模擬 大問1",
        "a": [
            "cry",
            "crying",
            "to cry",
            "cried"
        ],
        "correct": 1,
        "exp": "It is no use ~ing。"
    },
    {
        "id": "m1_31",
        "type": "choice",
        "q": "I remember ( ) this movie with my father before.",
        "cat": "模擬 大問1",
        "a": [
            "watch",
            "watching",
            "to watch",
            "watched"
        ],
        "correct": 1,
        "exp": "過去に「したこと」を覚えている。"
    },
    {
        "id": "m1_32",
        "type": "choice",
        "q": "She went to the library so as ( ) study in a quiet place.",
        "cat": "模擬 大問1",
        "a": [
            "to",
            "for",
            "that",
            "in order"
        ],
        "correct": 0,
        "exp": "so as to do。"
    },
    {
        "id": "m1_33",
        "type": "choice",
        "q": "He was seen ( ) into the house last night.",
        "cat": "模擬 大問1",
        "a": [
            "enter",
            "to enter",
            "entered",
            "to be entered"
        ],
        "correct": 1,
        "exp": "知覚動詞の受動態はto不定詞。"
    },
    {
        "id": "m1_34",
        "type": "choice",
        "q": "I look forward ( ) seeing you again in Tokyo.",
        "cat": "模擬 大問1",
        "a": [
            "at",
            "on",
            "to",
            "for"
        ],
        "correct": 2,
        "exp": "熟語。"
    },
    {
        "id": "m1_35",
        "type": "choice",
        "q": "He avoided ( ) my questions about the accident.",
        "cat": "模擬 大問1",
        "a": [
            "answer",
            "to answer",
            "answering",
            "answered"
        ],
        "correct": 2,
        "exp": "avoidは動名詞のみ目的語。"
    },
    {
        "id": "m1_36",
        "type": "choice",
        "q": "Generally ( ), the Japanese are very polite.",
        "cat": "模擬 大問1",
        "a": [
            "speak",
            "speaking",
            "spoken",
            "to speak"
        ],
        "correct": 1,
        "exp": "独立分詞構文。"
    },
    {
        "id": "m1_37",
        "type": "choice",
        "q": "( ) from the moon, the earth looks like a blue ball.",
        "cat": "模擬 大問1",
        "a": [
            "See",
            "Seeing",
            "Seen",
            "To see"
        ],
        "correct": 2,
        "exp": "分詞構文（受動）。"
    },
    {
        "id": "m1_38",
        "type": "choice",
        "q": "It is kind ( ) you to help me with my luggage.",
        "cat": "模擬 大問1",
        "a": [
            "of",
            "for",
            "at",
            "to"
        ],
        "correct": 0,
        "exp": "人の性質を表す形容詞 + of。"
    },
    {
        "id": "m1_39",
        "type": "choice",
        "q": "Stop ( ) noise. I am trying to focus on my work.",
        "cat": "模擬 大問1",
        "a": [
            "make",
            "making",
            "to make",
            "made"
        ],
        "correct": 1,
        "exp": "stop ~ing「やめる」。"
    },
    {
        "id": "m1_40",
        "type": "choice",
        "q": "This is the city ( ) I was born and raised.",
        "cat": "模擬 大問1",
        "a": [
            "which",
            "where",
            "that",
            "what"
        ],
        "correct": 1,
        "exp": "関係副詞。"
    },
    {
        "id": "m1_41",
        "type": "choice",
        "q": "He is the man ( ) I believe stole my bag yesterday.",
        "cat": "模擬 大問1",
        "a": [
            "who",
            "whom",
            "whose",
            "which"
        ],
        "correct": 0,
        "exp": "連鎖関係代名詞の主格。"
    },
    {
        "id": "m1_42",
        "type": "choice",
        "q": "I will give you ( ) you want for your birthday.",
        "cat": "模擬 大問1",
        "a": [
            "whatever",
            "whichever",
            "however",
            "whenever"
        ],
        "correct": 0,
        "exp": "複合関係代名詞。"
    },
    {
        "id": "m1_43",
        "type": "choice",
        "q": "This is the reason ( ) I was late for the appointment.",
        "cat": "模擬 大問1",
        "a": [
            "why",
            "where",
            "how",
            "when"
        ],
        "correct": 0,
        "exp": "理由。"
    },
    {
        "id": "m1_44",
        "type": "choice",
        "q": "The house ( ) roof is red belongs to my uncle.",
        "cat": "模擬 大問1",
        "a": [
            "who",
            "which",
            "whose",
            "that"
        ],
        "correct": 2,
        "exp": "所有格。"
    },
    {
        "id": "m1_45",
        "type": "choice",
        "q": "Tell me ( ) happened at the party last night.",
        "cat": "模擬 大問1",
        "a": [
            "that",
            "which",
            "what",
            "where"
        ],
        "correct": 2,
        "exp": "先行詞を含む関係代名詞。"
    },
    {
        "id": "m1_46",
        "type": "choice",
        "q": "Paris is a city ( ) I have always wanted to visit.",
        "cat": "模擬 大問1",
        "a": [
            "where",
            "which",
            "what",
            "when"
        ],
        "correct": 1,
        "exp": "目的格の関係代名詞。"
    },
    {
        "id": "m1_47",
        "type": "choice",
        "q": "This car is ( ) faster than the one I used to have.",
        "cat": "模擬 大問1",
        "a": [
            "more",
            "very",
            "much",
            "so"
        ],
        "correct": 2,
        "exp": "比較級の強調。"
    },
    {
        "id": "m1_48",
        "type": "choice",
        "q": "He is the ( ) intelligent student in our class.",
        "cat": "模擬 大問1",
        "a": [
            "more",
            "most",
            "best",
            "very"
        ],
        "correct": 1,
        "exp": "最上級。"
    },
    {
        "id": "m1_49",
        "type": "choice",
        "q": "The ( ) you study, the more you will learn.",
        "cat": "模擬 大問1",
        "a": [
            "hard",
            "harder",
            "hardest",
            "more hard"
        ],
        "correct": 1,
        "exp": "the 比較級, the 比較級。"
    },
    {
        "id": "m1_50",
        "type": "choice",
        "q": "Nothing is ( ) precious than time.",
        "cat": "模擬 大問1",
        "a": [
            "most",
            "more",
            "as",
            "best"
        ],
        "correct": 1,
        "exp": "比較級による最上級。\n51-75"
    },
    {
        "id": "m1_51",
        "type": "choice",
        "q": "The price of the book is too ( ).",
        "cat": "模擬 大問1",
        "a": [
            "expensive",
            "high",
            "dear",
            "costly"
        ],
        "correct": 1,
        "exp": "価格が高いはhigh。"
    },
    {
        "id": "m1_52",
        "type": "choice",
        "q": "He robbed the lady ( ) her expensive purse.",
        "cat": "模擬 大問1",
        "a": [
            "off",
            "from",
            "of",
            "with"
        ],
        "correct": 2,
        "exp": "rob A of B。"
    },
    {
        "id": "m1_53",
        "type": "choice",
        "q": "The news ( ) to be false after all.",
        "cat": "模擬 大問1",
        "a": [
            "turned out",
            "looked",
            "resulted",
            "ended"
        ],
        "correct": 0,
        "exp": "判明した。"
    },
    {
        "id": "m1_54",
        "type": "choice",
        "q": "I differ ( ) you on this particular point.",
        "cat": "模擬 大問1",
        "a": [
            "from",
            "with",
            "to",
            "at"
        ],
        "correct": 0,
        "exp": "differ from。"
    },
    {
        "id": "m1_55",
        "type": "choice",
        "q": "The meeting was put ( ) until next Friday.",
        "cat": "模擬 大問1",
        "a": [
            "off",
            "out",
            "away",
            "down"
        ],
        "correct": 0,
        "exp": "put off。"
    },
    {
        "id": "m1_56",
        "type": "choice",
        "q": "He takes ( ) his father in many ways.",
        "cat": "模擬 大問1",
        "a": [
            "after",
            "off",
            "up",
            "on"
        ],
        "correct": 0,
        "exp": "take after「似ている」。"
    },
    {
        "id": "m1_57",
        "type": "choice",
        "q": "I ( ) across an old friend on my way home.",
        "cat": "模擬 大問1",
        "a": [
            "came",
            "met",
            "saw",
            "found"
        ],
        "correct": 0,
        "exp": "come across。"
    },
    {
        "id": "m1_58",
        "type": "choice",
        "q": "Please ( ) sure to lock the door before you leave.",
        "cat": "模擬 大問1",
        "a": [
            "make",
            "take",
            "get",
            "do"
        ],
        "correct": 0,
        "exp": "make sure。"
    },
    {
        "id": "m1_59",
        "type": "choice",
        "q": "She is ( ) to getting up early in the morning.",
        "cat": "模擬 大問1",
        "a": [
            "use",
            "used",
            "using",
            "useful"
        ],
        "correct": 1,
        "exp": "be used to ~ing。"
    },
    {
        "id": "m1_60",
        "type": "choice",
        "q": "I ( ) like to thank you for your great kindness.",
        "cat": "模擬 大問1",
        "a": [
            "will",
            "would",
            "shall",
            "can"
        ],
        "correct": 1,
        "exp": "would like to do。"
    },
    {
        "id": "m1_61",
        "type": "choice",
        "q": "If I ( ) you, I would accept the offer.",
        "cat": "模擬 大問1",
        "a": [
            "am",
            "was",
            "were",
            "been"
        ],
        "correct": 2,
        "exp": "仮定法過去。"
    },
    {
        "id": "m1_62",
        "type": "choice",
        "q": "Please turn ( ) the light when you leave the room.",
        "cat": "模擬 大問1",
        "a": [
            "off",
            "out",
            "away",
            "down"
        ],
        "correct": 0,
        "exp": "turn off。"
    },
    {
        "id": "m1_63",
        "type": "choice",
        "q": "The boy ( ) is playing the piano is my brother.",
        "cat": "模擬 大問1",
        "a": [
            "who",
            "whom",
            "whose",
            "which"
        ],
        "correct": 0,
        "exp": "主格。"
    },
    {
        "id": "m1_64",
        "type": "choice",
        "q": "I ( ) been to Kyoto several times as a child.",
        "cat": "模擬 大問1",
        "a": [
            "was",
            "have",
            "had",
            "am"
        ],
        "correct": 1,
        "exp": "現在完了。"
    },
    {
        "id": "m1_65",
        "type": "choice",
        "q": "She ( ) very happy when she heard the good news.",
        "cat": "模擬 大問1",
        "a": [
            "looked",
            "looked like",
            "is looked",
            "was looking"
        ],
        "correct": 0,
        "exp": "見える。"
    },
    {
        "id": "m1_66",
        "type": "choice",
        "q": "You ( ) not park your car in front of the gate.",
        "cat": "模擬 大問1",
        "a": [
            "must",
            "may",
            "can",
            "should"
        ],
        "correct": 0,
        "exp": "禁止。"
    },
    {
        "id": "m1_67",
        "type": "choice",
        "q": "How ( ) is it from here to the station?",
        "cat": "模擬 大問1",
        "a": [
            "long",
            "far",
            "much",
            "many"
        ],
        "correct": 1,
        "exp": "距離。"
    },
    {
        "id": "m1_68",
        "type": "choice",
        "q": "I'm ( ) tired that I cannot walk even a step.",
        "cat": "模擬 大問1",
        "a": [
            "so",
            "too",
            "very",
            "much"
        ],
        "correct": 0,
        "exp": "so ~ that構文。"
    },
    {
        "id": "m1_69",
        "type": "choice",
        "q": "He cannot ( ) up with his noisy neighbors anymore.",
        "cat": "模擬 大問1",
        "a": [
            "put",
            "get",
            "take",
            "keep"
        ],
        "correct": 0,
        "exp": "put up with。"
    },
    {
        "id": "m1_70",
        "type": "choice",
        "q": "The child ( ) to school by his father every day.",
        "cat": "模擬 大問1",
        "a": [
            "takes",
            "taking",
            "is taken",
            "is taking"
        ],
        "correct": 2,
        "exp": "受動態。"
    },
    {
        "id": "m1_71",
        "type": "choice",
        "q": "There are ( ) cars on the street today than usual.",
        "cat": "模擬 大問1",
        "a": [
            "fewer",
            "less",
            "fewest",
            "least"
        ],
        "correct": 0,
        "exp": "可算名詞の比較。"
    },
    {
        "id": "m1_72",
        "type": "choice",
        "q": "It ( ) me two hours to finish the report yesterday.",
        "cat": "模擬 大問1",
        "a": [
            "spent",
            "cost",
            "took",
            "needed"
        ],
        "correct": 2,
        "exp": "It takes 人 時間。"
    },
    {
        "id": "m1_73",
        "type": "choice",
        "q": "The bridge ( ) built now will be the longest in the world.",
        "cat": "模擬 大問1",
        "a": [
            "being",
            "been",
            "to be",
            "having been"
        ],
        "correct": 0,
        "exp": "現在進行中の受動。"
    },
    {
        "id": "m1_74",
        "type": "choice",
        "q": "He spoke slowly ( ) the audience could understand him.",
        "cat": "模擬 大問1",
        "a": [
            "so that",
            "in order to",
            "because",
            "as if"
        ],
        "correct": 0,
        "exp": "目的。"
    },
    {
        "id": "m1_75",
        "type": "choice",
        "q": "Only a ( ) people attended the seminar yesterday.",
        "cat": "模擬 大問1",
        "a": [
            "few",
            "little",
            "small",
            "bit"
        ],
        "correct": 0,
        "exp": "数えられる名詞。\n76-100"
    },
    {
        "id": "m1_76",
        "type": "choice",
        "q": "The exam was ( ) easier than I had expected.",
        "cat": "模擬 大問1",
        "a": [
            "much",
            "more",
            "very",
            "so"
        ],
        "correct": 0,
        "exp": "比較級強調。"
    },
    {
        "id": "m1_77",
        "type": "choice",
        "q": "I found it difficult ( ) the math problem myself.",
        "cat": "模擬 大問1",
        "a": [
            "solve",
            "solving",
            "to solve",
            "solved"
        ],
        "correct": 2,
        "exp": "形式目的語。"
    },
    {
        "id": "m1_78",
        "type": "choice",
        "q": "The mountain is covered ( ) snow all year round.",
        "cat": "模擬 大問1",
        "a": [
            "by",
            "with",
            "in",
            "at"
        ],
        "correct": 1,
        "exp": "受動態の慣用。"
    },
    {
        "id": "m1_79",
        "type": "choice",
        "q": "Neither my parents ( ) my sister could come to the party.",
        "cat": "模擬 大問1",
        "a": [
            "or",
            "nor",
            "and",
            "but"
        ],
        "correct": 1,
        "exp": "neither A nor B。"
    },
    {
        "id": "m1_80",
        "type": "choice",
        "q": "She ( ) have seen him yesterday, but I am not sure.",
        "cat": "模擬 大問1",
        "a": [
            "must",
            "can",
            "might",
            "should"
        ],
        "correct": 2,
        "exp": "可能性。"
    },
    {
        "id": "m1_81",
        "type": "choice",
        "q": "The food at that restaurant ( ) delicious.",
        "cat": "模擬 大問1",
        "a": [
            "tastes",
            "tasting",
            "is tasted",
            "to taste"
        ],
        "correct": 0,
        "exp": "状態動詞。"
    },
    {
        "id": "m1_82",
        "type": "choice",
        "q": "He apologized ( ) being late for the class.",
        "cat": "模擬 大問1",
        "a": [
            "to",
            "for",
            "with",
            "at"
        ],
        "correct": 1,
        "exp": "熟語。"
    },
    {
        "id": "m1_83",
        "type": "choice",
        "q": "The water was ( ) cold for us to swim in.",
        "cat": "模擬 大問1",
        "a": [
            "so",
            "very",
            "too",
            "much"
        ],
        "correct": 2,
        "exp": "too ~ to構文。"
    },
    {
        "id": "m1_84",
        "type": "choice",
        "q": "She has been studying English ( ) five years.",
        "cat": "模擬 大問1",
        "a": [
            "since",
            "for",
            "during",
            "before"
        ],
        "correct": 1,
        "exp": "期間。"
    },
    {
        "id": "m1_85",
        "type": "choice",
        "q": "I'll lend you the book provided that you ( ) it back soon.",
        "cat": "模擬 大問1",
        "a": [
            "bring",
            "will bring",
            "brought",
            "bringing"
        ],
        "correct": 0,
        "exp": "条件の副詞節。"
    },
    {
        "id": "m1_86",
        "type": "choice",
        "q": "He ( ) me that he would be busy next Sunday.",
        "cat": "模擬 大問1",
        "a": [
            "said",
            "told",
            "spoke",
            "talked"
        ],
        "correct": 1,
        "exp": "tell A that。"
    },
    {
        "id": "m1_87",
        "type": "choice",
        "q": "( ) I know, there are no problems with the plan.",
        "cat": "模擬 大問1",
        "a": [
            "As long as",
            "As far as",
            "As many as",
            "As soon as"
        ],
        "correct": 1,
        "exp": "範囲（〜する限り）。"
    },
    {
        "id": "m1_88",
        "type": "choice",
        "q": "The project was completed ( ) schedule.",
        "cat": "模擬 大問1",
        "a": [
            "on",
            "at",
            "in",
            "by"
        ],
        "correct": 0,
        "exp": "熟語。"
    },
    {
        "id": "m1_89",
        "type": "choice",
        "q": "I cannot help ( ) about my future.",
        "cat": "模擬 大問1",
        "a": [
            "think",
            "thinking",
            "to think",
            "thought"
        ],
        "correct": 1,
        "exp": "cannot help ~ing。"
    },
    {
        "id": "m1_90",
        "type": "choice",
        "q": "He is independent ( ) his parents.",
        "cat": "模擬 大問1",
        "a": [
            "of",
            "from",
            "with",
            "on"
        ],
        "correct": 0,
        "exp": "independent of。"
    },
    {
        "id": "m1_91",
        "type": "choice",
        "q": "The meeting was ( ) over when I arrived.",
        "cat": "模擬 大問1",
        "a": [
            "near",
            "nearly",
            "about",
            "almostly"
        ],
        "correct": 1,
        "exp": "ほとんど。"
    },
    {
        "id": "m1_92",
        "type": "choice",
        "q": "We must carry ( ) the plan as soon as possible.",
        "cat": "模擬 大問1",
        "a": [
            "out",
            "off",
            "on",
            "away"
        ],
        "correct": 0,
        "exp": "carry out「実行する」。"
    },
    {
        "id": "m1_93",
        "type": "choice",
        "q": "I am not ( ) of what you are saying.",
        "cat": "模擬 大問1",
        "a": [
            "sure",
            "clear",
            "right",
            "truth"
        ],
        "correct": 0,
        "exp": "be sure of。"
    },
    {
        "id": "m1_94",
        "type": "choice",
        "q": "She is ( ) a book in the living room now.",
        "cat": "模擬 大問1",
        "a": [
            "reading",
            "looking",
            "watching",
            "seeing"
        ],
        "correct": 0,
        "exp": "他動詞。"
    },
    {
        "id": "m1_95",
        "type": "choice",
        "q": "My father ( ) to smoke, but he has quit now.",
        "cat": "模擬 大問1",
        "a": [
            "used",
            "use",
            "using",
            "uses"
        ],
        "correct": 0,
        "exp": "かつての習慣。"
    },
    {
        "id": "m1_96",
        "type": "choice",
        "q": "( ) do you usually go to bed?",
        "cat": "模擬 大問1",
        "a": [
            "What time",
            "When time",
            "How time",
            "Which time"
        ],
        "correct": 0,
        "exp": "時刻。"
    },
    {
        "id": "m1_97",
        "type": "choice",
        "q": "He ( ) to be an honest man.",
        "cat": "模擬 大問1",
        "a": [
            "seems",
            "looks",
            "appears",
            "sounds"
        ],
        "correct": 0,
        "exp": "思われる。"
    },
    {
        "id": "m1_98",
        "type": "choice",
        "q": "( ) did you come to Japan? --- By plane.",
        "cat": "模擬 大問1",
        "a": [
            "How",
            "What",
            "Why",
            "Which"
        ],
        "correct": 0,
        "exp": "手段。"
    },
    {
        "id": "m1_99",
        "type": "choice",
        "q": "I ( ) my best to win the game next week.",
        "cat": "模擬 大問1",
        "a": [
            "do",
            "will do",
            "did",
            "done"
        ],
        "correct": 1,
        "exp": "未来。"
    },
    {
        "id": "m1_100",
        "type": "choice",
        "q": "She has ( ) finished her lunch.",
        "cat": "模擬 大問1",
        "a": [
            "already",
            "yet",
            "still",
            "ever"
        ],
        "correct": 0,
        "exp": "すでに。"
    }
];
const mockP2Data = [
    {
        "id": "m2_1",
        "type": "scramble",
        "jp": "私は新しい家へ引っ越すのを楽しみにしています。",
        "cat": "模擬 大問2",
        "fixed": [
            "I am",
            "to a new house."
        ],
        "words": [
            "forward",
            "looking",
            "moving",
            "to"
        ],
        "correct": "looking forward to moving",
        "exp": "look forward to ~ing: 〜を楽しみに待つ"
    },
    {
        "id": "m2_2",
        "type": "scramble",
        "jp": "あまりにも寒くて、私たちは外へ出られませんでした。",
        "cat": "模擬 大問2",
        "fixed": [
            "It was",
            "to go out."
        ],
        "words": [
            "cold",
            "for",
            "too",
            "us",
            "go",
            "to"
        ],
        "correct": "too cold for us to go",
        "exp": "too ~ to ...: 〜すぎて...できない"
    },
    {
        "id": "m2_3",
        "type": "scramble",
        "jp": "彼は試験に合格するために一生懸命勉強した。",
        "cat": "模擬 大問2",
        "fixed": [
            "He studied hard",
            "the exam."
        ],
        "words": [
            "as",
            "order",
            "in",
            "to",
            "pass",
            "so"
        ],
        "correct": "in order to pass",
        "exp": "in order to do: 〜するために"
    },
    {
        "id": "m2_4",
        "type": "scramble",
        "jp": "忘れずにその手紙を投函してください。",
        "cat": "模擬 大問2",
        "fixed": [
            "Please",
            "the letter."
        ],
        "words": [
            "to",
            "mail",
            "remember",
            "don't",
            "forget"
        ],
        "correct": "remember to mail",
        "exp": "remember to do: 忘れずに〜する"
    },
    {
        "id": "m2_5",
        "type": "scramble",
        "jp": "その知らせを聞いて、彼女は泣きだした。",
        "cat": "模擬 大問2",
        "fixed": [
            "Hearing the news,",
            "."
        ],
        "words": [
            "began",
            "she",
            "to",
            "cry"
        ],
        "correct": "she began to cry",
        "exp": "began to do: 〜し始めた"
    },
    {
        "id": "m2_6",
        "type": "scramble",
        "jp": "彼女は以前よりもさらに美しくなった。",
        "cat": "模擬 大問2",
        "fixed": [
            "She has become",
            "."
        ],
        "words": [
            "before",
            "more",
            "even",
            "beautiful",
            "than"
        ],
        "correct": "even more beautiful than",
        "exp": "even: 比較級の強調"
    },
    {
        "id": "m2_7",
        "type": "scramble",
        "jp": "ここから駅まで歩いてどのくらいかかりますか。",
        "cat": "模擬 大問2",
        "fixed": [
            "How long",
            "from here to the station?"
        ],
        "words": [
            "take",
            "does",
            "to",
            "it",
            "walk"
        ],
        "correct": "does it take to walk",
        "exp": "It takes 時間 to do の疑問文"
    },
    {
        "id": "m2_8",
        "type": "scramble",
        "jp": "彼は親切にも私を駅まで送ってくれた。",
        "cat": "模擬 大問2",
        "fixed": [
            "He was",
            "to the station."
        ],
        "words": [
            "me",
            "enough",
            "to",
            "kind",
            "drive"
        ],
        "correct": "kind enough to drive me",
        "exp": "形容詞 + enough to do: 〜するほど十分に..."
    },
    {
        "id": "m2_9",
        "type": "scramble",
        "jp": "私はその問題をどう解決すればいいかわからない。",
        "cat": "模擬 大問2",
        "fixed": [
            "I don't know",
            "."
        ],
        "words": [
            "problem",
            "the",
            "how",
            "solve",
            "to"
        ],
        "correct": "how to solve the problem",
        "exp": "疑 + to do: 〜のしかた"
    },
    {
        "id": "m2_10",
        "type": "scramble",
        "jp": "彼は私に嘘をつかないようにと約束した。",
        "cat": "模擬 大問2",
        "fixed": [
            "He promised",
            "."
        ],
        "words": [
            "a lie",
            "tell",
            "to",
            "not",
            "me"
        ],
        "correct": "not to tell me a lie",
        "exp": "不定詞の否定 not to の位置に注意"
    },
    {
        "id": "m2_11",
        "type": "scramble",
        "jp": "彼女は医者になることを決心した。",
        "cat": "模擬 大問2",
        "fixed": [
            "She",
            "a doctor."
        ],
        "words": [
            "made",
            "become",
            "up",
            "mind",
            "to",
            "her"
        ],
        "correct": "made up her mind to become",
        "exp": "make up one's mind to do: 〜する決心をする"
    },
    {
        "id": "m2_12",
        "type": "scramble",
        "jp": "雨が降れば、試合は中止されるだろう。",
        "cat": "模擬 大問2",
        "fixed": [
            "If it rains,",
            "."
        ],
        "words": [
            "canceled",
            "be",
            "the",
            "game",
            "will"
        ],
        "correct": "the game will be canceled",
        "exp": "助動詞 + 受動態 be p.p."
    },
    {
        "id": "m2_13",
        "type": "scramble",
        "jp": "彼は有名な作家だと言われている。",
        "cat": "模擬 大問2",
        "fixed": [
            "",
            "he is a famous writer."
        ],
        "words": [
            "that",
            "said",
            "is",
            "It"
        ],
        "correct": "It is said that",
        "exp": "〜と言われている：伝聞の形式主語構文"
    },
    {
        "id": "m2_14",
        "type": "scramble",
        "jp": "私は彼がその会合に来るかどうか確信がない。",
        "cat": "模擬 大問2",
        "fixed": [
            "I'm not sure",
            "to the meeting."
        ],
        "words": [
            "will",
            "whether",
            "come",
            "he"
        ],
        "correct": "whether he will come",
        "exp": "whether S V: 〜かどうか"
    },
    {
        "id": "m2_15",
        "type": "scramble",
        "jp": "もっと一生懸命勉強していたら、合格できたのに。",
        "cat": "模擬 大問2",
        "fixed": [
            "If I had studied harder, I",
            "the exam."
        ],
        "words": [
            "passed",
            "have",
            "could"
        ],
        "correct": "could have passed",
        "exp": "仮定法過去完了の帰結節: could have p.p."
    },
    {
        "id": "m2_16",
        "type": "scramble",
        "jp": "君が今日ここに来てくれるとは思わなかったよ。",
        "cat": "模擬 大問2",
        "fixed": [
            "I didn't",
            "today."
        ],
        "words": [
            "would",
            "here",
            "expect",
            "you",
            "to",
            "come"
        ],
        "correct": "expect you to come here",
        "exp": "expect A to do: Aが〜すると予期する"
    },
    {
        "id": "m2_17",
        "type": "scramble",
        "jp": "早起きは健康によい。",
        "cat": "模擬 大問2",
        "fixed": [
            "",
            "is good for your health."
        ],
        "words": [
            "up",
            "early",
            "Getting"
        ],
        "correct": "Getting up early",
        "exp": "動名詞の主語：〜すること"
    },
    {
        "id": "m2_18",
        "type": "scramble",
        "jp": "彼は私の3倍の本を持っている。",
        "cat": "模擬 大問2",
        "fixed": [
            "He has",
            "as I have."
        ],
        "words": [
            "as",
            "books",
            "as",
            "three",
            "many",
            "times"
        ],
        "correct": "three times as many books",
        "exp": "倍数 + as many 名詞 as"
    },
    {
        "id": "m2_19",
        "type": "scramble",
        "jp": "これは私が今まで見た中で最も美しい写真です。",
        "cat": "模擬 大問2",
        "fixed": [
            "This is",
            "ever seen."
        ],
        "words": [
            "picture",
            "most",
            "I've",
            "beautiful",
            "the"
        ],
        "correct": "the most beautiful picture I've",
        "exp": "関係代名詞の省略"
    },
    {
        "id": "m2_20",
        "type": "scramble",
        "jp": "ドアを閉めたままにしておいてください。",
        "cat": "模擬 大問2",
        "fixed": [
            "Please",
            "."
        ],
        "words": [
            "closed",
            "door",
            "the",
            "leave"
        ],
        "correct": "leave the door closed",
        "exp": "leave + O + C: Oを〜のままにする"
    },
    {
        "id": "m2_21",
        "type": "scramble",
        "jp": "彼は私に何があったかを教えてくれなかった。",
        "cat": "模擬 大問2",
        "fixed": [
            "He didn't",
            "."
        ],
        "words": [
            "tell",
            "happened",
            "what",
            "me",
            "had"
        ],
        "correct": "tell me what had happened",
        "exp": "第4文型 tell 人 物 / 間接疑問文"
    },
    {
        "id": "m2_22",
        "type": "scramble",
        "jp": "君はただ座って待っているだけでいい。",
        "cat": "模擬 大問2",
        "fixed": [
            "All you",
            "and wait."
        ],
        "words": [
            "do",
            "is",
            "sit",
            "have",
            "to"
        ],
        "correct": "have to do is sit",
        "exp": "All S have to do is do: Sはただ〜しさえすればよい"
    },
    {
        "id": "m2_23",
        "type": "scramble",
        "jp": "私は昨日、自転車を修理してもらった。",
        "cat": "模擬 大問2",
        "fixed": [
            "I",
            "yesterday."
        ],
        "words": [
            "my",
            "had",
            "repaired",
            "bike"
        ],
        "correct": "had my bike repaired",
        "exp": "have + 物 + p.p.: 物を〜してもらう"
    },
    {
        "id": "m2_24",
        "type": "scramble",
        "jp": "彼はその知らせを聞いて驚いているようだ。",
        "cat": "模擬 大問2",
        "fixed": [
            "He",
            "to hear the news."
        ],
        "words": [
            "be",
            "surprised",
            "seems",
            "to"
        ],
        "correct": "seems to be surprised",
        "exp": "seem to do: 〜のようだ"
    },
    {
        "id": "m2_25",
        "type": "scramble",
        "jp": "富士山は日本で最も高い山です。",
        "cat": "模擬 大問2",
        "fixed": [
            "Mt. Fuji is",
            "in Japan."
        ],
        "words": [
            "mountain",
            "the",
            "highest"
        ],
        "correct": "the highest mountain",
        "exp": "最上級の基本形"
    },
    {
        "id": "m2_26",
        "type": "scramble",
        "jp": "彼は有名な俳優として知られている。",
        "cat": "模擬 大問2",
        "fixed": [
            "He is",
            "a famous actor."
        ],
        "words": [
            "known",
            "as"
        ],
        "correct": "known as",
        "exp": "be known as: 〜として知られている"
    },
    {
        "id": "m2_27",
        "type": "scramble",
        "jp": "彼女はピアノを弾くのが上手です。",
        "cat": "模擬 大問2",
        "fixed": [
            "She is",
            "the piano."
        ],
        "words": [
            "at",
            "playing",
            "good"
        ],
        "correct": "good at playing",
        "exp": "be good at ~ing: 〜するのが得意だ"
    },
    {
        "id": "m2_28",
        "type": "scramble",
        "jp": "私は以前そこに住んでいたことがある。",
        "cat": "模擬 大問2",
        "fixed": [
            "I",
            "there."
        ],
        "words": [
            "to",
            "used",
            "live"
        ],
        "correct": "used to live",
        "exp": "used to do: かつて〜していた"
    },
    {
        "id": "m2_29",
        "type": "scramble",
        "jp": "外出するよりは家にいたい。",
        "cat": "模擬 大問2",
        "fixed": [
            "I",
            "than go out."
        ],
        "words": [
            "would",
            "rather",
            "stay",
            "home"
        ],
        "correct": "would rather stay home",
        "exp": "would rather A than B: BよりむしろAしたい"
    },
    {
        "id": "m2_30",
        "type": "scramble",
        "jp": "たとえ雨が降っても、私は行くつもりだ。",
        "cat": "模擬 大問2",
        "fixed": [
            "",
            "rains, I will go."
        ],
        "words": [
            "Even",
            "it",
            "if"
        ],
        "correct": "Even if it",
        "exp": "Even if S V: たとえ〜だとしても"
    },
    {
        "id": "m2_31",
        "type": "scramble",
        "jp": "彼は健康のためにタバコを吸うのをやめた。",
        "cat": "模擬 大問2",
        "fixed": [
            "He",
            "for his health."
        ],
        "words": [
            "up",
            "smoking",
            "gave"
        ],
        "correct": "gave up smoking",
        "exp": "give up ~ing: 〜することをあきらめる/やめる"
    },
    {
        "id": "m2_32",
        "type": "scramble",
        "jp": "窓を開けてもよろしいでしょうか。",
        "cat": "模擬 大問2",
        "fixed": [
            "Would you",
            "the window?"
        ],
        "words": [
            "opening",
            "mind"
        ],
        "correct": "mind opening",
        "exp": "Would you mind ~ing?: 〜していただけませんか"
    },
    {
        "id": "m2_33",
        "type": "scramble",
        "jp": "私は彼に駅への道を尋ねた。",
        "cat": "模擬 大問2",
        "fixed": [
            "I",
            "the way to the station."
        ],
        "words": [
            "him",
            "asked"
        ],
        "correct": "asked him",
        "exp": "ask + 人 + 物"
    },
    {
        "id": "m2_34",
        "type": "scramble",
        "jp": "彼女はとても親切なので、みんなに好かれている。",
        "cat": "模擬 大問2",
        "fixed": [
            "She is",
            "everyone likes her."
        ],
        "words": [
            "kind",
            "that",
            "so"
        ],
        "correct": "so kind that",
        "exp": "so ~ that ...: とても〜なので..."
    },
    {
        "id": "m2_35",
        "type": "scramble",
        "jp": "彼は私にそれをするように言った。",
        "cat": "模擬 大問2",
        "fixed": [
            "He",
            "it."
        ],
        "words": [
            "me",
            "do",
            "to",
            "told"
        ],
        "correct": "told me to do",
        "exp": "tell A to do: Aに〜するように言う"
    },
    {
        "id": "m2_36",
        "type": "scramble",
        "jp": "彼女がここへ来るかどうかはわからない。",
        "cat": "模擬 大問2",
        "fixed": [
            "",
            "she will come here is unknown."
        ],
        "words": [
            "Whether"
        ],
        "correct": "Whether",
        "exp": "Whether S V が名詞節で主語"
    },
    {
        "id": "m2_37",
        "type": "scramble",
        "jp": "私は昨夜1時間英語を勉強した。",
        "cat": "模擬 大問2",
        "fixed": [
            "I spent",
            "English last night."
        ],
        "words": [
            "studying",
            "hour",
            "one"
        ],
        "correct": "one hour studying",
        "exp": "spend 時間 ~ing: 〜して時間を過ごす"
    },
    {
        "id": "m2_38",
        "type": "scramble",
        "jp": "彼は医者ではない。教師でもない。",
        "cat": "模擬 大問2",
        "fixed": [
            "He is neither a doctor",
            "."
        ],
        "words": [
            "a",
            "teacher",
            "nor"
        ],
        "correct": "nor a teacher",
        "exp": "neither A nor B: AもBも〜ない"
    },
    {
        "id": "m2_39",
        "type": "scramble",
        "jp": "私はこの本を読み終えるのに2時間かかった。",
        "cat": "模擬 大問2",
        "fixed": [
            "It took",
            "reading this book."
        ],
        "words": [
            "hours",
            "to",
            "finish",
            "me",
            "two"
        ],
        "correct": "me two hours to finish",
        "exp": "It takes 人 時間 to do"
    },
    {
        "id": "m2_40",
        "type": "scramble",
        "jp": "ドアに鍵をかけるのを忘れないで。",
        "cat": "模擬 大問2",
        "fixed": [
            "Don't",
            "the door."
        ],
        "words": [
            "to",
            "lock",
            "forget"
        ],
        "correct": "forget to lock",
        "exp": "forget to do: 〜するのを忘れる"
    },
    {
        "id": "m2_41",
        "type": "scramble",
        "jp": "彼は10年以上日本に住んでいる。",
        "cat": "模擬 大問2",
        "fixed": [
            "He",
            "in Japan for over ten years."
        ],
        "words": [
            "been",
            "has",
            "living"
        ],
        "correct": "has been living",
        "exp": "現在完了進行形：継続"
    },
    {
        "id": "m2_42",
        "type": "scramble",
        "jp": "この本は読む価値がある。",
        "cat": "模擬 大問2",
        "fixed": [
            "This book is",
            "."
        ],
        "words": [
            "worth",
            "reading"
        ],
        "correct": "worth reading",
        "exp": "be worth ~ing: 〜する価値がある"
    },
    {
        "id": "m2_43",
        "type": "scramble",
        "jp": "彼女は金持ちであるかのように振る舞う。",
        "cat": "模擬 大問2",
        "fixed": [
            "She acts",
            "rich."
        ],
        "words": [
            "she",
            "as",
            "if",
            "were"
        ],
        "correct": "as if she were",
        "exp": "as if + 仮定法：まるで〜であるかのように"
    },
    {
        "id": "m2_44",
        "type": "scramble",
        "jp": "彼は自分の成功を誇りに思っている。",
        "cat": "模擬 大問2",
        "fixed": [
            "He is",
            "his success."
        ],
        "words": [
            "of",
            "proud"
        ],
        "correct": "proud of",
        "exp": "be proud of: 〜を誇りに思う"
    },
    {
        "id": "m2_45",
        "type": "scramble",
        "jp": "私は彼に泳ぎ方を教えた。",
        "cat": "模擬 大問2",
        "fixed": [
            "I",
            "how to swim."
        ],
        "words": [
            "him",
            "showed"
        ],
        "correct": "showed him",
        "exp": "show + 人 + 物"
    },
    {
        "id": "m2_46",
        "type": "scramble",
        "jp": "彼女は私よりも背が高い。",
        "cat": "模擬 大問2",
        "fixed": [
            "She is",
            "me."
        ],
        "words": [
            "than",
            "taller"
        ],
        "correct": "taller than",
        "exp": "比較級 + than"
    },
    {
        "id": "m2_47",
        "type": "scramble",
        "jp": "彼がそこへ行ったのは事実だ。",
        "cat": "模擬 大問2",
        "fixed": [
            "It is",
            "he went there."
        ],
        "words": [
            "fact",
            "that",
            "a"
        ],
        "correct": "a fact that",
        "exp": "It is a fact that: 〜なのは事実だ"
    },
    {
        "id": "m2_48",
        "type": "scramble",
        "jp": "私は英語で手紙を書くのが難しいとわかった。",
        "cat": "模擬 大問2",
        "fixed": [
            "I found",
            "to write a letter in English."
        ],
        "words": [
            "it",
            "difficult"
        ],
        "correct": "it difficult",
        "exp": "find it C to do: 〜するのがCだとわかる"
    },
    {
        "id": "m2_49",
        "type": "scramble",
        "jp": "彼は嘘をつくような人ではない。",
        "cat": "模擬 大問2",
        "fixed": [
            "He is",
            "man to tell a lie."
        ],
        "words": [
            "the",
            "last"
        ],
        "correct": "the last",
        "exp": "the last man to do: 決して〜しない人"
    },
    {
        "id": "m2_50",
        "type": "scramble",
        "jp": "駅に着くとすぐに雨が降り出した。",
        "cat": "模擬 大問2",
        "fixed": [
            "",
            "when it began to rain."
        ],
        "words": [
            "had",
            "I",
            "the station",
            "reached",
            "Scarcely"
        ],
        "correct": "Scarcely had I reached the station",
        "exp": "Scarcely had S p.p. when: 〜するとすぐに"
    }
];
const mockP3Data = [
    {
        "id": "m3_1",
        "type": "choice",
        "q": "A: I'm going to the supermarket. Do you need anything?\nB: ( )\nA: Sure. Anything else?\nB: No, that's all. Thanks.",
        "a": [
            "I already have everything.",
            "Can you get some milk?",
            "I'll go with you.",
            "Where is the store?"
        ],
        "cat": "模擬 大問3",
        "correct": 1,
        "exp": "Aの \"Anything else?\"（他には？）に繋がる依頼が必要。"
    },
    {
        "id": "m3_2",
        "type": "choice",
        "q": "A: Hello, may I speak to Yuki, please?\nB: I'm sorry, she's out right now. ( )\nA: No thanks. I'll call her back later.",
        "a": [
            "Can I take a message?",
            "Would you like to hold?",
            "Who is calling, please?",
            "Where did she go?"
        ],
        "cat": "模擬 大問3",
        "correct": 0,
        "exp": "電話で「不在」と言われた後の定型句「伝言を承りましょうか？」。"
    },
    {
        "id": "m3_3",
        "type": "choice",
        "q": "A: It's getting dark. Shall I turn on the light?\nB: ( ) I can see well enough.\nA: Okay, let me know if you need it later.",
        "a": [
            "Yes, please.",
            "No, that's not necessary.",
            "I think so too.",
            "It is very bright."
        ],
        "cat": "模擬 大問3",
        "correct": 1,
        "exp": "Bの理由 \"I can see well enough\"（十分見える）に繋がる否定。"
    },
    {
        "id": "m3_4",
        "type": "choice",
        "q": "A: How was the math test today?\nB: It was ( ). I couldn't answer the last three questions.\nA: Don't feel so bad. It was hard for everyone.",
        "a": [
            "much easier than I thought",
            "not as difficult as usual",
            "too difficult for me",
            "exactly what I expected"
        ],
        "cat": "模擬 大問3",
        "correct": 2,
        "exp": "Bの理由 \"couldn't answer the last three\"（最後の3問解けなかった）に合う。"
    },
    {
        "id": "m3_5",
        "type": "choice",
        "q": "A: Nice to meet you. I'm John.\nB: Nice to meet you too. ( )\nA: I'm from New York. It's my first time in Japan.",
        "a": [
            "How do you like Japan?",
            "Where are you from?",
            "What do you do?",
            "How long will you stay?"
        ],
        "cat": "模擬 大問3",
        "correct": 1,
        "exp": "Aの返答が \"I'm from New York\"（出身地）であるため。"
    },
    {
        "id": "m3_6",
        "type": "choice",
        "q": "A: I'm so tired. I stayed up late last night.\nB: ( )\nA: I had to finish my history project.\nB: You should get some rest tonight.",
        "a": [
            "Why were you so busy?",
            "What time did you sleep?",
            "Did you enjoy the project?",
            "Where did you go?"
        ],
        "cat": "模擬 大問3",
        "correct": 0,
        "exp": "忙しかった「理由」をAに答えさせるための質問。"
    },
    {
        "id": "m3_7",
        "type": "choice",
        "q": "A: This cake is delicious! Did you make it yourself?\nB: ( ) My sister bought it at the new bakery.\nA: Oh, really? I want to go there too.",
        "a": [
            "Yes, I did.",
            "I'm glad you like it.",
            "Actually, no.",
            "It was very easy."
        ],
        "cat": "模擬 大問3",
        "correct": 2,
        "exp": "自作ではなく「妹が買った」という事実（否定）を述べる。"
    },
    {
        "id": "m3_8",
        "type": "choice",
        "q": "A: It's already 11 o'clock. We should go home.\nB: You're right. ( )\nA: No, I can walk. It's not that far.\nB: Are you sure? It's dark outside.",
        "a": [
            "Do you want to stay longer?",
            "Shall I give you a ride?",
            "Let's take the bus.",
            "When is the next train?"
        ],
        "cat": "模擬 大問3",
        "correct": 1,
        "exp": "Aの返答 \"I can walk\"（歩ける）に対し、車などで「送りましょうか？」と提案。"
    },
    {
        "id": "m3_9",
        "type": "choice",
        "q": "A: I forgot my umbrella today.\nB: ( ) You can use mine. I have an extra one in my locker.\nA: That's very kind of you. Thanks!",
        "a": [
            "That's too bad.",
            "Don't worry.",
            "It's going to rain.",
            "Where is your umbrella?"
        ],
        "cat": "模擬 大問3",
        "correct": 1,
        "exp": "傘を忘れた相手を安心させる言葉。"
    },
    {
        "id": "m3_10",
        "type": "choice",
        "q": "A: Excuse me, how can I get to the library?\nB: Go straight for two blocks and ( ).\nA: I see. Thank you very much.",
        "a": [
            "you can't miss it",
            "it is very far",
            "the library is closed",
            "take a taxi"
        ],
        "cat": "模擬 大問3",
        "correct": 0,
        "exp": "道案内の最後によく使われる「すぐそこだから見逃さないよ」。"
    },
    {
        "id": "m3_11",
        "type": "choice",
        "q": "A: Have you decided what to order?\nB: Not yet. ( )\nA: The seafood pasta is very popular here.\nB: That sounds good. I'll have that.",
        "a": [
            "What do you recommend?",
            "I'm not hungry.",
            "How much is it?",
            "I like pasta."
        ],
        "cat": "模擬 大問3",
        "correct": 0,
        "exp": "おすすめを聞くことで、Aが \"seafood pasta\" を提案する流れ。"
    },
    {
        "id": "m3_12",
        "type": "choice",
        "q": "A: I'm thinking of joining the tennis club.\nB: ( ) I heard they practice very hard every day.\nA: That's fine. I want to improve my skills.",
        "a": [
            "Are you sure?",
            "That's a great idea.",
            "Why tennis?",
            "I'm already a member."
        ],
        "cat": "模擬 大問3",
        "correct": 0,
        "exp": "練習が厳しいという情報を与え「本当にいいの？」と確認。"
    },
    {
        "id": "m3_13",
        "type": "choice",
        "q": "A: I lost my wallet yesterday.\nB: Oh, no! ( )\nA: At the train station, I think.\nB: You should go to the police station.",
        "a": [
            "When did it happen?",
            "Where did you lose it?",
            "What was in it?",
            "Is it expensive?"
        ],
        "cat": "模擬 大問3",
        "correct": 1,
        "exp": "Aが場所（train station）を答えているため。"
    },
    {
        "id": "m3_14",
        "type": "choice",
        "q": "A: Would you like to go to the movies this weekend?\nB: I'd love to, but ( ). I have to study for my entrance exam.\nA: I understand. Good luck with your study.",
        "a": [
            "I have no money",
            "I'm busy",
            "I've already seen it",
            "the theater is far"
        ],
        "cat": "模擬 大問3",
        "correct": 1,
        "exp": "Bの理由 \"have to study\"（勉強しなきゃ）に繋がる忙しさの表明。"
    },
    {
        "id": "m3_15",
        "type": "choice",
        "q": "A: How do you like your new apartment?\nB: ( ) It's close to the station and very quiet.\nA: That's perfect.",
        "a": [
            "It's too small.",
            "It's great.",
            "I'm looking for one.",
            "The rent is high."
        ],
        "cat": "模擬 大問3",
        "correct": 1,
        "exp": "ポジティブな理由（駅近、静か）に合う感想。"
    },
    {
        "id": "m3_16",
        "type": "choice",
        "q": "A: Could you lend me your dictionary for a moment?\nB: ( ) I'm using it right now.\nA: Oh, okay. I'll ask someone else.",
        "a": [
            "Sure, go ahead.",
            "I'm sorry, I can't.",
            "Here you are.",
            "No problem."
        ],
        "cat": "模擬 大問3",
        "correct": 1,
        "exp": "理由 \"using it right now\"（今使っている）に合う断り。"
    },
    {
        "id": "m3_17",
        "type": "choice",
        "q": "A: I passed the English exam!\nB: ( ) You worked so hard for it.\nA: Thanks! I'm really happy.",
        "a": [
            "Congratulations!",
            "Better luck next time.",
            "Are you sure?",
            "That's too bad."
        ],
        "cat": "模擬 大問3",
        "correct": 0,
        "exp": "合格に対する祝福。"
    },
    {
        "id": "m3_18",
        "type": "choice",
        "q": "A: What are you going to do during the winter vacation?\nB: ( )\nA: That sounds nice. Give my regards to them.",
        "a": [
            "I'll stay home and sleep.",
            "I'm going to visit my grandparents.",
            "I have to work part-time.",
            "I haven't decided yet."
        ],
        "cat": "模擬 大問3",
        "correct": 1,
        "exp": "Aの返答 \"Give my regards to them\"（彼らによろしく）の対象（彼ら）を指す。"
    },
    {
        "id": "m3_19",
        "type": "choice",
        "q": "A: Can I help you with those bags?\nB: ( ) They are heavier than they look.\nA: No problem. I'll carry them to your car.",
        "a": [
            "No, thank you.",
            "That would be a great help.",
            "I can do it myself.",
            "It's okay."
        ],
        "cat": "模擬 大問3",
        "correct": 1,
        "exp": "Aの助けの申し出に対し、重いから「助かる」と受ける。"
    },
    {
        "id": "m3_20",
        "type": "choice",
        "q": "A: I'm sorry I'm late. The bus was delayed.\nB: ( ) The meeting hasn't started yet.\nA: Oh, that's a relief.",
        "a": [
            "Don't worry about it.",
            "You should be careful.",
            "Why were you late?",
            "I'm angry."
        ],
        "cat": "模擬 大問3",
        "correct": 0,
        "exp": "遅刻を謝る相手を「まだ始まってないから大丈夫」と許す。"
    },
    {
        "id": "m3_21",
        "type": "choice",
        "q": "A: Do you have any plans for tonight?\nB: Nothing special. ( )\nA: Why don't we go out for dinner?",
        "a": [
            "How about you?",
            "I'm very busy.",
            "I'm going to sleep.",
            "What's the matter?"
        ],
        "cat": "模擬 大問3",
        "correct": 0,
        "exp": "Aの提案（夕食）を引き出すための逆質問。"
    },
    {
        "id": "m3_22",
        "type": "choice",
        "q": "A: I have a terrible headache.\nB: ( ) You should go see a doctor.\nA: I think I will. Thanks for your advice.",
        "a": [
            "That's good.",
            "I'm sorry to hear that.",
            "It's not a big deal.",
            "How long has it been?"
        ],
        "cat": "模擬 大問3",
        "correct": 1,
        "exp": "病状を訴える相手への共感（お気の毒に）。"
    },
    {
        "id": "m3_23",
        "type": "choice",
        "q": "A: How was your trip to Hokkaido?\nB: ( ) The food was great and the people were kind.\nA: I'm glad to hear that.",
        "a": [
            "It was terrible.",
            "I couldn't go.",
            "It was wonderful.",
            "I'm going next week."
        ],
        "cat": "模擬 大問3",
        "correct": 2,
        "exp": "食べ物や人が良かったというポジティブな感想。"
    },
    {
        "id": "m3_24",
        "type": "choice",
        "q": "A: Excuse me, is anyone sitting here?\nB: ( ) Go ahead.\nA: Thank you.",
        "a": [
            "Yes, I am.",
            "No, it's free.",
            "I'm waiting for a friend.",
            "Sorry, it's taken."
        ],
        "cat": "模擬 大問3",
        "correct": 1,
        "exp": "座ってもいいかに対し「空いている」と許可。"
    },
    {
        "id": "m3_25",
        "type": "choice",
        "q": "A: What's your favorite sport?\nB: ( )\nA: Me too! I've been playing it since I was ten.",
        "a": [
            "I don't like sports.",
            "I like soccer the best.",
            "I'm good at tennis.",
            "Sports are healthy."
        ],
        "cat": "模擬 大問3",
        "correct": 1,
        "exp": "Aの返答 \"Me too! I've been playing it...\" に繋がる具体的なスポーツ。"
    },
    {
        "id": "m3_26",
        "type": "choice",
        "q": "A: May I take your order?\nB: ( )\nA: Certainly. Anything to drink?",
        "a": [
            "I'll have the steak, please.",
            "Where is the menu?",
            "I'm not ready yet.",
            "The food was good."
        ],
        "cat": "模擬 大問3",
        "correct": 0,
        "exp": "注文を取るウェイターへの具体的なメニュー。"
    },
    {
        "id": "m3_27",
        "type": "choice",
        "q": "A: I'm going to take the driving test tomorrow.\nB: ( ) I'm sure you'll pass.\nA: Thanks. I hope so.",
        "a": [
            "Good luck!",
            "Watch out!",
            "Take care!",
            "Never mind."
        ],
        "cat": "模擬 大問3",
        "correct": 0,
        "exp": "試験を控えた相手への「幸運を」。"
    },
    {
        "id": "m3_28",
        "type": "choice",
        "q": "A: Could you tell me how to get to the museum?\nB: ( ) I'm a stranger here myself.\nA: Oh, I see. I'll ask someone else.",
        "a": [
            "I'm sorry, I don't know.",
            "It's very close.",
            "Follow me.",
            "Turn left at the corner."
        ],
        "cat": "模擬 大問3",
        "correct": 0,
        "exp": "自分が \"stranger\"（不案内な人）であるため、場所を知らないと断る。"
    },
    {
        "id": "m3_29",
        "type": "choice",
        "q": "A: It's very cold today, isn't it?\nB: ( ) I should have worn a thicker coat.\nA: Me too. I'm freezing.",
        "a": [
            "Yes, it certainly is.",
            "No, it's not.",
            "I like winter.",
            "It's going to rain."
        ],
        "cat": "模擬 大問3",
        "correct": 0,
        "exp": "付加疑問文に対する強い同意。"
    },
    {
        "id": "m3_30",
        "type": "choice",
        "q": "A: Shall we go for a walk in the park?\nB: ( ) I have a lot of work to do.\nA: Maybe next time, then.",
        "a": [
            "That's a good idea.",
            "I'd love to, but I can't.",
            "Let's go.",
            "Why not?"
        ],
        "cat": "模擬 大問3",
        "correct": 1,
        "exp": "誘いに対し、理由（仕事がある）を添えて断る。"
    },
    {
        "id": "m3_31",
        "type": "choice",
        "q": "A: Do you mind if I open the window?\nB: ( ) It's a bit hot in here.\nA: Thanks.",
        "a": [
            "Yes, I do.",
            "Not at all.",
            "Please don't.",
            "I'm cold."
        ],
        "cat": "模擬 大問3",
        "correct": 1,
        "exp": "Do you mind（気にする？）に対し、「全然気にしない（いいよ）」と許可。"
    },
    {
        "id": "m3_32",
        "type": "choice",
        "q": "A: I'm really sorry for being late.\nB: ( ) I just arrived myself.\nA: Oh, that's good.",
        "a": [
            "You're welcome.",
            "Forget it.",
            "It doesn't matter.",
            "No problem."
        ],
        "cat": "模擬 大問3",
        "correct": 3,
        "exp": "遅刻を謝る相手に対し、自分も着いたばかりだから「大丈夫」。"
    },
    {
        "id": "m3_33",
        "type": "choice",
        "q": "A: Is there a convenience store near here?\nB: Yes, ( ).\nA: Thank you very much.",
        "a": [
            "there is one around the corner",
            "it's far from here",
            "I don't know",
            "the store is closed"
        ],
        "cat": "模擬 大問3",
        "correct": 0,
        "exp": "ある場所の肯定。"
    },
    {
        "id": "m3_34",
        "type": "choice",
        "q": "A: Happy birthday, Tom! This is for you.\nB: ( ) It's just what I wanted!\nA: I'm glad you like it.",
        "a": [
            "Thank you so much!",
            "You're welcome.",
            "What is it?",
            "It's too expensive."
        ],
        "cat": "模擬 大問3",
        "correct": 0,
        "exp": "プレゼントに対する感謝。"
    },
    {
        "id": "m3_35",
        "type": "choice",
        "q": "A: Have you seen my glasses anywhere?\nB: ( )\nA: I've already looked there, but they weren't there.",
        "a": [
            "I don't wear glasses.",
            "Why don't you look on the table?",
            "You should buy new ones.",
            "I haven't seen them."
        ],
        "cat": "模擬 大問3",
        "correct": 1,
        "exp": "探し物に対して「テーブルの上はどう？」と提案。"
    },
    {
        "id": "m3_36",
        "type": "choice",
        "q": "A: Are you ready to go?\nB: ( ) I just need to find my keys.\nA: Okay, I'll wait for you in the car.",
        "a": [
            "Not yet.",
            "I'm ready.",
            "Let's go.",
            "I'm busy."
        ],
        "cat": "模擬 大問3",
        "correct": 0,
        "exp": "まだ鍵を探している途中。"
    },
    {
        "id": "m3_37",
        "type": "choice",
        "q": "A: How do you go to school?\nB: ( ) It takes about 20 minutes.\nA: That's a good exercise.",
        "a": [
            "By bus.",
            "On foot.",
            "My father drives me.",
            "By train."
        ],
        "cat": "模擬 大問3",
        "correct": 1,
        "exp": "運動になるというAの返答から「徒歩で」を選。"
    },
    {
        "id": "m3_38",
        "type": "choice",
        "q": "A: Can I try this shirt on?\nB: ( ) The fitting rooms are over there.\nA: Thank you.",
        "a": [
            "Yes, of course.",
            "No, you can't.",
            "It's too small.",
            "I like the color."
        ],
        "cat": "模擬 大問3",
        "correct": 0,
        "exp": "試着の許可。"
    },
    {
        "id": "m3_39",
        "type": "choice",
        "q": "A: What's the matter? You look pale.\nB: ( ) I think I have a fever.\nA: You should go home and rest.",
        "a": [
            "I'm fine.",
            "I don't feel well.",
            "I'm very happy.",
            "Nothing special."
        ],
        "cat": "模擬 大問3",
        "correct": 1,
        "exp": "顔色が悪いと言われ、熱がある状況を説明。"
    },
    {
        "id": "m3_40",
        "type": "choice",
        "q": "A: Could you repeat that, please? I couldn't hear you.\nB: ( ) Is that clear now?\nA: Yes, thank you.",
        "a": [
            "Sure, I'll say it again.",
            "No, I won't.",
            "What did you say?",
            "I'm busy now."
        ],
        "cat": "模擬 大問3",
        "correct": 0,
        "exp": "繰り返しの依頼に対する承諾。"
    },
    {
        "id": "m3_41",
        "type": "choice",
        "q": "A: Have you ever been to Kyoto?\nB: ( ) I went there two years ago.\nA: Did you enjoy it?",
        "a": [
            "Yes, once.",
            "No, never.",
            "I'm going next week.",
            "I like Kyoto."
        ],
        "cat": "模擬 大問3",
        "correct": 0,
        "exp": "経験の肯定。"
    },
    {
        "id": "m3_42",
        "type": "choice",
        "q": "A: How much is the entrance fee?\nB: ( )\nA: Okay, here's 1,000 yen.",
        "a": [
            "It's 500 yen for adults.",
            "It's very expensive.",
            "You can pay by credit card.",
            "It's free."
        ],
        "cat": "模擬 大問3",
        "correct": 0,
        "exp": "料金の具体的な回答。"
    },
    {
        "id": "m3_43",
        "type": "choice",
        "q": "A: I'm really looking forward to the concert.\nB: ( ) It's going to be great.\nA: I can't wait!",
        "a": [
            "Me too.",
            "I don't like concerts.",
            "When is it?",
            "Who is playing?"
        ],
        "cat": "模擬 大問3",
        "correct": 0,
        "exp": "楽しみだという感情への同調。"
    },
    {
        "id": "m3_44",
        "type": "choice",
        "q": "A: Do you have any brothers or sisters?\nB: ( )\nA: Oh, really? It must be quiet at home.",
        "a": [
            "I have two brothers.",
            "I'm an only child.",
            "My sister is a doctor.",
            "I like my family."
        ],
        "cat": "模擬 大問3",
        "correct": 1,
        "exp": "Aの「家が静かだろうね」という推測から、兄弟がいない（一人っ子）。"
    },
    {
        "id": "m3_45",
        "type": "choice",
        "q": "A: I'm sorry to keep you waiting.\nB: ( ) I've only been here for five minutes.\nA: That's good to hear.",
        "a": [
            "Don't worry about it.",
            "You should be faster.",
            "What took you so long?",
            "I'm tired."
        ],
        "cat": "模擬 大問3",
        "correct": 0,
        "exp": "待たせたことを謝る相手への気遣い。"
    },
    {
        "id": "m3_46",
        "type": "choice",
        "q": "A: I'm going to Hawaii next month.\nB: ( ) Have a great time!\nA: Thanks. I'll bring you a souvenir.",
        "a": [
            "That's too bad.",
            "I'm jealous.",
            "I've been there.",
            "How nice!"
        ],
        "cat": "模擬 大問3",
        "correct": 3,
        "exp": "旅行に行く相手へのポジティブな反応。"
    },
    {
        "id": "m3_47",
        "type": "choice",
        "q": "A: May I help you find something?\nB: ( ) I'm just looking.\nA: Okay, let me know if you need anything.",
        "a": [
            "Yes, please.",
            "No, thank you.",
            "I'm looking for a gift.",
            "How much is this?"
        ],
        "cat": "模擬 大問3",
        "correct": 1,
        "exp": "助けの申し出を「見ているだけだから」と断る。"
    },
    {
        "id": "m3_48",
        "type": "choice",
        "q": "A: I'm afraid I have to leave now.\nB: ( ) It was nice talking with you.\nA: Me too. Let's meet again soon.",
        "a": [
            "Take care.",
            "See you later.",
            "Must you go so soon?",
            "Good luck."
        ],
        "cat": "模擬 大問3",
        "correct": 2,
        "exp": "帰り際の挨拶に対し「もう行っちゃうの？」と名残惜しむ。"
    },
    {
        "id": "m3_49",
        "type": "choice",
        "q": "A: Would you like another cup of coffee?\nB: ( ) I've already had two cups.\nA: Okay, how about some tea then?",
        "a": [
            "Yes, please.",
            "No, thank you.",
            "I like coffee.",
            "One more, please."
        ],
        "cat": "模擬 大問3",
        "correct": 1,
        "exp": "もう2杯飲んだから「結構です」。"
    },
    {
        "id": "m3_50",
        "type": "choice",
        "q": "A: I'm sorry, I forgot to bring the book I promised to lend you.\nB: ( ) You can bring it next time.\nA: Thanks for understanding.",
        "a": [
            "That's okay.",
            "You should have brought it.",
            "I'm disappointed.",
            "I need it now."
        ],
        "cat": "模擬 大問3",
        "correct": 0,
        "exp": "ミスを謝る相手を許す「大丈夫だよ」。"
    }
];
