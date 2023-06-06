const charTable = {
    // 冂卩认乃仨丅 爪认卩
    "闩":"А",
    "石":"Б",
    "乃":"В",
    "厂":"Г",
    "亼":"Д",
    "仨":"Е",
    "水":"Ж",
    "弓":"З",
    "认":"И",
    "片":"К",
    "人":"Л",
    "爪":"М",
    "卄":"Н",
    "口":"О",
    "冂":"П",
    "卩":"Р",
    "匚":"С",
    "丅":"Т",
    "丫":"У",
    "中":"Ф",
    "乂":"Х",
    "凵":"Ц",
    "丩":"Ч",
    "山":"Ш",
    "山":"Щ",
    "乙":"Ъ",
    "辷":"Ы",
    "乙":"Ь",
    "彐":"Э",
    "扣":"Ю",
    "牙":"Я",
    "Я":"я" 
};

const updateString = () => {
    let inputString = document.getElementById('input').value;
    inputString = inputString
    .split('')
    .map(char => charTable[char] ? charTable[char] : char)
    .join('');
    document.getElementById('output').innerText = inputString;
    console.log(charTable[char]);
};

document.getElementById('input').addEventListener('input', updateString);

