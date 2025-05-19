
# Course Management REST API (screen shots available)

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
   <img width="959" alt="1" src="https://github.com/user-attachments/assets/3e8bfb4a-324f-41d8-8716-d7c6f597feae" />

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
<img width="959" alt="2" src="https://github.com/user-attachments/assets/2ca73dc9-12ce-4b08-9bee-af0bdf15cb21" />

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
<img width="959" alt="3" src="https://github.com/user-attachments/assets/faee3602-b82d-49f6-9d99-744e1383c4f5" />

---

### 🔹 2. Get All Courses

- **Method**: `GET`
- **URL**: `http://localhost:3001/Course/`

<img width="955" alt="4" src="https://github.com/user-attachments/assets/1aac682b-3851-4c05-b4be-3d7de9e87173" />

---

### 🔹 3. Get Course by ID

- **Method**: `GET`
- **URL**: `http://localhost:3001/Course/<replace-with-id>`

<img width="954" alt="5" src="https://github.com/user-attachments/assets/61ba469d-d62a-4fea-99da-aeaa2f04fa24" />

---

### 🔹 4. Get Course by Code

- **Method**: `GET`
- **URL**: `http://localhost:3001/Course/code/IT2234`

<img width="959" alt="6" src="https://github.com/user-attachments/assets/e33ddb73-e29c-4dad-8ac5-65ad4c14e4df" />

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
<img width="959" alt="7" src="https://github.com/user-attachments/assets/3c5c37b0-e245-4026-8c54-1ddc998ed8bc" />

---

### 🔹 6. Delete a Course

- **Method**: `DELETE`
- **URL**: `http://localhost:3001/Course/<replace-with-id>`

<img width="959" alt="8" src="https://github.com/user-attachments/assets/1bf30f21-d35e-42d0-856c-b4141bbc55e9" />

---
