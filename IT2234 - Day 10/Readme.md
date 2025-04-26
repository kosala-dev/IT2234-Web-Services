# 🛠 MongoDB 

---

## 1. Install and Open MongoDB Compass
- Download MongoDB Compass from [here](https://www.mongodb.com/try/download/compass) and install it.
- Open the application after installation.

---

## 2. Connect to the MongoDB Server

When you open Compass, you'll first see the **New Connection** window.

- In the **URI** field, enter:
  ```
  mongodb://localhost:27017/
  ```
- Then click **Save & Connect**.

✅ Now you’re connected to your MongoDB server!

---

## 3. Create a New Database

Once connected, create your first database.

- **Database Name:** `unidb`
- **Collection Name:** `Students`

Then click **Create Database**.

✅ You have now created:
- Database ➔ `unidb`
- Collection ➔ `Students`

---

## 4. Insert Documents into the Collection

Now, open the `Students` collection and start inserting documents.

### ➡️ Insert a Single Student

```javascript
db.Students.insertOne({
    "regno": "2021ICT39",
    "name": "Temu",
    "age": 25,
    "degree": "ICT",
    "gpa": 2.99,
    "skills": ["35", "MongoDB", "Node"],
    "gender": "female"
})
```

---

### ➡️ Insert Multiple Students

```javascript
db.Students.insertMany([
    {
        "regno": "2021ICT60",
        "name": "Renu",
        "age": 25,
        "degree": "ICT",
        "gpa": 2.50,
        "skills": ["35", "MongoDB", "Node"],
        "gender": "female"
    },
    {
        "regno": "2021ICT89",
        "name": "Shini",
        "age": 19,
        "degree": "AMC",
        "gpa": 4.00,
        "skills": ["35", "MongoDB", "Node"],
        "gender": "female"
    }
])
```

---

## 5. Query Data

You can perform different types of **find** queries:

### ➡️ Find All Male Students

```javascript
db.Students.find({ "gender": "male" })
```

---

### ➡️ Find Only One Male Student

```javascript
db.Students.findOne({ "gender": "male" })
```

---

### ➡️ Find Students Older Than 20

```javascript
db.Students.find({ age: { $gt: 20 } })
```

---

### ➡️ Find Students Who Know MongoDB

```javascript
db.Students.find({ skills: { $in: ["MongoDB"] } })
```

---

### ➡️ Find Students Who Don't Know MongoDB

```javascript
db.Students.find({ skills: { $nin: ["MongoDB"] } })
```

---

### ➡️ Sort All Students by Age (Ascending)

```javascript
db.Students.find().sort({ "age": 1 })
```

---

### ➡️ Find ICT Students and Sort by Age (Ascending)

```javascript
db.Students.find({ "degree": "ICT" }).sort({ "age": 1 })
```

---


