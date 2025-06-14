
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
    ![BookTableView](https://github.com/user-attachments/assets/19b22244-0aac-408d-b287-b1e1bf476218)

   - `GET /Student` — List all students
    ![StudentsTableView](https://github.com/user-attachments/assets/7492c888-8aa1-4664-9fcd-bfffb66f35b9)

   - `GET /Borrow` — List all borrows
    ![BorrowsTableView](https://github.com/user-attachments/assets/87404b91-d1ad-4617-88c8-3355139757ac)

   - `GET /Book/filter/:genre` — Filter books by genre
   ![Question 2 Output](https://github.com/user-attachments/assets/ca0b09b1-8195-4e86-98d7-f2127b32ab5c)

   - `GET /Student/filter/:year` — Filter students by year
   ![Question 3 Output](https://github.com/user-attachments/assets/d3fcf12e-4d84-47a8-bfe8-8f26e0f63f40)

   - `GET /common/:genre` - Common code for Filter books by genre & Filter students by year
   ![Question 4 1 Output](https://github.com/user-attachments/assets/7ec570d5-5a6d-4228-b079-535da2698549)
   ![Question 4 2 Output](https://github.com/user-attachments/assets/b952d72b-db27-48e2-92c9-dbab7e49143d)


   - `POST /Borrow/borrow` — Borrow a book (requires JSON body with `studentId` and `bookId`)
   ![Question 5 1 Output](https://github.com/user-attachments/assets/3a8cdc74-4b9b-45fb-8995-286db3dc1435)
   ![Question 5 2 Output](https://github.com/user-attachments/assets/f6eff8d3-746e-45bb-90ac-33d769bf1766)
   ![Question 5 3 Output](https://github.com/user-attachments/assets/056987e6-dde2-4ef3-bc39-9217dd512c67)
   ![Question 5 4 Output](https://github.com/user-attachments/assets/e690e5a7-2aa5-4758-8b77-eb6e510268e3)
   
---

## Example: Borrowing a Book

Send a POST request to `/Borrow/borrow` with JSON body:

```json
{
  "studentId": "student_id_here",
  "bookId": "book_id_here"
}
```
![Question 5 1 Output](https://github.com/user-attachments/assets/18b02c8d-7b94-4ceb-944f-e5432fcb4f20)

---

## Notes

- The `_id` for `Book` and `Student` models are strings, so ensure you use consistent IDs.
- The app connects to MongoDB database `LibAppDB`.
- The server runs on port `3001`.

---

## Author

Kosala Madushan
