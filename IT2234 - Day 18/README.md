
# Project Management API

This is a simple Node.js + Express.js + MongoDB project that provides a RESTful API for managing projects, tasks, and users. The app is modularized with reusable middleware and services.

---

## 📂 Project Structure

```
.
├── index.js                      # Main entry point
├── middlewares/
│   └── errorhandler.js          # Centralized error handling middleware
├── models/
│   ├── Project.js               # Mongoose schema for Project
│   ├── Task.js                  # Mongoose schema for Task
│   └── User.js                  # Mongoose schema for User
├── routes/
│   ├── projectroute.js          # Routes for project endpoints
│   ├── taskroute.js             # Routes for task endpoints
│   └── userroute.js             # Routes for user endpoints
└── services/
    └── genericFindService.js    # Reusable find function for GET endpoints
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js and npm
- MongoDB (local or cloud)

### Installation

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Ensure MongoDB is running locally at `mongodb://localhost:27017/ProjectDB` or update the connection string in `index.js`.
4. Start the server:

```bash
node index.js
```

---

## 🧩 API Endpoints

All responses are in JSON format.

| Method | Endpoint        | Description               |
|--------|------------------|---------------------------|
| GET    | `/Project`       | Get all projects          |
| GET    | `/Task`          | Get all tasks             |
| GET    | `/User`          | Get all users             |

---

## 🧠 File Descriptions

1. **`index.js`**  
   Main app setup. Connects to MongoDB, registers middleware and API routes.

2. **`errorhandler.js`**  
   Express error-handling middleware. Ensures consistent error responses.

3. **`Project.js`**  
   Mongoose model for project entities with `name`, `description`, and `manager`.

4. **`Task.js`**  
   Mongoose model for tasks with title, project and user references, and due date.

5. **`User.js`**  
   Mongoose model for users with basic auth fields like `name`, `email`, and `password`.

6. **`projectroute.js`**  
   Route for handling project-related API requests.

7. **`taskroute.js`**  
   Route for task-related requests.

8. **`userroute.js`**  
   Route for user-related requests.

9. **`genericFindService.js`**  
   Reusable service function to handle `Model.find()` calls and return JSON responses.

---

## 🧑‍💻 Author

Kosala Madushan

---
