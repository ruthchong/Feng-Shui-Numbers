const numerologyDescriptions = {
    1: "数字 1 代表领导力和独立性。",
    2: "数字 2 代表合作与和谐。",
    3: "数字 3 代表创造力和表达能力。",
    4: "数字 4 代表稳定和努力工作。",
    5: "数字 5 代表自由和冒险精神。",
    6: "数字 6 代表关怀和责任感。",
    7: "数字 7 代表智慧和精神成长。",
    8: "数字 8 代表财富与权力。",
    9: "数字 9 代表人道主义与慈悲心。",
};

const specialNumberDescriptions = {
    11: "11 是一个大师数字，象征灵性和直觉。",
    19: "19 代表领导力和独立精神。",
    22: "22 代表建筑师之数，意味着创造和伟大的潜力。",
    33: "33 是最具奉献精神的数字，象征无私和慈爱。",
    44: "44 代表强大的基础建设者，擅长长期规划。",
    55: "55 象征自由和变化，代表大冒险。",
    66: "66 代表爱与家庭，是和谐的象征。",
    77: "77 代表智慧、精神成长和深度思考。",
    88: "88 象征财务成功和物质世界的掌控力。",
    91: "91 代表独立精神和领导力，象征强大的决策能力。",
    99: "99 代表全球意识、慈悲和人道主义精神。",
    911: "911 代表强大的转变能量，象征智慧与灵性成长。",
    912: "912 代表创新、成长和新方向。",
    112: "112 代表直觉和合作精神。",
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
    let newTriangle = `\n--------------\n` +
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

    // 过滤出有效的特别号码
    return possibleNumbers.filter(num => specialNumberDescriptions.hasOwnProperty(num));
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