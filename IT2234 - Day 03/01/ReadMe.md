# JavaScript Functions

This repository contains JavaScript function examples, demonstrating various types of functions, including void functions, return type functions, parameterized functions, arrow functions, and callback functions.

## Getting Started
Ensure you have Node.js installed or run the scripts in the browser console.

## Code Overview

### 1. Void Type Functions
- Functions that do not return a value.
- Example:
  ```js
  function PrintMsg(){
      console.log("Hello JS");
  }
  PrintMsg();
  ```

### 2. Return Type Functions
- Functions that return a value.
- Example:
  ```js
  function sum(){
      return 5 + 1;
  }
  console.log(sum());
  ```

### 3. Parameterized Functions
- Functions that accept parameters.
- Example:
  ```js
  function sub(a, b){
      return a - b;
  }
  console.log(sub(10, 5));
  ```

### 4. Arrow Functions
- Shorter syntax for function expressions.
- Example:
  ```js
  const msg = ()=> {return console.log("Hello JS")};
  msg();
  ```

### 5. Arrow Function with Rest Parameter
- Allows passing a variable number of arguments.
- Example:
  ```js
  const mySum1 = (...n)=> {
      console.log(n);
  }
  mySum1(6, 5, 7, 8, 9);
  ```

- Using `reduce` method:
  ```js
  const mySum2 = (...n)=> {
      return n.reduce((t, i) => t + i);
  }
  console.log(mySum2(5, 5, 5, 8, 9));
  ```

### 6. Callback Functions
- A function passed as an argument to another function.
- Example:
  ```js
  const greet = (msg, fun) => {
      console.log("Hi " + msg);
      fun();
  }
  greet("Good Morning", () => {console.log("My name is Kosala")});
  ```

## Running the Code
To execute the JavaScript files:
```sh
node filename.js
```
Or, copy-paste the code into the browser's developer console.

## Expected Outputs
<img width="959" alt="Screenshot 2025-03-20 200416" src="https://github.com/user-attachments/assets/6458598f-5e9d-40f5-9545-2de3e366fb24" />

