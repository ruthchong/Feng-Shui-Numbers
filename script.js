const numerologyProsAndCons = {
    1: {
        pros: "独立、自信、果断、领导力强、富有创造力。",
        cons: "可能过于自我中心，不易与人合作。"
    },
    2: {
        pros: "合作、敏感、温和、善于倾听、富有同情心。",
        cons: "容易产生依赖性，缺乏主见。"
    },
    3: {
        pros: "积极、行动力强、富有创造力、乐观。",
        cons: "缺乏耐性，容易冲动。"
    },
    4: {
        pros: "聪明、谨慎、喜欢计划、执行力强。",
        cons: "可能过于保守，缺乏灵活性。"
    },
    5: {
        pros: "爱好自由、有原则、适应力强。",
        cons: "固执、容易厌倦。"
    },
    6: {
        pros: "勤劳、有远见、善于照顾他人。",
        cons: "控制欲强，容易过度干涉他人。"
    },
    7: {
        pros: "人缘佳、幸运、善于思考。",
        cons: "可能过于懒散，缺乏行动力。"
    },
    8: {
        pros: "责任心强、执行力强、有领导力。",
        cons: "容易感到压力，生活忙碌。"
    },
    9: {
        pros: "擅长做生意、勇敢冒险、富有同情心。",
        cons: "做事缺乏原则，容易冲动。"
    }
};

const numerologyDescriptions = {
    1: "数字 1 -拥有数字 1 的人总是虚心向学。做事情谨慎，是天生的领导者及具有强大的权威。非常独立，善于分析。幽默风趣，能够娱乐大众并持有良好的人际关系。过于自我及独立的性格让他们无法屈服于他人的管制。一旦有歪念，就会变得“贪得无厌”。诡计多端将引致灾祸的危机。",
    2: "数字 2 -拥有数字 2 的人善于与各阶层人士沟通与交流，人见人爱，极受欢迎的人物。非常注重卫生、整洁、做事井井有条。为人勤快兼思想成熟，通常多参与年长之辈。固执的性格，不会随从忠告。容易招惹口舌之灾及遭他人恶语中伤与批评。爱凭空想象且不切实际。",
    3: "数字 3 -拥有数字 3 的人在做决定的时候，会先做出全面性(事情的好与坏) 的搜索。很清楚自己的人生目标、十分活跃、热爱于创造新事物。善于分析并能分辨是非黑白。做事急躁，没有耐性和脾气也相当坏。性格偶尔会很淘气，做事轻浮或看轻事物。说话过于直率而容易顶撞他人，把人际关系搞得一团糟。",
    4: "数字 4 -拥有数字 4 的人富有艺术细胞，对文化、智慧与理论和思维能量有深入的研究。知识渊博，是值得信赖并受到众人欣赏的人。十分外向，喜爱旅游及向往无忧无虑的生活。不易受挫，一旦跌倒，很快就会爬起来，重新振作。理财方面较差劲，难以累积财富。在感情事或婚姻方面容易碰礁，尤其是和伴侣之间的协调与相容相惜，必须小心处理。",
    5: "数字 5 -拥有数字 5 的人拥有倔强的性格，是天生的领导者。能够分清楚自己的人生目标与岗位，并尽全力达到他们的梦想。现实主义者，凡事一丝不苟及脚踏实地的一个人，不会凭空幻想。如属于数字 5 的人来自较低层或贫困的环境与家庭背景，他们会比较固执与顽固。过于急进，吹毛求疵。为小事捉狂。",
    6: "数字 6 -拥有数字 6 的人精通投资，顽强的生存意识及有能力控制财富和兴隆。表现优雅及有礼貌，向往豪华的生活，喜爱华丽的事物及对人生有着高尚的品味。在教育界，艺术行业和宗教社团里会有所成就。数字 6 的人将成为社会上举足轻重的领袖并受众人的推崇与爱戴。负面的是自尊心强及为人傲慢。",
    7: "数字 7 -拥有数字 7 的人处事谨慎，按部就班，系统化及精确。乐于助人，饮水思源，不忘恩负义。十分热情及有爱心，常散播欢乐之种子给身旁的人。向往名成利就及良好交际关系，经常流连于高消费及新潮时髦的娱乐场所。喜好争论与批评他人，歪曲事实的真相，因此容易引起谣言及他人的恶意中伤。变化无常，行事不够稳重，优柔寡断而且拿不定主意。",
    8: "数字 8 -拥有数字 8 的人天性文静，保守及内向，外表看起来很保守，其实在朋友圈内，他们可以变得很活泼可爱。很强的责任感，是个值得信赖的人。外刚内柔型，生性温文尔雅及敏感。太过谨慎，坚信自己的概念而错失许多良机，使自己看不清事实的一面。",
    9: "数字 9 -拥有数字 9 的人，性格乐观及思想开放。勇于面对问题，决不逃避，懂得调整自己的步伐，走向现实生活，不做无谓的幻想。才智过人，做事机警及警惕性甚高，容易得到他人的信任与支持。做事非常快而准，办事能力也很高。不够细心，不会照顾下属，忽略下属的感受。非常情绪化，情绪智商低，导致晚年面临孤单寂寞的生活。",
};

