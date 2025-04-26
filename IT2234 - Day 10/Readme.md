# 🛠 MongoDB Tutorial

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

<img width="956" alt="new connection" src="https://github.com/user-attachments/assets/21f1d855-5a92-4151-be4c-666725a7f642" />

---

## 3. Create a New Database

Once connected, create your first database.

- **Database Name:** `unidb`
- **Collection Name:** `Students`

Then click **Create Database**.

✅ You have now created:
- Database ➔ `unidb`
- Collection ➔ `Students`

<img width="959" alt="database" src="https://github.com/user-attachments/assets/47a48919-9807-4e02-8415-25846a97a0d2" />

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
<img width="959" alt="insert one" src="https://github.com/user-attachments/assets/79bc8446-ce27-49a9-8d82-b310c79332ba" />

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
<img width="959" alt="insert many" src="https://github.com/user-attachments/assets/991b66eb-4649-4d43-935c-87eb95b9ced2" />

---

## 5. Query Data

You can perform different types of **find** queries:

### ➡️ Find All Male Students

```javascript
db.Students.find({ "gender": "male" })
```
<img width="959" alt="male students" src="https://github.com/user-attachments/assets/661af5fc-1396-4110-a142-969d1635c28f" />

---

### ➡️ Find Only One Male Student

```javascript
db.Students.findOne({ "gender": "male" })
```
<img width="959" alt="find one" src="https://github.com/user-attachments/assets/19349e8a-e2c4-455b-8dd5-88fb2b3dd951" />

---

### ➡️ Find Students Older Than 20

```javascript
db.Students.find({ age: { $gt: 20 } })
```
<img width="959" alt="elder than 20" src="https://github.com/user-attachments/assets/7224f994-9b01-49fb-b8ec-c613fc214fc3" />

---

### ➡️ Find Students Who Know MongoDB

```javascript
db.Students.find({ skills: { $in: ["MongoDB"] } })
```
<img width="957" alt="who knows mongo" src="https://github.com/user-attachments/assets/9adc47ad-abce-4259-a889-2afad35c0c1b" />

---

### ➡️ Find Students Who Don't Know MongoDB

```javascript
db.Students.find({ skills: { $nin: ["MongoDB"] } })
```
<img width="959" alt="who dont knows mongo" src="https://github.com/user-attachments/assets/b0a86acf-b4da-4211-8b81-45f80ddf490a" />

---

### ➡️ Sort All Students by Age (Ascending)

```javascript
db.Students.find().sort({ "age": 1 })
```
<img width="959" alt="sort by age" src="https://github.com/user-attachments/assets/f7800871-faa2-442b-be9e-8ae6e821da60" />

---

### ➡️ Find ICT Students and Sort by Age (Ascending)

```javascript
db.Students.find({ "degree": "ICT" }).sort({ "age": 1 })
```
<img width="959" alt="sort age who are in ict" src="https://github.com/user-attachments/assets/2b63d80d-1a82-4a98-9b5a-9dfa77bf3349" />

---


