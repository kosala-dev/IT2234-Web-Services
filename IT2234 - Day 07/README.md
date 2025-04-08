# Async File Reading in Node.js
This repository demonstrates different methods of reading files asynchronously in Node.js. Three different approaches are presented:

asynawait.js – Using async/await with Promise.allSettled.

asynpro.js – Using traditional callback-based asynchronous file reading with fs.readFile.

promiseapp.js – Using Promise and fs.promises to read files asynchronously.

Files Overview
1. asynawait.js
This script demonstrates how to read multiple files concurrently using async/await and Promise.allSettled. This method ensures that all promises are handled, even if some of them fail. It outputs the status and values of the files read.

2. asynpro.js
This script uses the traditional callback-based approach of asynchronous file reading. The file is read using fs.readFile with a callback that handles the result or error.

3. promiseapp.js
This script demonstrates the usage of Promise in Node.js for asynchronous file reading. The file is read with fs.promises.readFile, and the result is handled using .then() and .catch().

Setup
To run these scripts, you need to have Node.js installed on your machine. The scripts depend on the built-in fs module in Node.js.

Clone or download this repository.

Ensure the files file.txt and data.txt are available in the same directory as the script files.

Run the scripts using Node.js by executing the following commands:
node asynawait.js
node asynpro.js
node promiseapp.js

# Expected Outputs

<img width="959" alt="1" src="https://github.com/user-attachments/assets/cebd45e5-d45c-484f-b6ce-8900bf42735d" />

