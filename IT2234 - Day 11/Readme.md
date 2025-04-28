# 📂 MongoDB Degrees Collection Tutorial
---
## Create new collection called "Degrees" in unidb database

![create collection](https://github.com/user-attachments/assets/2781ffe4-100b-4768-9cdc-c56c85f79dcd)

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

![insert data](https://github.com/user-attachments/assets/b63884e6-6426-42ff-94b4-f7284ba9cd2e)
![inserted data](https://github.com/user-attachments/assets/169dd89b-af14-43e7-ac38-8c77bf8295c2)

---

## 2. Delete a Single Degree

```javascript
db.degrees.deleteOne({ _id: ObjectId('680ee99768e381a796b3ebbb') })
```

✅ Deletes a single degree matching the specified `_id`.

![delete one](https://github.com/user-attachments/assets/bcc5e5bf-b3af-42c1-9c4f-257a7efbc0cc)

---

## 3. Use Projection to View Specific Fields

```javascript
db.degrees.find().projection(['name', 'duration'])
```

✅ Only `name` and `duration` fields will be shown in the output.

![projection](https://github.com/user-attachments/assets/4869a7f4-9d62-4dd8-a50e-0659546b4770)

---

## 4. Display Results Nicely (Pretty)

```javascript
db.degrees.find({}, { name: 1, _id: 0 }).pretty()
```

✅ Displays only the `name` field neatly without showing the `_id`.

![pretty](https://github.com/user-attachments/assets/bb7593e7-f3db-4fe6-873b-8ca3254ecfa7)

---

## 5. Delete Multiple Degrees

```javascript
db.degrees.deleteMany({ duration: { $lt: 4 } })
```

✅ Deletes all degrees with a `duration` less than 4 years.

![delete many](https://github.com/user-attachments/assets/1b172839-f3d9-486a-b300-0d2479adfe10)

---

## 6. Update One Degree Record

```javascript
db.degrees.updateOne(
  { _id: ObjectId('680eef7e6fed053af3f24379') },
  { $set: { name: 'Bachelor in IT', duration: 3 } }
)
```

✅ Updates the name and duration of a single degree record.

![update one](https://github.com/user-attachments/assets/a50b7042-2a33-4dea-b85c-077ae2767d13)

---

## 7. Update Skills Array in Students Collection

```javascript
db.Students.updateOne(
  { regNo: '2021IT001' },
  { $push: { skills: 'PHP' } }
)
```

✅ Adds `PHP` to the `skills` array of the specified student.

![update one in array](https://github.com/user-attachments/assets/71aa1875-2cbc-49b0-84b9-302c6d39cd44)

---

## 8. Update Many Degrees

```javascript
db.degrees.updateMany(
  { duration: { $gte: 4 } },
  { $inc: { duration: 1 } }
)
```

✅ Increments `duration` by 1 year for all degrees that were originally 4 years or more.

![update many](https://github.com/user-attachments/assets/ce7938c2-7f56-4d28-91a0-02cdc7d1662d)

---
## End
