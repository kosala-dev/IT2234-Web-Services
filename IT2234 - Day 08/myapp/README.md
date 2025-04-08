# Student Management API 📚

Welcome to the **Student Management API** built using **Node.js** and **Express**! This simple API helps manage student data, allowing you to fetch lists of students or individual student details using their registration number. It's designed to be easy to use, lightweight, and highly extensible.

## 🚀 Project Structure

The project is structured as follows:

StudentData.js // Contains a sample list of students

StudentService.js // Provides services to fetch student data

StudentRoute.js // API routes for handling requests

index.js // Sets up the server and connects routes

markdown
Copy
Edit

### `StudentData.js`
Contains an array of student objects, each with:
- Registration Number
- Name
- Age
- Gender

### `StudentService.js`
Provides the following functions:
- `getStudents1()`: Returns a list of all students.
- `getStudents2(id)`: Fetches a specific student by their registration number.

### `StudentRoute.js`
Defines the routes for the API:
- `/student/`: Gets all students.
- `/student/:id`: Fetches a student by their registration number.

### `index.js`
Sets up the Express server and attaches the routes to handle incoming requests.

---

## 📥 Getting Started

### Prerequisites

To run this project, make sure you have the following installed:
- **Node.js** (v16.0 or higher): [Download Node.js](https://nodejs.org/)
- **Postman.exe**

### Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd <repository-folder>
    ```

2. Install dependencies:
    ```bash
    npm install express
    ```

### Running the Server

To start the server, run:

```bash
node index.js
Your server will now be running on port 3001. You should see the following message in the terminal:

pgsql
Copy
Edit
Server is running on 3001
📡 API Endpoints
1. Get all students
Endpoint: GET /student/

Response: A list of all students in JSON format.

Example Response:

ss

2. Get a student by registration number
Endpoint: GET /student/:id

Parameters:

id: Registration number of the student (e.g., 2021ICT36)

Response: A student's details in JSON format.

Example Response:

ss

🚨 Error Handling
404 Not Found: If no student is found with the provided registration number.

Response: Sorry, No Data Found

ss

500 Internal Server Error: If the server encounters an issue.

