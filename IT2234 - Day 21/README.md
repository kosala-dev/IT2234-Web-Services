
# Library Management API

This project is a simple Library Management API built using Node.js, Express, and MongoDB with Mongoose ODM. It allows managing books, students, and borrowing transactions.

---

## Project Structure

- **models/**
  - `Book.js` — Mongoose schema for books
  - `Student.js` — Mongoose schema for students
  - `Borrow.js` — Mongoose schema for borrowing records
  - `User.js` — Mongoose schema for users (authentication)

- **routes/**
  - `bookRoute.js` — Routes for book operations (list all books, filter by genre)
  - `studentRoute.js` — Routes for student operations (list all students, filter by year)
  - `borrowRoute.js` — Route to borrow a book
  - `userRoute.js` — Routes for user registration and login

- **service/**
  - `service.js` — Contains common service functions like filtering data and borrow logic

- `index.js` — Main application entry point, sets up Express server and routes

---

## Features

- Add and list books and students (via MongoDB collections)
- Filter books by genre
- Filter students by year
- Borrow a book with validation:
  - Student existence check
  - Book availability check
  - Maximum 2 unreturned books per student
  - Updates available copies on borrowing
- User authentication:
  - Register new users with hashed passwords
  - Login existing users with JWT token generation

---

## Setup Instructions

1. **Install dependencies:**

   ```bash
   npm install express mongoose
   npm init
   ```

2. **Run MongoDB locally:**

   Ensure MongoDB is running on your local machine on default port (27017).

3. **Start the server:**

   ```bash
   node index.js
   ```

4. **Access endpoints:**

  - `GET /Book` — List all books

  - `GET /Book/filter/:genre` — Filter books by genre

  - `GET /Student` — List all students

  - `GET /Student/filter/:year` — Filter students by year

  - `POST /Borrow/borrow` — Borrow a book (JSON body with studentId and bookId)

  - `POST /User/register` — Register a new user (JSON with username, email, password)

  - `POST /User/login` — Login user (JSON with username, password), returns JWT token
---

## Example: Borrowing a Book

Send a POST request to `/Borrow/borrow` with JSON body:

```json
{
  "studentId": "student_id_here",
  "bookId": "book_id_here"
}
```

User Registration and Login
Register:- POST `/User/register` with:

```json
{
  "username": "yourusername",
  "email": "youremail@example.com",
  "password": "yourpassword"
}
```

Login:- POST `/User/login` with:

```json
{
  "username": "yourusername",
  "password": "yourpassword"
}
```

---

## Notes

- The `_id` for `Book` and `Student` models are strings, so ensure you use consistent IDs.
- The app connects to MongoDB database `LibAppDB`.
- The server runs on port `3001`.

---

## License

MIT License
