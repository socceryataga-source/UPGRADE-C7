const QUESTION_SETS = [
  {
    id: "upgrade-07",
    label: "第7回",
    title: "接続詞 ①・②",
    range: "10 接続詞",
    questions: [
      {
        id: 1,
        sourceSet: "①",
        sourceNo: 4,
        text: "（　） she believes you is hard to believe.",
        choices: ["What", "That", "Whatever", "Whenever"],
        answer: 1,
        translation: "彼女があなたを信じているということは、信じがたい。",
        tip: "that + S + V は「SがVするということ」という名詞節を作り、文の主語にもなれる。"
      },
      {
        id: 2,
        sourceSet: "①",
        sourceNo: 5,
        text: "We thought it odd （　） Don should be chosen the new manager.",
        choices: ["than", "that", "what", "whether"],
        answer: 1,
        translation: "私たちは、ドンが新しい部長に選ばれるのは奇妙だと思った。",
        tip: "think it + 形容詞 + that節 = 「〜ということを…だと思う」。it は形式目的語。"
      },
      {
        id: 3,
        sourceSet: "①",
        sourceNo: 6,
        text: "His assertion （　） the molecule divides into two parts in water is accepted by most scientists.",
        choices: ["how", "what", "that", "which"],
        answer: 2,
        translation: "その分子が水中で二つの部分に分かれるという彼の主張は、多くの科学者に受け入れられている。",
        tip: "assertion that ... の that は同格。「〜という主張」の内容を説明する。"
      },
      {
        id: 4,
        sourceSet: "①",
        sourceNo: 7,
        text: "It wasn't （　） I left college that I realized how much I had enjoyed my time there.",
        choices: ["why", "until", "when", "by the time"],
        answer: 1,
        translation: "大学を卒業して初めて、そこで過ごした時間をどれほど楽しんでいたかに気づいた。",
        tip: "It is not until A that B = 「Aして初めてBする」。頻出の強調構文。"
      },
      {
        id: 5,
        sourceSet: "①",
        sourceNo: 8,
        text: "Why do you keep talking to me （　） I am trying to do my homework?",
        choices: ["as soon", "because", "during", "while"],
        answer: 3,
        translation: "私が宿題をしようとしている間、どうしてずっと話しかけてくるの？",
        tip: "while + S + V = 「SがVしている間」。during の後ろには名詞が来る。"
      },
      {
        id: 6,
        sourceSet: "①",
        sourceNo: 9,
        text: "It is （　） Mary is rich that John married her.",
        choices: ["since", "as", "for", "because"],
        answer: 3,
        translation: "ジョンがメアリーと結婚したのは、彼女がお金持ちだからだ。",
        tip: "It is because A that B = 「BなのはAだからだ」。理由を強調する形。"
      },
      {
        id: 7,
        sourceSet: "①",
        sourceNo: 10,
        text: "I did not recognize him （　） he said we had met before.",
        choices: ["despite", "however", "although", "provided"],
        answer: 2,
        translation: "以前会ったことがあると彼が言ったにもかかわらず、私は彼だと気づかなかった。",
        tip: "although + S + V = 「〜だけれども」。despite の後ろは名詞または -ing。"
      },
      {
        id: 8,
        sourceSet: "①",
        sourceNo: 11,
        text: "（　） it is fine or not, we will give a garden party.",
        choices: ["Either", "Neither", "Though", "Whether"],
        answer: 3,
        translation: "晴れても晴れなくても、私たちは園遊会を開く。",
        tip: "whether A or not = 「Aであろうとなかろうと／Aかどうか」。"
      },
      {
        id: 9,
        sourceSet: "①",
        sourceNo: 12,
        text: "My old computer was quite complicated, （　） my new one is quite simple.",
        choices: ["despite", "unlike", "wherever", "whereas"],
        answer: 3,
        translation: "以前のコンピューターはかなり複雑だったが、新しいものはとても単純だ。",
        tip: "whereas = 「〜であるのに対して」。二つの事柄を対比するときに使う。"
      },
      {
        id: 10,
        sourceSet: "①",
        sourceNo: 13,
        text: "It was cold last night, （　） he didn't wear a coat.",
        choices: ["therefore", "yet", "and then", "and so"],
        answer: 1,
        translation: "昨夜は寒かったのに、それでも彼はコートを着なかった。",
        tip: "yet = 「それにもかかわらず」。and yet の形でもよく使う。"
      },
      {
        id: 11,
        sourceSet: "①",
        sourceNo: 14,
        text: "The festival will be held in the garden （　） it rains.",
        choices: ["if", "unless", "since", "lest"],
        answer: 1,
        translation: "雨が降らない限り、その祭りは庭で開かれる。",
        tip: "unless = if ... not。「〜でない限り」。"
      },
      {
        id: 12,
        sourceSet: "①",
        sourceNo: 15,
        text: "He doesn't care how he dresses （　） his clothes are clean.",
        choices: ["as if", "as well as", "as long as", "as far as"],
        answer: 2,
        translation: "服が清潔でありさえすれば、彼はどんな服装をするか気にしない。",
        tip: "as long as = 「〜する限り／〜でありさえすれば」。条件を表す。"
      },
      {
        id: 13,
        sourceSet: "①",
        sourceNo: 16,
        text: "I will keep on loving you as （　） as I live.",
        choices: ["soon", "long", "far", "much"],
        answer: 1,
        translation: "生きている限り、私はあなたを愛し続ける。",
        tip: "as long as = 「〜する限り」。long を入れて一つの接続詞表現になる。"
      },
      {
        id: 14,
        sourceSet: "①",
        sourceNo: 17,
        text: "（　） I know, she still lives with her parents.",
        choices: ["For", "Since", "As far as", "As long as"],
        answer: 2,
        translation: "私の知る限り、彼女は今も両親と暮らしている。",
        tip: "as far as I know = 「私の知る限り」。範囲・程度を表す as far as。"
      },
      {
        id: 15,
        sourceSet: "①",
        sourceNo: 18,
        text: "The staff member wrote down the name of the hotel （　） I wouldn't forget it.",
        choices: ["in case", "now that", "so that", "unless"],
        answer: 2,
        translation: "その職員は、私が忘れないようにホテルの名前を書き留めた。",
        tip: "so that S can/will ... = 「Sが〜できるように」。ここでは wouldn't forget が目的を表す。"
      },
      {
        id: 16,
        sourceSet: "①",
        sourceNo: 19,
        text: "The rooms are so small （　） it is impossible to wave one's arm without breaking something.",
        choices: ["that", "as", "but", "though"],
        answer: 0,
        translation: "その部屋はとても狭いので、何かを壊さずに腕を振ることは不可能だ。",
        tip: "so + 形容詞 + that ... = 「とても〜なので…」。結果を表す。"
      },
      {
        id: 17,
        sourceSet: "①",
        sourceNo: 20,
        text: "Why didn't you catch the last bus （　） I told you to?",
        choices: ["as", "for", "so", "that"],
        answer: 0,
        translation: "私が言ったとおりに、なぜ最終バスに乗らなかったの？",
        tip: "as + S + V = 「SがVするように／したとおりに」。"
      },
      {
        id: 18,
        sourceSet: "①",
        sourceNo: 21,
        text: "Please leave your chair （　） it is.",
        choices: ["as", "on", "so", "like"],
        answer: 0,
        translation: "椅子はそのままにしておいてください。",
        tip: "as it is = 「そのままで」。状態を変えないことを表す定型表現。"
      },
      {
        id: 19,
        sourceSet: "①",
        sourceNo: 22,
        text: "There are only two people in this house. （　） you or I have to do the work.",
        choices: ["Either", "Neither", "Not", "Both"],
        answer: 0,
        translation: "この家には二人しかいない。あなたか私のどちらかがその仕事をしなければならない。",
        tip: "either A or B = 「AかBのどちらか」。"
      },
      {
        id: 20,
        sourceSet: "①",
        sourceNo: 23,
        text: "Citrus fruits grow best in rather warm climates where there is almost （　） frost or wind.",
        choices: ["either", "neither", "none", "no"],
        answer: 3,
        translation: "かんきつ類は、霜や風がほとんどない比較的暖かい気候で最もよく育つ。",
        tip: "almost no + 名詞 = 「ほとんど〜ない」。no は後ろの名詞を直接修飾できる。"
      },
      {
        id: 21,
        sourceSet: "②",
        sourceNo: 4,
        text: "（　） she believes you is hard to believe.",
        choices: ["What", "That", "Whatever", "Whenever"],
        answer: 1,
        translation: "彼女があなたを信じているということは、信じがたい。",
        tip: "that + S + V は名詞節を作り、文全体の主語として使える。"
      },
      {
        id: 22,
        sourceSet: "②",
        sourceNo: 5,
        text: "His assertion （　） the molecule divides into two parts in water is accepted by most scientists.",
        choices: ["how", "what", "that", "which"],
        answer: 2,
        translation: "その分子が水中で二つの部分に分かれるという彼の主張は、多くの科学者に受け入れられている。",
        tip: "assertion that ... の that は同格で、assertion の具体的内容を説明する。"
      },
      {
        id: 23,
        sourceSet: "②",
        sourceNo: 6,
        text: "The fact is （　） she has lost her watch.",
        choices: ["that", "which", "what", "why"],
        answer: 0,
        translation: "実際のところ、彼女は腕時計をなくしてしまった。",
        tip: "The fact is that ... = 「実際のところ〜だ／事実は〜だ」。that節が補語になる。"
      },
      {
        id: 24,
        sourceSet: "②",
        sourceNo: 7,
        text: "I haven't seen him （　） he came to dinner with us last night.",
        choices: ["for", "because", "as", "since"],
        answer: 3,
        translation: "昨夜彼が私たちと夕食を食べに来て以来、私は彼を見ていない。",
        tip: "since + 過去形 = 「〜して以来」。主節には現在完了がよく使われる。"
      },
      {
        id: 25,
        sourceSet: "②",
        sourceNo: 8,
        text: "Why do you keep talking to me （　） I am trying to do my homework?",
        choices: ["as soon", "because", "during", "while"],
        answer: 3,
        translation: "私が宿題をしようとしている間、どうしてずっと話しかけてくるの？",
        tip: "while の後ろは S + V。during の後ろは名詞。"
      },
      {
        id: 26,
        sourceSet: "②",
        sourceNo: 9,
        text: "I fell asleep （　） reading.",
        choices: ["as", "for", "during", "while"],
        answer: 3,
        translation: "私は読書をしている間に眠ってしまった。",
        tip: "while -ing = 「〜している間」。while I was reading の省略形と考えられる。"
      },
      {
        id: 27,
        sourceSet: "②",
        sourceNo: 10,
        text: "（　） they stepped into the backyard, they were terrorized by the neighbor’s dogs.",
        choices: ["The instance", "The moment", "The sooner", "The earlier"],
        answer: 1,
        translation: "彼らが裏庭に足を踏み入れた瞬間、隣人の犬たちにひどく怖がらされた。",
        tip: "the moment + S + V = 「SがVした瞬間に」。as soon as に近い。"
      },
      {
        id: 28,
        sourceSet: "②",
        sourceNo: 11,
        text: "It is （　） Mary is rich that John married her.",
        choices: ["since", "as", "for", "because"],
        answer: 3,
        translation: "ジョンがメアリーと結婚したのは、彼女がお金持ちだからだ。",
        tip: "It is because A that B は、理由 A を強調する構文。"
      },
      {
        id: 29,
        sourceSet: "②",
        sourceNo: 12,
        text: "It’s not right for you to do something rude （　） someone else has done something rude.",
        choices: ["not since", "just because", "that", "what"],
        answer: 1,
        translation: "ほかの人が失礼なことをしたというだけで、あなたまで失礼なことをするのは正しくない。",
        tip: "just because ... = 「ただ〜だからといって」。しばしば否定的評価と組み合わせる。"
      },
      {
        id: 30,
        sourceSet: "②",
        sourceNo: 13,
        text: "（　） the river is so high, it must have rained a lot in the mountains.",
        choices: ["When", "Though", "For", "Since"],
        answer: 3,
        translation: "川の水位がこんなに高いのだから、山ではたくさん雨が降ったに違いない。",
        tip: "since = 「〜なので」。理由が相手にも明らかな場合に使われやすい。"
      },
      {
        id: 31,
        sourceSet: "②",
        sourceNo: 14,
        text: "（　） it is fine or not, we will give a garden party.",
        choices: ["Either", "Neither", "Though", "Whether"],
        answer: 3,
        translation: "晴れても晴れなくても、私たちは園遊会を開く。",
        tip: "whether ... or not = 「〜であろうとなかろうと」。"
      },
      {
        id: 32,
        sourceSet: "②",
        sourceNo: 15,
        text: "Dark （　） it was, the group managed to find its way to the hut.",
        choices: ["after", "as", "so", "when"],
        answer: 1,
        translation: "暗かったけれども、その一行はなんとか小屋までたどり着いた。",
        tip: "形容詞 + as + S + V = 「〜ではあるが」。譲歩を表す倒置表現。"
      },
      {
        id: 33,
        sourceSet: "②",
        sourceNo: 16,
        text: "I know nothing about the old woman （　） that she used to be an actress.",
        choices: ["except", "now", "so", "without"],
        answer: 0,
        translation: "その老婦人について、以前女優だったということ以外、私は何も知らない。",
        tip: "except that + S + V = 「〜ということ以外は」。except の後ろに節を置ける。"
      },
      {
        id: 34,
        sourceSet: "②",
        sourceNo: 17,
        text: "The staff member wrote down the name of the hotel （　） I wouldn't forget it.",
        choices: ["in case", "now that", "so that", "unless"],
        answer: 2,
        translation: "その職員は、私が忘れないようにホテルの名前を書き留めた。",
        tip: "so that ... = 「〜するように」。目的を表す接続詞。"
      },
      {
        id: 35,
        sourceSet: "②",
        sourceNo: 18,
        text: "I had to grab the iron rail （　） I should slip off and fall.",
        choices: ["in fear", "so that", "just in case", "lest"],
        answer: 3,
        translation: "滑り落ちて転んではいけないと思い、私は鉄の手すりにつかまらなければならなかった。",
        tip: "lest S should V = 「SがVしないように／Vするといけないので」。やや文語的。"
      },
      {
        id: 36,
        sourceSet: "②",
        sourceNo: 19,
        text: "The rooms are so small （　） it is impossible to wave one's arm without breaking something.",
        choices: ["that", "as", "but", "though"],
        answer: 0,
        translation: "その部屋はとても狭いので、何かを壊さずに腕を振ることは不可能だ。",
        tip: "so ... that ... = 「とても〜なので…」。程度から結果につなげる構文。"
      },
      {
        id: 37,
        sourceSet: "②",
        sourceNo: 20,
        text: "You should do it just （　） I told you.",
        choices: ["as the way", "in the way", "on the way", "the way"],
        answer: 3,
        translation: "私があなたに言ったとおりに、それをしなさい。",
        tip: "the way + S + V = 「SがVするやり方で／SがVしたとおりに」。"
      },
      {
        id: 38,
        sourceSet: "②",
        sourceNo: 21,
        text: "You had better hurry up, （　） you will not be there in time.",
        choices: ["and", "or", "till", "when"],
        answer: 1,
        translation: "急いだほうがいい。さもないと時間に間に合わない。",
        tip: "命令・忠告, or ... = 「〜しなさい、さもないと…」。"
      },
      {
        id: 39,
        sourceSet: "②",
        sourceNo: 22,
        text: "There are only two people in this house. （　） you or I have to do the work.",
        choices: ["Either", "Neither", "Not", "Both"],
        answer: 0,
        translation: "この家には二人しかいない。あなたか私のどちらかがその仕事をしなければならない。",
        tip: "either A or B = 「AかBのどちらか」。"
      },
      {
        id: 40,
        sourceSet: "②",
        sourceNo: 23,
        text: "The horseman took the old man not only across the river, （　） to his destination.",
        choices: ["also", "but", "nor", "only"],
        answer: 1,
        translation: "その騎手は老人を川の向こう岸まで運んだだけでなく、目的地まで連れて行った。",
        tip: "not only A but (also) B = 「AだけでなくBも」。but は必須、also は省略可能。"
      }
    ]
  }
];
