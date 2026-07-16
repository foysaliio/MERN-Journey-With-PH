# 05 - Arrays and Array Methods

## Overview

Arrays are one of the most heavily used data structures in JavaScript. This topic covers array creation, mutation, the essential built-in methods, and the iteration patterns (map/filter/reduce) used constantly in real-world and React code.

## Topics Covered

### 1. Creating and Accessing Arrays

Arrays can hold mixed data types. Elements are accessed by zero-based index; `.length` gives the element count.

### 2. Mutating Methods

`push`/`pop` (end), `unshift`/`shift` (start) — these all mutate the original array in place.

### 3. splice() vs slice()

- `splice(start, deleteCount, ...items)` — **mutates** the original array; can remove and/or insert elements.
- `slice(start, end)` — **does not mutate**; returns a new array copy of the selected range.

### 4. Searching

`indexOf`, `includes` (existence check), `find` (first matching element), `findIndex` (index of first match).

### 5. Iteration Methods

- `forEach` — runs a function per element, returns `undefined` (used purely for side effects).
- `map` — transforms each element, **returns a new array** of the same length.
- `filter` — **returns a new array** containing only elements that pass a test.
- `reduce` — accumulates all elements into a single value (sum, object, another array, etc.).

### 6. Sorting

`sort()` without a comparator sorts **lexicographically** (as strings) by default — a classic bug source for numbers (`[1, 100, 25, 40, 5]`). Always pass a comparator function `(a, b) => a - b` for numeric ascending sort.

### 7. Spread Operator with Arrays

`[...array]` creates a shallow copy; `[...arr1, ...arr2]` merges arrays without mutating either original.

### 8. Method Chaining

Array methods that return new arrays (`filter`, `map`) can be chained together, followed by `reduce` to produce a final value — a very common professional pattern.

### 9. Array Destructuring

`const [first, second, ...rest] = array` extracts values into individual variables in one line, with `...rest` capturing remaining elements.

## Files

- `index.html` — minimal HTML file that loads `script.js`
- `script.js` — demonstrates all core array methods, sorting pitfalls, chaining, and destructuring

## How to Run

Open `index.html` in a browser and check the DevTools Console (F12) to see the output.

## Key Takeaways

- Know which methods **mutate** the original array (`push`, `pop`, `splice`, `sort`, `reverse`) vs which **return a new array** (`map`, `filter`, `slice`, `concat`).
- `map`/`filter`/`reduce` are the foundation of functional-style JavaScript and are used constantly in React.
- Always supply a comparator function to `sort()` when working with numbers.
