
# Bookshop MongoDB

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
![1](https://github.com/user-attachments/assets/22cac2a0-8888-4361-aeaf-d3f042b5e8b8)

---

## 3. Queries

- **Find all books**  
  ```js
  db.books.find()
  ```
![2](https://github.com/user-attachments/assets/50b937e0-3db7-4282-9db5-95e960cdd004)
![3](https://github.com/user-attachments/assets/19315662-e23e-4a20-a1e9-a8d242359805)
![4](https://github.com/user-attachments/assets/90738a7c-b06d-4a02-8841-141f7fadf7ef)


- **Find books published after 1950**  
  ```js
  db.books.find({ published_year: { $gt: 1950 } })
  ```
![5](https://github.com/user-attachments/assets/0bd80d19-602f-4483-97d1-80c52167d950)

  
- **Find available books**  
  ```js
  db.books.find({ available: true })
  ```
![6](https://github.com/user-attachments/assets/159148e3-0ee3-462a-af89-0e8f9953ccec)
![7](https://github.com/user-attachments/assets/6d9ae793-1fb6-4c5e-aaa0-1a0ee697d1bf)


- **Find books in the "Dystopian" genre**  
  ```js
  db.books.find({ genres: "Dystopian" })
  ```
  ![8](https://github.com/user-attachments/assets/f4328031-711b-4b62-9302-2c920dd8c469)


- **Books published after 1950 and rated > 4.0**  
  ```js
  db.books.find({ published_year: { $gt: 1950 }, rating: { $gt: 4.0 } })
  ```
  <img width="425" alt="9" src="https://github.com/user-attachments/assets/c09d44b3-f282-4d46-b194-f70d1e5630f7" />

- **Project only title and author fields**  
  ```js
  db.books.find({}, { title: 1, author: 1, _id: 0 })
  ```
<img width="415" alt="10" src="https://github.com/user-attachments/assets/93484a2e-b7ac-4eef-8a26-d27cbed9d051" />

---

## 4. Updates

- **Set `available` to `false` for "1984"**  
  ```js
  db.books.updateOne({ title: "1984" }, { $set: { available: false } })
  ```
  <img width="416" alt="11" src="https://github.com/user-attachments/assets/0fdcd978-2351-401f-940b-ae48e882affe" />


- **Increase rating of "Brave New World" by 0.1**  
  ```js
  db.books.updateOne({ title: "Brave New World" }, { $inc: { rating: 0.1 } })
  ```
  <img width="370" alt="12" src="https://github.com/user-attachments/assets/385e07c3-62fe-45d2-a3e0-28f01f3141e0" />


- **Add "Classic" genre to "The Great Gatsby"**  
  ```js
  db.books.updateOne({ title: "The Great Gatsby" }, { $push: { genres: "Classic" } })
  ```
  <img width="496" alt="13" src="https://github.com/user-attachments/assets/059d95d7-6db5-4099-a69b-f65ca87da07c" />

---

## 5. Sorting and Deletion

- **Sort by `published_year` ascending**  
  ```js
  db.books.find().sort({ published_year: 1 })
  ```
  <img width="719" alt="14" src="https://github.com/user-attachments/assets/fe1d7802-9481-4401-aa74-5efe808ab389" />


- **Sort by `rating` descending**  
  ```js
  db.books.find().sort({ rating: -1 })
  ```
  <img width="721" alt="15" src="https://github.com/user-attachments/assets/52e96d2a-9b76-4f96-a208-d81987edfd72" />


- **Delete books with rating < 4.5**  
  ```js
  db.books.deleteMany({ rating: { $lt: 4.5 } })
  ```
<img width="413" alt="16" src="https://github.com/user-attachments/assets/7d9c47fc-3748-4461-b5a1-52f8f0ca596d" />