const specialNumberDescriptions = {
        11: "非常独立，做事没重点，常被人从后中伤。",
        12: "说话很直接，经常不知道已经中伤别人",
        13: "非常易怒和不耐烦，缺乏耐性。",
        14: "很好的策划者，但是计划经常无法顺利进行。",
        15: "很重视、相信自己的原则，不轻易听从别人意见。需要离开家乡发展比较有成就。",
        19: "代表领导力和独立精神。",
        22: "代表建筑师之数，意味着创造和伟大的潜力。",
        33: "是最具奉献精神的数字，象征无私和慈爱。",
        44: "代表强大的基础建设者，擅长长期规划。",
        55: "象征自由和变化，代表大冒险。",
        66: "代表爱与家庭，是和谐的象征。",
        77: "代表智慧、精神成长和深度思考。",
        91: "代表独立精神和领导力，象征强大的决策能力。",
        99: "代表全球意识、慈悲和人道主义精神。",
        911: "代表强大的转变能量，象征智慧与灵性成长。",
        912: "代表创新、成长和新方向。",
        112: "代表直觉和合作精神。",
        16 :"需要单枪匹马找寻自己的财富，成功后才有多人追随。",
        17 :"有特殊的感召力，但是成为领导很有压力。",
        18 :"总是一个人劳碌，有压力感，但是会取得成功。",
        19 :"在生意或事业上总是一个人打拼。",
        21 :"说话语带攻击伤害他人；所以经常被别人说闲话。",
        22 :"桃花非常旺",
        23 :"说话的时候很急躁也有攻击性而带来阻碍。",
        24 :"把计划说出来才能赚取属于你的财富。",
        25 :"说话不理原则，用词坚定而吸引人们的支持。",
        26 :"说话时常提起金钱而导致压力感。",
        27 :"友善，适合演讲之类的行业，将会让你成功。把握异性的贵人。",
        28 :"说话时常提起压力与责任。",
        29 :"很喜欢谈生意相关的话题。",
        31 :"性格吸引别人对你恶语，做事很情绪化，经常漫无目的。",
        32 :"说话的速度很快，而且不考虑后果。",
        33 :"婚后容易出轨，比其他人更容易有外遇。",
        34 :"执行计划的速度很快，总是会有人跟随与支持。",
        35 :"没耐心又容易被激怒，压力也一直跟随。",
        36 :"积极于投资的你时常会从中获利。",
        37 :"对朋友很急躁和没耐性而时常感到孤独。",
        38 :"没耐性，忙碌又容易感到压力，也时常被人闲言闲语。",
        39 :"很积极的寻找生意与上级但最后将徒劳无功。",
        41 :"容易被人盗取计划或存心破坏，必须单独的完成指定的计划。",
        42 :"计划性的说出你的想法将让你获取财富，有发表演讲的才能。",
        43 :"可以在很短时间内做出计划也会获得人们的支持。",
        44 :"非常聪明，喜欢计划但常常毫无结果最终造成压力。",
        45 :"你的计划离不开你的原则，无论任何阻碍，都意志坚定的计划至成功。有产业运。",
        46 :"懂得如何计划去得到你要的财富，但必须靠自己单独的去完成。",
        47 :"很会计划给人，或懂得给人建设性的意见。",
        48 :"计划时常被压力束缚而最终受挫结束。婚姻状况较不好。",
        49 :"懂得为企业做出很好的计划与商业策略。",
        51 :"倔强的你一意孤行地相信自己的原则而最终将获得财富;需要离开家乡发展比较有成就。",
        52 :"固执和有原则性的谈话会说服人们跟随你。",
        53 :"容易被激怒也没有耐性的你会制造压力给自己。",
        54 :"固执的你意志坚决的计划至成功。有产业运。",
        55 :"许多问题和障碍都是自己非常固执而造成的，最终将自己单独面对。",
        56 :"吝啬，很固执但很有原则去赚取财富。",
        57 :"惹官非，破产几率高。",
        58 :"总是遇到很多问题和压力而做不到计划。",
        59 :"照着原则的去做你要的生意淡最终将带来问题和阻碍。",
        61 :"钱常常花在别人身上，所以有很多朋友跟从。",
        62 :"财富必须靠口才去赚，偶尔也会很现实。",
        63 :"遇到商机时，你必须放胆的去投资，也很快的让你获得成功。",
        64 :"规划财务时很明智，也很小心翼翼，是懂得财务规划的人。",
        65 :"吝啬，财务时常遇到问题和阻碍。",
        66 :"金钱来得快也去得快而导致感受很烦躁。",
        67 :"会时常花钱给人以得到你要的知识或目的。",
        68 :"需要很压力才获得金钱。",
        69 :"有很多投资的机会，但必须承担风险，最终会获利。",
        71 :"许多人会破坏你的好事，也可能是时常被人陷害。",
        72 :"友善，会遇见贵人指点你怎样获得成功。",
        73 :"不断、很快的遇见许多新朋友，但这些朋友不会永久。",
        74 :"会遇见许多朋友在那需要的时候帮你进行规划。",
        75 :"会遇见许多给你麻烦和问题的朋友。",
        76 :"朋友会在金钱上给你帮助，但背后可能有隐藏陷害计划。",
        77 :"很多朋友，很多应酬，但这些朋友会在最后给你麻烦。",
        78 :"需要承受你的朋友或贵人给你的压力而获取财富。",
        79 :"会有很多朋友在生意上给你协助，也吸引他们成为你的事业伙伴。",
        81 :"很大的压力在推动你去劳碌，忙碌会不停围绕你。",
        82 :"说话时离不开压力与责任。",
        83 :"很忙碌，常感到压力和不耐烦，常被人们在背后闲言闲语。",
        84 :"常在压力的情况下做计划，你的计划难以执行。婚姻状况较不好。",
        85 :"你总是遇到很多压力和问题而做不到计划。",
        86 :"在获得财富前会面对很多压力。",
        87 :"你总是在给你身边的人压力来获得财富。",
        88 :"做任何事情离不开压力，很忙很劳碌，但会得到朋友的支持。",
        89 :"在你的生意获得成功前你会遇到很大的压力打击。",
        91 :"你在生意或事业上一直被人陷害。",
        92 :"生意或事业需要靠你的口才来执行。",
        93 :"适合从事短期性的事业，会发展的很快。",
        94 :"事业需要一直不停改变原有的计划。",
        95 :"生意会不停地面对很多问题和障碍。",
        96 :"生意运很好，适合从事投资性的行业，你会得到成功。",
        97 :"生意会吸引很多朋友支持你。",
        98 :"生意会一直不停带给你不必要的压力。",
        99 :"对生意有敏锐的直觉，你将会带来许多商机。",
        112 :"双重人格，非常适合做中间人、协调者；善良，富有同情心。",
        123 :"做生意容易发达，成为富豪。",
        134 :"感性，冲动，喜欢尝试，又害怕，矛盾，焦躁，喜欢抱怨",
        145 :"容易半途而废，缺少突破，要买人上人，要买人下人。",
        156 :"适合到外地发展，自我自大，比较固执，喜欢挑剔，沉迷某种嗜好。方向感强，有自主的一面。",
        167 :"有财富，愿意把所有的钱花到朋友，恋人身上。花钱大手大脚。",
        178 :"对待朋友很有责任，仗义，人缘好，有领导气质，很会做生意，能做大。",
        189 :"完美主义者，有责任感，有压力感。",
        191 :"成功之后依然孤独，适合个体经营，",
        213 :"很能说，善于察言观色，爱音乐，多愁善感，心地善良，给人感觉圆滑",
        222 :"全世界都知道你好色。",
        224 :"太爱说话，守不住秘密；说的话比较信不过，吝啬于分享想法或意见；女性会是大美人。",
        235 :"脾气不好，来得快，说话带攻击型，容易伤人，直肠子。非常固执。沟通能力强，执行力强，有原则。",
        246 :"靠嘴赚钱，业务能力强",
        257 :"原则性强，固执，个性直率",
        268 :"喜欢谈事业，提钱，喜欢攀比，心里比较累。",
        279 :"能够用嘴巴吸引贵人和人缘",
        281 :"销售高手，容易忙碌，孤独",
        292 :"喜欢谈谈事业，投资。能说会道。",
        314 :"冲动，欠考虑，缺少安全感",
        325 :"心直口快，不想后果，说话直。没后路",
        336 :"容易冲动，脾气不好，不能赌博，谨慎投资，迷信，爱自言自语；控制欲很强，做事没有计划。",
        347 :"个人魅力吸引贵人，容易心口不一，做事小心翼翼，不爱冒险，聪明但不实在。",
        358 :"冲动固执，脾气不好",
        369 :"聪明，有行动力，烧钱买机会，用钱打理人际关系。",
        371 :"疑心重，脾气不好，孤独。",
        382 :"阻碍多，脾气善变。需要多做善事。",
        393 :"喜欢钻牛角尖，一技之长。心灵手巧。",
        415 :"实在，平易近人，直爽，原则性强，希望完美，想得多，容易半途而废。",
        426 :"靠嘴吃饭，销售高手，同246",
        437 :"精打细算，积极行动，吸引人脉",
        448 :"适合做教授，专家。如果创业容易给自己造成压力。为人比较狡猾；想太多，行动力慢。",
        456 :"会吃钱，吃钱吃到没有人知道。",
        459 :"企业家的苗子，做事不择手段，喜欢养花，种植。",
        461 :"苛刻，挑剔，朋友受不了。孤独。",
        472 :"精明的太过，能力很强。多疑，犹豫。",
        483 :"老板：策划的过多，糊涂，白忙一场。员工：专业策划人士，适合企业职工。离婚几率高。",
        494 :"想得很多，需要别人推一把。机会来了，把握不住。",
        516 :"适合出去发展，参考156",
        527 :"说话固执，说到做到。一言九鼎。",
        538 :"磨难多，固执，情绪化，需要多做善事",
        546 :"会吃钱，吃钱吃到没有人知道。",
        549 :"比较累，要么大赚要么大赔",
        551 :"注意眼疾问题；过于自我，太固执。容易做大反派。",
        562 :"花钱犹豫，为小事挑剔。小气。多行善，大气方能成事。",
        573 :"固执，有机会接触高层次的人脉进而成功。",
        584 :"想得多，压力大，要面对现实，脚踏实地",
        595 :"因为固执，古板，阻力很大，敢于践踏法律。大哥大，大姐大",
        617 :"167舍得花钱，用名牌，有私房钱",
        628 :"信口开河，容易食言，适合服务行业，很能赚钱，适合做销售",
        639 :"烧钱,为朋友，喜欢钱生钱，不喜欢在家",
        643 :"挑剔，斤斤计较，失去朋友",
        652 :"小气，固执，唠叨，守财奴",
        663 :"心态不好者多成为老千。",
        674 :"花钱在贵人身上",
        685 :"赚钱很累，需要做善事，需要赚正财，别赚偏财",
        696 :"不能赌博，喜欢用钱生钱，喜欢投资，能住住机会，但是投资需谨慎",
        718 :"容易被朋友利用，别做担保",
        729 :"能吸引比自己大的高级桃花，人缘好，贵人多",
        731 :"脾气急躁，人缘易变动，疏远",
        742 :"善于分析策划，解决问题。运气不错，遇到问题有贵人指点。想的多，不喜欢冒险，逃避。",
        753 :"喜欢利用别人，如果算计别人，容易遇到小人，自己要正，人脉容易变动，手下人能力强。",
        764 :"贵人很多，帮你的人多，机会来了，能赚很多钱",
        775 :"太会利用别人，心态很重要，要么贵人多，要么小人多",
        786 :"贵人很多，接受别人的压力，一定能好",
        797 :"人源贵人多，心态如果不正，借刀杀人，最后肯定失败。",
        819 :"比较累，事事操劳。凡是看开。",
        821 :"固执，喜欢听好听话，内心空虚，自卑",
        832 :"情绪化，敏感，脾气不好",
        843 :"参考483，找已婚人士结婚，适合当二把手。感情糊涂，压力多，专业人士多。",
        854 :"（父亲基因）挫折，磨难，想的多，不面对现实",
        865 :"漂泊，磨难多。要行善才能突破。",
        876 :"在贵人人缘给了你压力，指示下边人。敢于承担便能成大气",
        887 :"较多人事间沟通的问题。离婚率很高，情绪化，爱发火",
        898 :"压力太多，忙碌；女人注意妇科病。",
        911 :"孤独的行者,记住别贪心。",
        922 :"适合出谋划策；但说得多，做得少。",
        933 :"心灵手巧，缺少耐心，不要总是变动。",
        944 :"做事想得多，来回改，适合做学者；如果自己做老板，一定要想少点。",
        955 :"自私，固执，因为自己的自私失败；不要践踏法律。",
        966 :"点石成金，能力强，运气好，能抓住机会，抓稳一个再抓下一个，别太贪心。",
        977 :"容易招桃花，贵人，小人，别利用别人。",
        988 :"机会很多，贪心，压力大，忙碌，四处奔波，男人注意心脏，女人注意子宫。",
        999 :"野心太大，太贪心，不一定有好结果，容易众叛亲离，孤独。",
    };
    

