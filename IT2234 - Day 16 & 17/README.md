# Employee Management API

This project is a Node.js API using Express and Mongoose to manage employees, departments, projects, and ETFs data stored in MongoDB.

---

## Files Overview

### Models (`/models`)
1. **Department.js**  
   Defines the Department schema and model.

2. **Employee.js**  
   Defines the Employee schema and model.

3. **ETF.js**  
   Defines the ETF schema and model.

4. **Project.js**  
   Defines the Project schema and model.

### Routes (`/routes`)
5. **departmentRoute.js**  
   Express routes for departments including employee queries and employee counts.

6. **employeeRoute.js**  
   Express routes for employees including project count queries.

7. **etfRoute.js**  
   Express routes for ETF data.

8. **projectRoute.js**  
   Express routes for project data.

### Server
9. **index.js**  
   Sets up the Express server and connects the routes to MongoDB.

---

## Setup Instructions

1. **Place files in the correct folders**  
   - Models go into `/models` folder  
   - Routes go into `/routes` folder  
   - `index.js` in the root project folder

2. **Install dependencies**

```bash
npm install express mongoose
npm init
```

3. **Run MongoDB**

Make sure MongoDB is running locally on `mongodb://localhost:27017/EmployeeinfoDB`.

4. **Start the server**

```bash
node index.js
```
<img width="959" alt="Database connection" src="https://github.com/user-attachments/assets/09f56ce9-da6e-42a5-ad70-7050055fce1d" />


5. **Test API endpoints**

Use tools like Postman or curl to test endpoints like:

- `GET /Department`

  <img width="959" alt="All Department " src="https://github.com/user-attachments/assets/647c9bc4-51f4-45c5-93be-48144f2acf4e" />

- `GET /Department/emp/:did`

  <img width="959" alt="Give department id and get employees" src="https://github.com/user-attachments/assets/7855c522-760d-4e73-aaed-2534e0c29cea" />

- `GET /Employee`

  <img width="959" alt="All Employee" src="https://github.com/user-attachments/assets/a259f235-736c-43f7-abfb-5100a9ec0461" />

- `GET /Employee/procount`

<img width="959" alt="Employee project count" src="https://github.com/user-attachments/assets/80318638-b56a-4d77-ab93-505114c200eb" />


- `GET /ETF`

  <img width="959" alt="All ETF" src="https://github.com/user-attachments/assets/d6f3c0cc-c56e-4ab0-9726-a96d3ffc8720" />

- `GET /Project`

  <img width="959" alt="All Projects" src="https://github.com/user-attachments/assets/23674a46-9231-4a74-b4b0-40853e40f69b" />

---

## Notes

- The schema references between models use string IDs.  
- Some demo data is added on model creation (e.g., IT department, sample employee).  
- Routes use Mongoose `.populate()` and aggregation queries to fetch related data.

---
