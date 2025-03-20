# Setting Up an Express.js Server

This guide walks you through setting up a simple Express.js server step by step.

## Prerequisites
- Install [Node.js](https://nodejs.org/)
- Open a terminal and follow these commands:
  
  **1. Initialize a Node.js project:**
  ```sh
  npm init
  ```
  This command creates a `package.json` file, which manages dependencies.
  
  **2. Install Express.js:**
  ```sh
  npm install express
  ```
  This installs Express.js and adds it to `package.json`.

## Server Code
Save the following script as `server.js`:
```js
const express = require('express');
const app = express();
const port = 3001;

// Define routes
app.get('/', (req, res) => {
    res.send('Hello Express JS');
});

app.get('/msg', (req, res) => {
    res.send('Hello IT Students');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on: http://localhost:${port}`);
});
```

## Running the Server
1. Open a terminal and navigate to the folder where `server.js` is saved.
2. Run the following command to start the server:
   ```sh
   node server.js
   ```
3. Open a browser and visit:
   - `http://localhost:3001/` → Displays `Hello IT Students`
   - `http://localhost:3001/msg` → Displays `Hello Express JS`

## Expected Console Output
```sh
Server is running on: http://localhost:3001
```