
# In-Course Assessment - JavaScript Projects

This repository includes four JavaScript programs developed for an in-course assessment. Each program demonstrates core JavaScript skills, such as working with arrays, objects, custom functions, modules, and HTTP servers.

---

## 📁 Project Files

1. **maxPurchase.js** – Calculates the most expensive keyboard and mouse combination within a given budget.
2. **uniqueLanguages.js** – Extracts unique programming languages from a dataset.
3. **maxNumber.js** – Rearranges digits in a number to create the largest possible number.
4. **decimalToHex.js** – Converts a decimal number to hexadecimal using recursion and switch-case logic.

> 📎 `Data.js` is required for **uniqueLanguages.js**.

---

## ⚙️ Setup Instructions

### Step 1: Initialize Node Project

Run the following command to initialize the project:
```bash
npm init 
```

### Step 2: Install Required Packages

Install Express:
```bash
npm install express
```

Install Nodemon for automatic server restarts during development:
```bash
npm install nodemon
```

---

## 🧪 Testing with Postman

For APIs involving Express routes, Postman can be used for testing. Please ensure **Postman** is installed on your PC.

Download Postman: [https://www.postman.com/downloads](https://www.postman.com/downloads)

### Example Endpoint:
```
GET http://localhost:3001/stu/2021ICT03
```

---

## 🧾 Program Summaries

### 1️⃣ `maxPurchase.js`
**Purpose**: Calculate the maximum spendable amount when choosing a keyboard and mouse without exceeding the given budget.

📌 **Sample Output**:
```
Budget =60
keyboard Prices =[40, 50, 60]
mouse Prices =[5, 8, 12]
Result: 58
```

🖼️ **Screenshot of Console Output**
> _Upload screenshot here_

---

### 2️⃣ `uniqueLanguages.js`
**Purpose**: Extract a list of all unique programming languages known by the students listed in `Data.js`.

📌 **Sample Output**:
```
["Java", "JS", "C++", "Python", "C", "Go", "C#", "JavaScript", "Swift", "R", "SQL", "Ruby", "Bash"]
```

🖼️ **Screenshot of Console Output**
> _Upload screenshot here_

---

### 3️⃣ `maxNumber.js`
**Purpose**: Rearranges digits of a number to form the largest number possible.

📌 **Sample Output**:
```
maxNumber(215) = 521
maxNumber(1093) = 9310
maxNumber(8754) = 8754
```

🖼️ **Screenshot of Console Output**
> _Upload screenshot here_

---

### 4️⃣ `decimalToHex.js`
**Purpose**: Converts a decimal number to hexadecimal using a recursive function and switch-case logic.

📌 **Sample Output**:
```
convertToHex(215) = D7
convertToHex(10) = A
convertToHex(4115) = 1013
```

🖼️ **Screenshot of Console Output**
> _Upload screenshot here_

---

## ▶️ Running the Programs

Run each `.js` file using Node.js:
```bash
node filename.js
```

For example:
```bash
node maxPurchase.js
```

---
