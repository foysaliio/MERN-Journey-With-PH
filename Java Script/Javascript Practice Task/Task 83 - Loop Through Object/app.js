let scores = {
  math: 90,
  science: 85,
  art: 95,
};

let totalNumber = 0;

for (const key in scores) {
  // Console Log like: math: 90
  console.log(`${key}: ${scores[key]}`);

  //Total Number

  totalNumber += scores[key];
}

const averageNumber = totalNumber / Object.values(scores).length;
console.log(averageNumber);
