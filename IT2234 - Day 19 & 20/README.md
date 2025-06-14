
# Library Management API

This project is a simple Library Management API built using Node.js, Express, and MongoDB with Mongoose ODM. It allows managing books, students, and borrowing transactions.

---

## Project Structure

- **models/**
  - `Book.js` — Mongoose schema for books
  - `Student.js` — Mongoose schema for students
  - `Borrow.js` — Mongoose schema for borrowing records

- **routes/**
  - `bookRoute.js` — Routes for book operations (list all books, filter by genre)
  - `studentRoute.js` — Routes for student operations (list all students, filter by year)
  - `borrowRoute.js` — Route to borrow a book

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

---

## Setup Instructions

1. **Install dependencies:**

   ```bash
   npm install express mongoose
   npm install init
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
   - `POST /Borrow/borrow` — Borrow a book (requires JSON body with `studentId` and `bookId`)

---

## Example: Borrowing a Book

Send a POST request to `/Borrow/borrow` with JSON body:

```json
{
  "studentId": "student_id_here",
  "bookId": "book_id_here"
}
```

---

## Notes

- The `_id` for `Book` and `Student` models are strings, so ensure you use consistent IDs.
- The app connects to MongoDB database `LibAppDB`.
- The server runs on port `3001`.

---

## Author

Kosala Madushan