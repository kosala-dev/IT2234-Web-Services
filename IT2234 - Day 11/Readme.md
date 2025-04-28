# 📂 MongoDB Degrees Collection Tutorial

---

## 1. Insert Multiple Degree Records

```javascript
db.degrees.insertMany([
  {
    "name": "BIT",
    "duration": 3
  },
  {
    "name": "Bsc in Applied Mathematics",
    "duration": 3
  },
  {
    "name": "Bsc in Environmental Science",
    "duration": 4
  },
  {
    "name": "Bsc in Computer Science",
    "duration": 4
  }
])
```

✅ Inserted 4 degree records successfully.

---

## 2. Delete a Single Degree

```javascript
db.degrees.deleteOne({ _id: ObjectId('680ee99768e381a796b3ebbb') })
```

✅ Deletes a single degree matching the specified `_id`.

---

## 3. Use Projection to View Specific Fields

```javascript
db.degrees.find().projection(['name', 'duration'])
```

✅ Only `name` and `duration` fields will be shown in the output.

---

## 4. Display Results Nicely (Pretty)

```javascript
db.degrees.find({}, { name: 1, _id: 0 }).pretty()
```

✅ Displays only the `name` field neatly without showing the `_id`.

---

## 5. Delete Multiple Degrees

```javascript
db.degrees.deleteMany({ duration: { $lt: 4 } })
```

✅ Deletes all degrees with a `duration` less than 4 years.

---

## 6. Update One Degree Record

```javascript
db.degrees.updateOne(
  { _id: ObjectId('680eef7e6fed053af3f24379') },
  { $set: { name: 'Bachelor in IT', duration: 3 } }
)
```

✅ Updates the name and duration of a single degree record.

---

## 7. Update Skills Array in Students Collection

```javascript
db.Students.updateOne(
  { regNo: '2021IT001' },
  { $push: { skills: 'PHP' } }
)
```

✅ Adds `PHP` to the `skills` array of the specified student.

---

## 8. Update Many Degrees

```javascript
db.degrees.updateMany(
  { duration: { $gte: 4 } },
  { $inc: { duration: 1 } }
)
```

✅ Increments `duration` by 1 year for all degrees that were originally 4 years or more.

---
