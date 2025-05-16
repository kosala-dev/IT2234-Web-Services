
# MongoDB Compass ICAE 02

---

## ✅ Task 1: Create Collections and Insert Documents

1. **Create Database**: `school`
2. **Create Collections**: `students` and `grades`
3. **Insert Documents**: Use the JSON documents from the provided data.

<img width="959" alt="1" src="https://github.com/user-attachments/assets/06c715de-c76c-4276-926f-6955115a9c5c" />
<img width="959" alt="2" src="https://github.com/user-attachments/assets/3c747c5e-8ccd-4463-a35c-fb22df628935" />
<img width="959" alt="insert stu1" src="https://github.com/user-attachments/assets/c16bb6d2-17aa-47dd-af6f-1efceb807084" />
<img width="959" alt="insert stu2" src="https://github.com/user-attachments/assets/eff6b4fd-7577-4fb9-96c3-7e45eda996c8" />
<img width="959" alt="insert stu3" src="https://github.com/user-attachments/assets/4ccb36ff-7896-497f-a227-b8362952d984" />
<img width="959" alt="insert stu4" src="https://github.com/user-attachments/assets/817b614a-d057-4ff1-86c3-5a8d9f2fd612" />

---

## ✅ Task 2: Show Both Collections in Table View

> In MongoDB Compass: Select the collection → Click on **Table** tab (next to JSON tab).  

---
<img width="959" alt="table view 1" src="https://github.com/user-attachments/assets/7e720535-2a7d-48f3-8f3a-a3cf8b9915d8" />
<img width="958" alt="table view 2" src="https://github.com/user-attachments/assets/683eac39-f395-48e6-8df2-0ee7e3d0a9d5" />


## ✅ Task 3: Find Female Students (Display Only Name, Age, Gender)

```js
db.students.find(
  { gender: "Female" },
  { name: 1, age: 1, gender: 1, _id: 0 }
)
```
<img width="959" alt="3" src="https://github.com/user-attachments/assets/9ea6d007-e4ea-4ecc-972d-0f36fadbc2d0" />

---

## ✅ Task 4: Students Younger Than 22 and Enrolled After 2020

```js
db.students.find(
  { age: { $lt: 22 }, enrollmentYear: { $gt: 2020 } }
)
```
<img width="959" alt="4" src="https://github.com/user-attachments/assets/a4e79508-81a7-4cab-a7a2-a3f78aa3a240" />

---

## ✅ Task 5: All Grades for "Alice Johnson"

```js
db.students.aggregate([
  { $match: { name: "Alice Johnson" } },
  {
    $lookup: {
      from: "grades",
      localField: "_id",
      foreignField: "studentId",
      as: "grades"
    }
  },
  {
    $project: {
      name: 1,
      grades: 1,
      _id: 0
    }
  }
])

```
<img width="958" alt="5" src="https://github.com/user-attachments/assets/0883629a-aa1b-44e1-8dbc-d9318cdc4691" />

---

## ✅ Task 6: Count Students Who Studied "Mathematics"

```js
db.students.countDocuments({ major: "Mathematics" })
```
<img width="959" alt="6" src="https://github.com/user-attachments/assets/3af8f99a-6ef9-4237-9a5b-089b0dd6eed2" />

---

## ✅ Task 7: Students With Grades in Term "Fall 2022"

```js
db.grades.aggregate([
  { $match: { term: "Fall 2022" } },
  {
    $lookup: {
      from: "students",
      localField: "studentId",
      foreignField: "_id",
      as: "student"
    }
  },
  { $unwind: "$student" },
  {
    $project: {
      _id: 0,
      subject: 1,
      score: 1,
      term: 1,
      studentName: "$student.name",
      studentEmail: "$student.email",
      studentMajor: "$student.major",
      studentAge: "$student.age"
    }
  }
])

```
<img width="941" alt="7" src="https://github.com/user-attachments/assets/c04014ae-e4aa-4eed-9ab6-8813258a7947" />

---

