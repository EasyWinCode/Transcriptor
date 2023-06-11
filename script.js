const charTable = {
    // 冂卩认乃仨丅 爪认卩
    "爱":"ай⁴",
    "八":"ба¹",
    "爸":"ба⁴",
    "爸爸":"ба⁴ба⁵",
    "杯":"бэй¹",
    "子":"дзы³",
    "杯子":"бэй¹дзы⁵",
    "北":"бэй³",
    "京":"дзи¹нъ",
    "北京":"бэ³йдзи¹нъ",
    "本":"бэ³н",
    "不":"бу⁴",
    "客":"кхэ³",
    "气":"тьси⁴",
    "不客气":"бу⁴кхэ³тьси⁵",
    "菜":"цха⁴й",
    "茶":"чха²",
    "吃":"чши¹",
    "出":"чху¹",
    "租":"дзу¹",
    "车":"чхэ¹",
    "出租车":"чху¹дзу¹чхэ¹",
    "打":"да³",
    "电":"дъе⁴н",
    "话":"хуа⁴",
    "打电话":"да³дъе⁴нхуа⁴",
    "大":"да⁴",
    "的":"дэ⁵",
    "点":"дъе³н",
    "脑":"на³о",
    "电脑":"дъе⁴нна³о",
    "视":"ши⁴",
    "电视":"дъе⁴нши⁴",
    "影":"йи³нъ",
    "电影":"дъе⁴нйи³нъ",
    "东":"ду¹нъ",
    "西":"си¹",
    "东西":"ду¹нъси⁵",
    "都":"до¹у",
    "读":"ду²",
    "对":"ду⁴й",
    "起":"тьси³",
    "对不起":"ду⁴йбу⁵тьси³",
    "多":"дуо¹",
    "少":"ша³о",
    "多少":"дуо¹шао⁵",
    "儿":"эр²",
    "儿子":"эр²дзы⁵",
    "二":"э⁴р",
    "饭":"фа⁴н",
    "馆":"гуа³н",
    "饭馆":"фа⁴нгуа³н",
    "飞":"фэ¹й",
    "机":"дзи¹",
    "飞机":"фэ¹йдзи¹",
    "分":"фэ¹н",
    "钟":"джу¹нъ",
    "分钟":"фэ¹нджу¹нъ",
    "高":"га¹о",
    "兴":"си¹нъ",
    "高兴":"га¹оси⁴нъ",
    "个":"гэ⁴",
    "工":"гу¹нъ",
    "作":"дзуо⁴",
    "工作":"гу¹нъдзуо¹",
    "狗":"го³у",
    "汉":"ха⁴н",
    "语":"йу³",
    "汉语":"ха⁴нйу³",
    "好":"ха³о",
    "喝":"хэ¹",
    "和":"хэ²",
    "很":"хэ³н",
    "后":"хо⁴у",
    "面":"мье⁴н",
    "后面":"хо⁴умье⁴н",
    "回":"хуэй⁴",
    "会":"хуэй²",
    "火":"хуо³",
    "车":"чхэ¹",
    "站":"джа⁴н",
    "火车站":"хуо³чхэ¹джа⁴н",
    "几":"дзи³",
    "家":"дзя¹",
    "叫":"дзя⁴о",
    "今":"дзи¹н ",
    "天":"тъе¹н",
    "今天":"дзи¹нтъе¹н",
    "九":"дзь³яо",
    "开":"кха¹й",
    "看":"кха⁴н",
    "见":"дзъе⁴н",
    "看见":"кха⁴ндзъе⁴н",
    "块":"кхуа⁴й",
    "来":"ла²й",
    "老":"ла³о",
    "师":"ши¹",
    "老师":"ла³оши¹",
    "了":"лэ⁵",
    "冷":"лэ³нъ",
    "里":"ли³",
    "零":"ли⁴нъ",
    "六":"лиу⁴",
    "妈":"ма¹",
    "妈妈":"ма¹ма¹",
    "吗":"ма⁵",
    "买":"ма³й",
    "猫":"ма¹о",
    "没":"мэ²й",
    "关":"гуа¹н",
    "系":"си⁴",
    "没关系":"мэ²йгуа¹нси⁵",
    "米":"ми³",
    "饭":"фа⁴н",
    "米饭":"ми³фа⁴н",
    "明":"ми²нъ",
    "天":"тъе¹н",
    "明天":"ми²нътъе¹н",
    "名":"ми²нъ",
    "字":"дзы⁴",
    "名字":"ми²нъдзы⁵",
    "哪":"на³",
    "那":"на⁴",
    "呢":"нэ⁵",
    "能":"нэ²нъ",
    "你":"ни³",
    "年":"нье²н",
    "女":"нйю³",
    "女儿":"нйю³р",
    "朋":"пхэ²нъ",
    "友":"йо³у",
    "朋友":"пхэ²нъйо³у",
    "漂":"пхья¹о",
    "亮":"лья⁴нъ",
    "漂亮":"пхья¹ольянъ⁵",
    "苹":"пхи²нъ",
    "果":"гуо³",
    "苹果":"пхи²нъгуо³",
    "七":"тьси¹",
    "钱":"тьсие²н",
    "前":"тьсие²н",
    "面":"мье⁴н",
    "前面":"тьсие²нмье⁴н",
    "请":"тьси³нъ",
    "去":"тьсю⁴",
    "热":"жэ⁴",
    "人":"жэ²н",
    "认":"жэ⁴н",
    "识":"ши²",
    "认识":"жэ⁴нши⁵",
    "日":"жи⁴",
    "三":"са¹н",
    "商":"ша¹нъ",
    "店":"дье⁴н",
    "商店":"ша¹нъдье⁴нъ",
    "上":"ша⁴нъ",
    "上午":"ша⁴нъву³",
    "谁":"шэ²й",
    "什么":"шэ²нмэ⁵",
    "十":"ши²",
    "时":"ши²",
    "候":"хоу²",
    "时候":"ши² хоу⁵",
    "是":"ши⁴",
    "书":"шу¹ ",
    "水":"шуэй³",
    "水果":"шуэй³ гуо³",
    "睡":"шуэй⁴",
    "觉":"дзьяо⁴",
    "睡觉":"шуэй⁴ дзяо⁴",
    "说":"шуо¹",
    "话":"хуа⁴",
    "说话":"шуо¹хуа⁴",
    "四":"сы⁴",
    "岁":"суэй⁴",
    "他":"тха¹",
    "她":"тха¹",
    "太":"тхай⁴",
    "天气":"тьен¹",
    "听":"тхинъ¹",
    "同":"тхунъ²",
    "学":"сюэ²",
    "同学":"тхунъ² сюэ²",
    "喂":"вэй⁴",
    "我":"во³",
    "我们":"во³мэн⁵",
    "五":"ву³",
    "喜":"си³",
    "欢":"хуан¹",
    "喜欢":"си³ хуан⁵",
    "下":"ся⁴ ",
    "下午":"ся⁴ уу³",
    "下雨":"ся⁴ йю³",
    "先":"сьенъ¹",
    "生":"шэнъ¹",
    "先生":"сьен¹шэнъ⁵",
    "现":"сьен⁴",
    "在":"дзай⁴",
    "现在":"сьен⁴дзай⁴",
    "想":"сьянъ³",
    "小":"сьяо³",
    "小姐":"сьяо³ дзье⁵",
    "些":"сье¹",
    "写":"сье³",
    "谢谢":"сье⁴сье⁴",
    "星":"синъ¹",
    "期":"тьси¹",
    "星期":"синъ¹ тьси¹",
    "学生":"сюэ² шэнъ⁵",
    "学习":"сюэ² си²",
    "学校":"сюэ² сяо⁴",
    "一":"йи¹",
    "依":"йи¹",
    "服":"фу²",
    "衣服":"йи¹ фу⁵",
    "医":"йи¹",
    "医生":"йи¹ шэнъ⁵",
    "医院":"йи¹ юэн⁴",
    "院":"юан³",
    "椅":"йи³",
    "椅子":"йи³ дзы⁵",
    "有":"йоу³",
    "月":"юэ⁴",
    "再见":"дзай⁴ дзъен⁵",
    "怎么":"дзэн³ мэ⁵",
    "怎么样":"дзэн³ мэ⁵ янъ⁴",
    "样":"янъ⁴",
    "这":"джэ⁴",
    "中":"джунъ¹",
    "国":"гуо²",
    "中国":"джунъ¹ гуо²",
    "中午":"джун¹ уу³",
    "住":"джу⁴",
    "桌":"джуо¹",
    "桌子":"джуо¹ дзы⁵",
    "字":"дзы⁴",
    "昨天":"дзуо² тьен¹",
    "坐":"дзуо⁴",
    "做":"дзуо⁴"
};

