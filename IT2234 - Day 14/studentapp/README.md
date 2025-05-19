
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
```
![Degree Route Screenshot](./screenshots/degree_get.png)
```

### 📸 Student Routes
```
![Student Route Screenshot](./screenshots/student_get.png)
```

---

## 🔗 Direct Download

You can download the project directly from the following link:  
**[Click here to download the ZIP](./SchoolAPI.zip)**

---