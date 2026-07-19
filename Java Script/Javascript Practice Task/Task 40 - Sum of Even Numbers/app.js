let sum = 0;

for (let i = 2; i <= 50; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}
console.log(`Sum of all even numbers from 2 to 50 is ${sum}`);
