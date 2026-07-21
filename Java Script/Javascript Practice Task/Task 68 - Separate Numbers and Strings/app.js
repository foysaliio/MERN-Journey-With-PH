const studentsData = [
  "Foysal",
  1001,
  "Sadik",
  1002,
  "Munna",
  1003,
  "Tuhin",
  1004,
];

const studentName = [];
const studentRoll = [];

for (const studentData of studentsData) {
  if (typeof studentData === "string") {
    studentName.push(studentData);
  } else if (typeof studentData === "number") {
    studentRoll.push(studentData);
  }
}

console.log(studentName);
console.log(studentRoll);