const numerologyDetails = {
    1: {
        personalityTraits: "1号人热爱独立，而且会不惜代价追求独立。天生的领袖，充满自动自发的精神。精力充沛，不容易疲累。",
        communication: "让他们知道，他们个人能从中得到什么好处。事情尽量单纯，不妨加入一点戏剧效果。他们讨厌那些需要小心维修的情况。",
        talents: "天生具备领导才能，常能以非常明确的方式研判情势，因此很容易做出决定。能用新点子或独特的点子来解决问题。",
        careerDevelopment: "任何允许独立作业的工作都适合1号人。例如：艺术家、发明家、企业家、业务销售、医生、设计师、运动员（不是团队形态的运动）",
    },
    2: {
        personalityTraits: "2号人非常注意细节，具备极佳的分析能力和辨识能力。天生的外交与公关人才，善于沟通。不喜欢带头主导，愿意与人合作而不喜单独行事。",
        communication: "他们需要多一点的时间把事情解说清楚。买东西时会介意价格，除非你能提出很好的解释。",
        talents: "2号人善于分析问题，因此他们很适合从事各种需要研究的工作。能和别人共事愉快，使绝佳的团队成员。",
        careerDevelopment: "凡是涉及团队合作或研究的工作，2数人都能胜任愉快。例如：写作，导游，研究员，辅导顾问，人力资源，演员。",
    },
    3: {
        personalityTraits: "3号人从事物表面的样子来看事情，很在意形象与外观，所以有些人会认为他们 [肤浅]。理想主义者，对于什么叫做美、流行或品味都很有敏锐感受。绝对不接受批评，也绝不允许别人批评他们。",
        communication: "永远不要批评他们，先让他们知道他们能得到自己想要的东西，然后再解释方法。他们会相信那些听起来好到不能再好，而且简直不真实的东西。他们在乎别人怎么看他们，形象是一切，通常他们喜欢时尚流行。",
        talents: "拥有丰沛的创造力，能看出事物是什么模样，又应该如何呈现。拥有丰沛的创造力，能看出事物是什么模样，又应该如何呈现。",
        careerDevelopment: "凡是需要运用沟通技巧及创造力的工作，无论是与人共事或独立作业，都很适合3数人。例如：音乐工作者，演艺人员，企业家，执行长，人力资源，广告业。",
    }, 
    4: {
        personalityTraits: "4号人天生的建设好手，因为建设正是一种建立安全感的方法。不爱冒险的特性使得4数人喜欢受雇于人，而不想自己当老板。4数人不喜欢改变，不管是搬家，分手，离婚，甚至换一家餐厅吃饭，他们都回顽强抗拒。",
        communication: "必须用具体证据向他们说明你的观点。不要转移主体或模糊焦点。",
        talents: "不是常常能冒出点子的创意人才，但他们有本事改进别人的构想，使它精益求精。他们能从事重复性高、别人也许觉得枯燥的工作。",
        careerDevelopment: "4数人能与别人合作愉快，非常适合从事讲求规律的行业。例如：银行业，会计，电脑业，厨师，经理人，医药人员。",
    },   
    5: {
        personalityTraits: "5号人痛恨任何形式的限制或束缚，并且会起而抗争。言善道，口齿伶俐，善于表达，因此很容易博得别人的信任与支持。传达信息非常清晰简洁，运用在政界与商场很能获得别人的信任。",
        communication: "永远不要逼他们做出承诺。绝对不要限制或压迫他们。提供他们新奇有趣的事物及讯息。",
        talents: "乐于与人交谈，并在谈笑间轻松说服别人，因而非常适合销售推广。喜欢以不受契约约束的工作形态自由接工作，很容易与传播媒体打交道。",
        careerDevelopment: "最适合用一种可以享有相当程度自由的方式与人一起工作，要可以让他们自行设定工作节奏。例如：业务销售，歌手及演员，记者，广告业，媒体和公关，DJ。",
    },
    6: {
        personalityTraits: "6号人天生善于分析，而且十分敏感，对旁人的痛苦能感同身受。出于本能就想修补东西和解决问题。会全面付出，毫无限度，最后往往换来了牺牲自己的昂贵代价 。 ",
        communication: "他们必须觉得被别人需要。他们关心别人更胜于照顾自己。他们需要得到关注与尊重。价格不是问题，只要产品能让别人受惠。",
        talents: "很快能厘清事情哪里出了错，也知道该采取哪些步骤来解决问题。能胜任各种服务性质的工作。",
        careerDevelopment: "6数人和别人合作愉快，并且需要觉得别人需要他。例如：医生，质询顾问，作曲家，艺术家，机械师，厨师，哲学家，教师。",
    },
    7: {
        personalityTraits: "在所有数字当中，7数人可能是最讲逻辑的。天生好奇，喜欢不断发问，探究事情背后的真相。 需要时间独处，天生对宗教、哲学等有兴趣，导致他们甚至考虑要遁入空门。",
        communication: "他们必须知道细节，而质疑也必须立刻得到回复。他们必须确定他们可以掌控更多情势。永远不要催促或逼迫他们采取行动，必须等他们自己做出决定。",
        talents: "由于7数人有一点懒散，所以喜欢从事有组织、有系统的事情。错综复杂的事物也能引发他们的兴趣。",
        careerDevelopment: "7数人必须从事需要思考的工作。例如：工程师，电脑业，企业家，音乐工作，医生，广告业，市场行销。",
    },
    8: {
        personalityTraits: "打从心底厌恶怠惰这件事，如果事情进展得很慢，他们的态度会变得强硬。独具慧眼，一眼就看得出哪些人事物具有潜力。8数人是高八度音阶的1数，因此它也具备了1数的领导才华和追求独立的特质。 ",
        communication: "买东西时刚开始一定会在乎价格，除非产品能让他们看起来更高级或在未来获利。必须强调他们可以从你的方式得到哪些好处。指出未来发展的潜力。",
        talents: "可以成为非常强势的领导者，他们可说是天生的老板性格。能与别人共事愉快，善于组织人事，具备优秀的领导能力。",
        careerDevelopment: "8数人的工作性质必须能让他们根据自己的直觉和理念自由行事。例如： 银行金融 ，医生，法官，企业家，总经理，总统，政治人物。",
    },
    9: {
        personalityTraits: "多才多艺的一群，想象力丰富，生下来就是梦想家。 9数人的梦想与计划就像是电影情节，没有任何限制。乐于行善，并认为上帝会一直守在他们身边，为他们带来看不见的好运。对于别人的需求十分敏感，觉得助人是义不容辞的事。",
        communication: "不要批评他们的想法或计划。找出他们的梦想所在，并且扩大它。他们买东西时不会担心价格。",
        talents: "超级的服务高手，能让人觉得被照顾得无微不至。丰富的创意才华，而且是很棒的表演者。",
        careerDevelopment: "9数人能和他人共事愉快，而他们也不喜欢单打独斗。例如：演艺事业，记者，飞行员，观光旅游业，护士或医生，服务人员，作家。",
    },
    // 其他数字的解释内容可以继续添加
};

