
# SchoolAPI

This is a simple RESTful API built using **Node.js**, **Express**, and **MongoDB (Mongoose)** to manage data for a basic school system including **Courses**, **Degrees**, and **Students**.

---

## 📁 Project Structure

```bash
.
├── models
│   ├── Course.js
│   ├── Degree.js
│   └── Student.js
├── routes
│   ├── courseRoute.js
│   ├── degreeRoute.js
│   └── studentRoute.js
├── index.js
├── README.md
```

---

## 📦 Installation

1. Download the project ZIP from the link below.
2. Extract the files to your local directory.
3. Install dependencies:
   ```bash
   npm init
   npm install express
   npm installmongoose
   ```
4. Make sure MongoDB is running on your system and available at:
   ```
   mongodb://localhost:27017/SchoolAPI
   ```
5. Start the server:
   ```bash
   node index.js
   ```
<img width="959" alt="1" src="https://github.com/user-attachments/assets/e1face3c-4713-41c4-b9c4-d64d86f7f12e" />

---

## 🚀 API Endpoints

### 🎓 Courses

| Method | Endpoint             | Description                  |
|--------|----------------------|------------------------------|
| GET    | `/course`            | Get all courses              |
| GET    | `/course/:id`        | Get a course by MongoDB ID   |
| GET    | `/course/code/:cid`  | Get a course by course code  |
| POST   | `/course`            | Add a new course             |
| PUT    | `/course/:id`        | Update a course              |
| DELETE | `/course/:id`        | Delete a course              |

### 🎓 Degrees

| Method | Endpoint   | Description         |
|--------|------------|---------------------|
| GET    | `/degree`  | Get all degrees     |

### 👨‍🎓 Students

| Method | Endpoint   | Description                         |
|--------|------------|-------------------------------------|
| GET    | `/student` | Get all students with degree info   |

---

## 📬 Postman Tests

### 📸 Course Routes
```
Already done in IT2234 - Day 13. 
```

### 📸 Degree Routes

<img width="959" alt="2" src="https://github.com/user-attachments/assets/79f404ef-8fc0-401a-ac3a-bcb91dde002a" />
<img width="959" alt="3" src="https://github.com/user-attachments/assets/cade6f99-c761-4395-8f6c-ec2330796da3" />

```

### 📸 Student Routes
```
<img width="959" alt="4" src="https://github.com/user-attachments/assets/cc34ee56-c016-410c-b417-b43a89f84a89" />

---
