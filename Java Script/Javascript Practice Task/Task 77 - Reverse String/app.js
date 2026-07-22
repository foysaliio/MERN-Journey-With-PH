const languageStr = "JavaScript";

// Reverse Method

const languageArr = languageStr.split("");
const languageArrReverse = languageArr.reverse();
const languageStrReverse = languageArrReverse.join("");

console.log(languageStrReverse);

// For of Loop Method

let reverseLang = "";

for (const language of languageStr) {
  reverseLang = language + reverseLang;
}
console.log(reverseLang);