function calculateAndShowResult() {
    let day = parseInt(document.getElementById("day").value);
    let month = parseInt(document.getElementById("month").value);
    let year = parseInt(document.getElementById("year").value);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        document.getElementById("result").innerText = "请输入有效的日期！";
        document.getElementById("triangle").innerText = "";
        document.getElementById("description").innerText = "";
        document.getElementById("special-numbers").innerText = "";
        document.getElementById("special-description").innerText = "";
        return;
    }

    // 计算原始三角形
    let { firstLayer, secondLayer, finalNumber } = calculateNumerology(day, month, year);

    // 生成原始三角形结构
    let triangle = `${firstLayer[0]}   ${firstLayer[1]}   ${firstLayer[2]}   ${firstLayer[3]}` +
                   `\n   ${secondLayer[0]}        ${secondLayer[1]}` +
                   `\n         ${finalNumber}`;

    // 计算下半部分三角形
    let newFirstLayer = [
        sumDigits(firstLayer[0] + secondLayer[0]), // 9a + 1b = 9 + 1 = 10 → 1g
        sumDigits(firstLayer[1] + secondLayer[0]), // 1c + 1b = 1 + 1 = 2h
        sumDigits(firstLayer[2] + secondLayer[1]), // 1d + 1e = 1 + 1 = 2i
        sumDigits(firstLayer[3] + secondLayer[1])  // 9f + 1e = 9 + 1 = 10 → 1j
    ];

    let newSecondLayer = [
        sumDigits(newFirstLayer[0] + newFirstLayer[1]), // 1g + 2h = 1 + 2 = 3k
        sumDigits(newFirstLayer[2] + newFirstLayer[3])  // 2i + 1j = 2 + 1 = 3l
    ];

    let newFinalNumber = sumDigits(newSecondLayer[0] + newSecondLayer[1]); // 3k + 3l = 3 + 3 = 6m

    // 生成下半部分三角形结构
    let newTriangle = `\n------------------------\n` +
                      `${newFirstLayer[0]}   ${newFirstLayer[1]}   ${newFirstLayer[2]}   ${newFirstLayer[3]}` +
                      `\n   ${newSecondLayer[0]}        ${newSecondLayer[1]}` +
                      `\n         ${newFinalNumber}`;

    // 显示完整的三角形结构
    document.getElementById("triangle").innerText = triangle + newTriangle;

    // 显示数字玄学根号
    document.getElementById("result").innerText = "你的数字玄学根号是: " + finalNumber;
    document.getElementById("description").innerText = numerologyDescriptions[finalNumber] || "暂无对应解析";

    // 提取并显示特别号码
    let specialNumbers = extractSpecialNumbers(firstLayer, secondLayer, finalNumber);
    let specialDescriptions = specialNumbers.map(num => `${num}: ${specialNumberDescriptions[num]}`).join("\n");

    document.getElementById("special-numbers").innerText = "特别号码: " + specialNumbers.join(", ");
    document.getElementById("special-description").innerText = specialDescriptions || "暂无特别号码";

    // 显示新增的解释内容
    const details = numerologyDetails[finalNumber];
    const prosAndCons = numerologyProsAndCons[finalNumber];

    if (details) {
        document.getElementById("personality-traits-content").innerText = details.personalityTraits;
        document.getElementById("communication-content").innerText = details.communication;
        document.getElementById("talents-content").innerText = details.talents;
        document.getElementById("career-development-content").innerText = details.careerDevelopment;
    } else {
        document.getElementById("personality-traits-content").innerText = "暂无数据";
        document.getElementById("communication-content").innerText = "暂无数据";
        document.getElementById("talents-content").innerText = "暂无数据";
        document.getElementById("career-development-content").innerText = "暂无数据";
    }

    if (prosAndCons) {
        document.getElementById("pros-content").innerText = prosAndCons.pros;
        document.getElementById("cons-content").innerText = prosAndCons.cons;
    } else {
        document.getElementById("pros-content").innerText = "暂无数据";
        document.getElementById("cons-content").innerText = "暂无数据";
    }
    

}

