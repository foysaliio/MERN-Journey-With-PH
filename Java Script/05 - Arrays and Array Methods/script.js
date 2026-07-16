"use strict";

// ----- creating arrays -----
const fruits = ["apple", "banana", "mango"];
const mixed = [1, "two", true, null, { key: "value" }];
console.log(fruits, mixed);

// ----- accessing and mutating -----
console.log(fruits[0]);      // "apple"
console.log(fruits.length);  // 3
fruits[1] = "grape";
console.log(fruits);

// ----- adding / removing elements -----
fruits.push("orange");     // add to end
fruits.unshift("kiwi");    // add to start
fruits.pop();               // remove from end
fruits.shift();             // remove from start
console.log(fruits);

// ----- splice: add/remove at any position -----
const numbers = [1, 2, 3, 4, 5];
numbers.splice(1, 2);           // removes 2 items starting at index 1
console.log(numbers);           // [1, 4, 5]
numbers.splice(1, 0, 10, 20);   // inserts without removing
console.log(numbers);           // [1, 10, 20, 4, 5]

// ----- slice: extract without mutating original -----
const original = [1, 2, 3, 4, 5];
const sliced = original.slice(1, 3); // [2, 3], original unchanged
console.log(sliced, original);

// ----- searching -----
console.log(original.indexOf(3));      // 2
console.log(original.includes(10));    // false
console.log(original.find((n) => n > 3));       // 4, first match
console.log(original.findIndex((n) => n > 3));  // 3

// ----- iteration methods -----
original.forEach((n) => console.log(`value: ${n}`));

// map: transforms each element into a new array
const doubled = original.map((n) => n * 2);
console.log(doubled);

// filter: keeps elements that pass a condition
const evens = original.filter((n) => n % 2 === 0);
console.log(evens);

// reduce: accumulates array into a single value
const sum = original.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum);

// ----- sorting -----
const scores = [40, 100, 1, 5, 25];
scores.sort();                         // default sort is lexicographic (string-based) - a common bug source
console.log(scores);                   // [1, 100, 25, 40, 5]
scores.sort((a, b) => a - b);          // ascending numeric sort
console.log(scores);
scores.sort((a, b) => b - a);          // descending numeric sort
console.log(scores);

// ----- reversing -----
console.log([1, 2, 3].reverse());

// ----- joining and converting -----
console.log(fruits.join(", "));
console.log(Array.from("abc"));        // ["a", "b", "c"]
console.log(Array.isArray(fruits));    // true

// ----- spread operator with arrays -----
const combined = [...fruits, ...numbers];
console.log(combined);

const arrCopy = [...original]; // shallow copy, safer than assigning by reference
console.log(arrCopy);

// ----- chaining array methods -----
const result = original
  .filter((n) => n > 1)
  .map((n) => n * 10)
  .reduce((acc, n) => acc + n, 0);
console.log(result);

// ----- destructuring arrays -----
const [first, second, ...rest] = original;
console.log(first, second, rest);