//для одного символа
const updateString = () => {
    let inputString = document.getElementById('input').value;
    inputString = inputString
    .split('')
    .map(char => charTable[char] ? charTable[char] : char)
    .join('');
    document.getElementById('output').innerText = inputString;
    console.log(charTable[char]);
};

//для множества символов через пробелы
function replaceWithAssociation(input) {
    // Split the input into an array of words
    const words = input.split(" ");
    
    // Loop through each word and replace if it's in the associaction table
    const output = words.map(word => {
      if (charTable[word]) {
        return charTable[word];
      }
      return word;
    });
    
    // Join the words back into a string and return
    return output.join(" ");
  }
const updateString_2 = () => {
    let inputString = document.getElementById('input').value;
    inputString = replaceWithAssociation(inputString);  
    document.getElementById('output').innerText = inputString;  
};
// if(charTable[currentChar]) {
//   if(charTable[currentChar] != ' '){
//     if(charTable[nextChar]){
//       if (charTable[next2Char]){
//         output += charTable[next2Char];
//         i = i + 2;
//       }
//       else{
//         output += charTable[nextChar];
//         i++;
//       }
//     }
//     else{
//       output += charTable[currentChar];
//     } 
//   }
//   else{
//     output += currentChar;
//   }
// }
//для целого текста
function replaceWithAssociation2(input) {
  // Split the input into an array of words
  let userInput = input;
  let output = "";
  for(let i = 0; i < userInput.length; i++) {
    let currentChar = userInput.charAt(i);
    let nextChar = currentChar + userInput.charAt(i+1);
    let next2Char = nextChar + userInput.charAt(i+2);

    if(charTable[currentChar]) {
      if(charTable[currentChar] != ' '){
        if(charTable[nextChar]){
          if (charTable[next2Char]){
            output += charTable[next2Char];
            i = i + 2;
          }
          else{
            output += charTable[nextChar];
            i++;
          }
        }
        else{
          output += charTable[currentChar];
        } 
      }
      else{
        output += currentChar;
      }
    } 
    else if (charTable[nextChar]){
      if (charTable[next2Char]){
        output += charTable[next2Char];
        i = i + 2;
      }
      else{
        output += charTable[nextChar];
        i++;
      }
    }
    else if (charTable[next2Char]){
      output += charTable[next2Char];
      i = i + 2;
    }
    else {
      output += currentChar;
    }
  }
  //出租车 衣服 服
  return output;
}
const updateString_3 = () => {
  let inputString = document.getElementById('input').value;
  inputString = replaceWithAssociation2(inputString);  
  document.getElementById('output').innerText = inputString;  
};

document.getElementById('input').addEventListener('input', updateString_3);

