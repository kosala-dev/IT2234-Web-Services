# Express.js Student API

This project demonstrates a simple REST API using Express.js to retrieve student data.

## Prerequisites
- Install [Node.js](https://nodejs.org/)
- Install [Postman](https://www.postman.com/) to test API requests

## Setup Instructions

### Step 1: Initialize the Node.js Project
Run the following command in your terminal to initialize a new Node.js project:
```sh
npm init 
```

### Step 2: Install Required Packages
Install Express and Nodemon:
```sh
npm install express
npx install nodemon
```

## API Endpoints

### 1. Get All Students
**Request:**
```
GET /
```
**Response:**
Returns all students.

<img width="959" alt="Postman 1" src="https://github.com/user-attachments/assets/c2da0fa2-1d3a-4906-9252-35bb50a1959f" />

---

### 2. Get Third Student
**Request:**
```
GET /third-student
```
**Response:**
Returns the information of the third student in the list.

<img width="959" alt="Postman 1" src="https://github.com/user-attachments/assets/a7fc3061-15ec-4bbc-8798-9b075eaeea0a" />


---

### 3. Find Student by Registration Number
**Request:**
```
GET /stu/:id
```
**Example:**
```
GET /stu/2021ICT36
```
**Response:**
Returns the student with the specified registration number.

<img width="959" alt="Postman 2" src="https://github.com/user-attachments/assets/342bb736-92c4-45fe-8802-3cb229b80794" />

If the preffered registration number is not present a 404 error message is displayed

<img width="959" alt="Postman 3 error" src="https://github.com/user-attachments/assets/89b83738-f1a8-416a-8e1e-8ddb78db25b3" />

---

### 4. Filter Students by Gender
**Request:**
```
GET /stu/gender/:gen
```
**Example:**
```
GET /stu/gender/Male
```
**Response:**
Returns all students matching the specified gender.

<img width="959" alt="Postman 4" src="https://github.com/user-attachments/assets/2c738d18-72e1-4b50-860c-54b9ec41cbbc" />


---

## Running the Server
1. Open a terminal and navigate to the project folder.
2. Start the server using Nodemon:
   ```sh
   npx nodemon .\Example.js
   ```
3. Open Postman and test the API endpoints listed above.

## Expected Console Output
```sh
Server is running on: http://localhost:3001
```
<img width="959" alt="CMD" src="https://github.com/user-attachments/assets/49623127-a4cd-4a71-8d86-ce5e5294077a" />


## Contributions
Feel free to modify and improve the API. Open a pull request with your changes!