// 提取特别号码（包含横向 & 斜向）
function extractSpecialNumbers(firstLayer, secondLayer, finalNumber) {
    let possibleNumbers = [];

    // 横向组合
    possibleNumbers.push(parseInt(`${firstLayer[0]}${firstLayer[1]}`));
    possibleNumbers.push(parseInt(`${firstLayer[1]}${firstLayer[2]}`));
    possibleNumbers.push(parseInt(`${firstLayer[2]}${firstLayer[3]}`));
    possibleNumbers.push(parseInt(`${secondLayer[0]}${secondLayer[1]}`));

    // 斜向组合
    possibleNumbers.push(parseInt(`${firstLayer[0]}${secondLayer[0]}${finalNumber}`));  // 左斜线
    possibleNumbers.push(parseInt(`${firstLayer[3]}${secondLayer[1]}${finalNumber}`));  // 右斜线

    // 使用 Set 去重，然后过滤出有效的特别号码
    let uniqueNumbers = [...new Set(possibleNumbers)]; // 去重
    return uniqueNumbers.filter(num => specialNumberDescriptions.hasOwnProperty(num));
}

// 计算第一层、第二层和最终玄学数字
function calculateNumerology(day, month, year) {
    let firstLayer = [
        sumDigits(day),              // 归约到个位数
        sumDigits(month),            // 归约到个位数
        sumDigits(Math.floor(year / 100)), // 归约到个位数（年份前两位）
        sumDigits(year % 100)        // 归约到个位数（年份后两位）
    ];

    let secondLayer = [
        sumDigits(firstLayer[0] + firstLayer[1]), // 计算第二层左侧
        sumDigits(firstLayer[2] + firstLayer[3])  // 计算第二层右侧
    ];

    let finalNumber = sumDigits(secondLayer[0] + secondLayer[1]); // 计算最终玄学数字

    return { firstLayer, secondLayer, finalNumber };
}

