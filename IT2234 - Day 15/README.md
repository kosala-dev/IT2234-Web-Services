
# University Course Management API

This is a Node.js REST API for managing university-related data including courses, degrees, and students. The API uses Express.js as the web framework and MongoDB with Mongoose for data modeling.

## Project Structure

- **models/**
  - `Course.js` — Defines the course schema and model.
  - `Degree.js` — Defines the degree schema and model.
  - `Student.js` — Defines the student schema and model with references to degrees and courses.

- **routes/**
  - `courseRoute.js` — REST endpoints to get all courses and create a new course.
  - `degreeRoute.js` — REST endpoints to get degrees and query by ID or code.
  - `studentRoute.js` — REST endpoints to get students, including populated degree and enrolled courses info.

- **index.js** — Main entry point. Sets up Express server, connects to MongoDB, and mounts routes.

---

## Setup Instructions

1. **Install dependencies:**

   ```bash
   npm install express mongoose
   npm init
   ```

2. **Run MongoDB:**

   Make sure MongoDB is running locally on `mongodb://localhost:27017`.

3. **Start the server:**

   ```bash
   node index.js
   ```
   <img width="959" alt="database connected" src="https://github.com/user-attachments/assets/f6bc23cd-a31f-4341-8e7f-babebd87bf99" />


4. **Access the API endpoints:**

   - Courses: `GET /Course`, `POST /Course`
   - Degrees: `GET /Degree`, `GET /Degree/:id`, `GET /Degree/:code/:cid`
   - Students: `GET /Student`, `GET /Student/course`, `GET /Student/:id`, `GET /Student/:code/:cid`

---

## Model Details

### Course Model (`models/Course.js`)

- Fields: `code` (String), `name` (String), `credits` (Number), `description` (String)
- Example data: 
  - IT2234 - Practical for web services (3 credits)
  - IT2214 - Practical for operating systems (4 credits)

<img width="959" alt="Courses in mongodb" src="https://github.com/user-attachments/assets/a7d9f147-4310-451a-b6bd-606e423a7d1e" />


### Degree Model (`models/Degree.js`)

- Fields: `_id` (String), `name` (String), `credits` (Number), `duration` (Number, in years), `faculty` (String)
- Example data:
  - FAS2000ICT - Bachelor of Information Technology, 120 credits, 3 years, Faculty of Applied Science
 
<img width="959" alt="degrees in mongodb" src="https://github.com/user-attachments/assets/49b3c521-5fbe-474d-8ec5-46f2f14918ec" />


### Student Model (`models/Student.js`)

- Fields: `_id` (String), `name` (String), `date_of_birth` (Date), `gender` (String), `degreeId` (ref to Degree), `enroled_courses` (array of refs to Course)
- Example data:
  - Student ID: 2021ict01, Name: Peter Kolins, Degree ID: FASFAS2000ICT
 
<img width="959" alt="students in mongodb" src="https://github.com/user-attachments/assets/46f1a69c-697c-42c9-9edd-cebe28fca8ca" />


---

## API Endpoints

### Courses

- `GET /Course` — Get all courses

<img width="959" alt="Courses" src="https://github.com/user-attachments/assets/f78dd06b-4d5b-40df-a33e-f81b3b31845e" />

- `POST /Course` — Add a new course

  <img width="959" alt="Courses created" src="https://github.com/user-attachments/assets/6e5db0b0-f06c-477a-bc4c-9ce350dc3ec8" />


### Degrees

- `GET /Degree` — Get all degrees

<img width="959" alt="All degrees" src="https://github.com/user-attachments/assets/22690781-5517-4e1e-a803-bf92f363ed40" />

  
- `GET /Degree/:id` — Get degree by ID

<img width="959" alt="Degree by id" src="https://github.com/user-attachments/assets/0a735cb0-70c0-4c0e-84cf-a761a5249fbb" />


- `GET /Degree/:code/:cid` — Query degree by code (custom route, requires code and cid params)

### Students

- `GET /Student` — Get all students
- 
  <img width="959" alt="All students" src="https://github.com/user-attachments/assets/a1fd2859-83e1-47d6-bb74-36f3a327e3b3" />

- `GET /Student/course` — Get students with populated degree and enrolled courses
  
- `GET /Student/:id` — Get student by ID
- 
  <img width="959" alt="Student By id" src="https://github.com/user-attachments/assets/99d35242-2005-4aed-8a67-493159808ec8" />

- `GET /Student/:code/:cid` — Query students by code and cid (custom route)

---

## Notes

- MongoDB database name: `detailsdb`
- The data models use Mongoose references (`ref`) to link degrees and courses to students.
- Make sure to handle saving initial data or seed data as needed for testing.

---
