
# Course Management REST API

This is a simple RESTful API built with **Node.js**, **Express**, and **MongoDB (Mongoose)** that allows you to manage university courses. It supports full CRUD operations, including fetching by course ID or course code.

## 📁 Project Structure

```
project-folder/
├── models/
│   └── Course.js
├── routes/
│   └── courseRoute.js
├── index.js
└── README.md
```

---

## 🚀 Features

- Create a new course
- Retrieve all courses
- Retrieve course by ID or course code
- Update an existing course
- Delete a course

---

## 🧑‍💻 Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

---

## 📦 Installation

1. **Install dependencies:**
   ```bash
   npm init
   npm install express
   npm install mongoose
   ```

2. **Start MongoDB**  
   Make sure MongoDB is running locally on port `27017`.

3. **Run the index:**
   ```bash
   node index.js
   ```

   The server will start on `http://localhost:3001`

---

## 🔗 API Endpoints

All endpoints are prefixed with `/Course`

| Method | Endpoint               | Description                        |
|--------|------------------------|------------------------------------|
| GET    | `/Course/`             | Get all courses                    |
| GET    | `/Course/:id`          | Get a course by MongoDB ObjectId   |
| GET    | `/Course/code/:cid`    | Get a course by course code        |
| POST   | `/Course/`             | Create a new course                |
| PUT    | `/Course/:id`          | Update an existing course          |
| DELETE | `/Course/:id`          | Delete a course                    |

---

## 📥 Sample Course Document

```json
{
  "code": "IT2234",
  "name": "Practical for Web Services",
  "credits": 3,
  "description": "Build a rest API with nodeJS Technology"
}
```

---

## 📝 Notes

- Ensure MongoDB is running on `mongodb://localhost:27017/unidb`.
- Port `3001` is used by default for the Express server.

---

## 📬 Sample Postman Requests

Here are example requests you can try in [Postman](https://www.postman.com/) to test your API. Use `http://localhost:3001` as the base URL.

---

### 🔹 1. Create a Course

- **Method**: `POST`
- **URL**: `http://localhost:3001/Course/`
- **Headers**:
  ```
  Content-Type: application/json
  ```
- **Body (raw JSON)**:
  ```json
  {
    "code": "IT2234",
    "name": "Practical for Web Services",
    "credits": 3,
    "description": "Build a REST API with NodeJS"
  }
  ```

---

### 🔹 2. Get All Courses

- **Method**: `GET`
- **URL**: `http://localhost:3001/Course/`

---

### 🔹 3. Get Course by ID

- **Method**: `GET`
- **URL**: `http://localhost:3001/Course/<replace-with-id>`

---

### 🔹 4. Get Course by Code

- **Method**: `GET`
- **URL**: `http://localhost:3001/Course/code/IT2234`

---

### 🔹 5. Update a Course

- **Method**: `PUT`
- **URL**: `http://localhost:3001/Course/<replace-with-id>`
- **Headers**:
  ```
  Content-Type: application/json
  ```
- **Body (raw JSON)**:
  ```json
  {
    "code": "IT2234",
    "name": "Updated Course Name",
    "credits": 4,
    "description": "Updated course description"
  }
  ```

---

### 🔹 6. Delete a Course

- **Method**: `DELETE`
- **URL**: `http://localhost:3001/Course/<replace-with-id>`

---