// 计算数位总和，确保最终返回个位数
function sumDigits(num) {
    while (num >= 10) { // 这里确保彻底归约
        num = num.toString().split("").reduce((acc, digit) => acc + parseInt(digit), 0);
    }
    return num;
}

/*Slideshow*/
document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const slides = document.querySelectorAll(".slide img");
    const totalSlides = slides.length;

    function showSlide() {
        slides.forEach((img, i) => {
            img.style.display = i === index ? "block" : "none";
        });
    }

    document.querySelector(".prev").addEventListener("click", function () {
        index = (index - 1 + totalSlides) % totalSlides;
        showSlide();
    });

    document.querySelector(".next").addEventListener("click", function () {
        index = (index + 1) % totalSlides;
        showSlide();
    });

    showSlide(); // 初始化显示第一张
});

document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.querySelector(".image-container");

    function handleScroll() {
        const rect = imageContainer.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
            imageContainer.classList.add("show");
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 初始检查
});

let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    
    // 隐藏所有图片
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // 计算当前要显示的图片
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; // 重新回到第一张
    }

    // 显示当前图片
    slides[slideIndex - 1].style.display = "block";

    // 设置自动切换时间
    setTimeout(showSlides, 3000); // 3秒切换一次
}

// 启动轮播
showSlides();