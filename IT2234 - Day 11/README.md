
# Bookshop MongoDB Setup

This document provides MongoDB shell commands to set up and interact with a `bookshop` database.

---

## 1. Create Database and Collection
```js
use bookshop
db.createCollection("books")
```

---

## 2. Insert Books
```js
db.books.insertMany([
  {
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "published_year": 1937,
    "genres": ["Fantasy", "Adventure"],
    "pages": 310,
    "available": true,
    "rating": 4.8
  },
  {
    "title": "1984",
    "author": "George Orwell",
    "published_year": 1949,
    "genres": ["Dystopian", "Political Fiction"],
    "pages": 328,
    "available": true,
    "rating": 4.7
  },
  {
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "published_year": 1960,
    "genres": ["Southern Gothic", "Drama"],
    "pages": 281,
    "available": false,
    "rating": 4.6
  },
  {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "published_year": 1925,
    "genres": ["Tragedy"],
    "pages": 180,
    "available": true,
    "rating": 4.4
  },
  {
    "title": "Brave New World",
    "author": "Aldous Huxley",
    "published_year": 1932,
    "genres": ["Science Fiction", "Dystopian"],
    "pages": 311,
    "available": true,
    "rating": 4.2
  }
])
```

---

## 3. Queries

- **Find all books**  
  ```js
  db.books.find()
  ```

- **Find books published after 1950**  
  ```js
  db.books.find({ published_year: { $gt: 1950 } })
  ```

- **Find available books**  
  ```js
  db.books.find({ available: true })
  ```

- **Find books in the "Dystopian" genre**  
  ```js
  db.books.find({ genres: "Dystopian" })
  ```

- **Books published after 1950 and rated > 4.0**  
  ```js
  db.books.find({ published_year: { $gt: 1950 }, rating: { $gt: 4.0 } })
  ```

- **Project only title and author fields**  
  ```js
  db.books.find({}, { title: 1, author: 1, _id: 0 })
  ```

---

## 4. Updates

- **Set `available` to `false` for "1984"**  
  ```js
  db.books.updateOne({ title: "1984" }, { $set: { available: false } })
  ```

- **Increase rating of "Brave New World" by 0.1**  
  ```js
  db.books.updateOne({ title: "Brave New World" }, { $inc: { rating: 0.1 } })
  ```

- **Add "Classic" genre to "The Great Gatsby"**  
  ```js
  db.books.updateOne({ title: "The Great Gatsby" }, { $push: { genres: "Classic" } })
  ```

---

## 5. Sorting and Deletion

- **Sort by `published_year` ascending**  
  ```js
  db.books.find().sort({ published_year: 1 })
  ```

- **Sort by `rating` descending**  
  ```js
  db.books.find().sort({ rating: -1 })
  ```

- **Delete books with rating < 4.5**  
  ```js
  db.books.deleteMany({ rating: { $lt: 4.5 } })
  ```
