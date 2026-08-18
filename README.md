# Todo Application – Full Stack

A simple full-stack Todo Application built using **React** for the frontend and **Spring Boot** for the backend. The application uses REST APIs to create, retrieve, and delete Todo items.

## 🚀 Tech Stack

### Frontend
- React
- Vite
- JavaScript
- Tailwind CSS

### Backend
- Java
- Spring Boot
- Spring Web
- Spring Data JPA
- Hibernate
- Maven

### Database
- H2 Database

## 📁 Project Structure

```text
ToDoApplicationfullsatack/
│
├── Frontend/
│   └── TodoFrontend/
│       ├── src/
│       ├── public/
│       ├── package.json
│       └── package-lock.json
│
├── backend_todolist/
│   └── backend_todolist/
│       ├── src/
│       ├── pom.xml
│       ├── mvnw
│       └── mvnw.cmd
│
├── .gitignore
└── README.md

🏗️ Application Architecture
React Frontend
      │
      │ HTTP REST API
      ▼
Spring Boot Backend
      │
      ├── Controller
      │
      ├── Service
      │
      └── Repository
              │
              ▼
          H2 Database
🗄️ H2 Database

This project uses H2 Database for development.

Example configuration:

spring.datasource.url=jdbc:h2:mem:tododb
spring.datasource.driver-class-name=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=


spring.jpa.hibernate.ddl-auto=update


spring.h2.console.enabled=true
spring.h2.console.path=/h2-console
H2 Console

After starting the backend, open:

http://localhost:8080/h2-console

Use the JDBC URL configured in your application.properties.

For example:

JDBC URL: jdbc:h2:mem:tododb
Username: sa
Password:

If you are using an H2 in-memory database, the data may be cleared when the application restarts.

⚙️ Backend Setup

Navigate to the backend:

cd backend_todolist/backend_todolist

Run the application using Maven Wrapper:

Windows
mvnw.cmd spring-boot:run
Git Bash / Linux / macOS
./mvnw spring-boot:run

Backend:

http://localhost:8080
🌐 Frontend Setup

Open another terminal and navigate to the frontend:

cd Frontend/TodoFrontend

Install dependencies:

npm install

Start the React development server:

npm run dev

Frontend:

http://localhost:5173
🔗 REST API
Create Todo
POST /api/todos

Example request:

{
  "title": "Learn React"
}
Get All Todos
GET /api/todos
Get Todo by ID
GET /api/todos/{id}
Delete Todo
DELETE /api/todos/{id}

Update the endpoint paths in this README if your controller uses different mappings.

🔄 Frontend and Backend Flow
User
 │
 ▼
React UI
 │
 │ HTTP Request
 ▼
Spring Boot REST Controller
 │
 ▼
Todo Service
 │
 ▼
Todo Repository
 │
 ▼
H2 Database
 │
 ▼
Response
 │
 ▼
React UI
🧪 API Testing

The backend APIs can be tested using:

Postman
Thunder Client
Insomnia

Example:

GET http://localhost:8080/api/todos
🔌 Frontend–Backend Integration

The React frontend communicates with the Spring Boot backend through REST APIs.

Example using Axios:

import axios from "axios";


const API_URL = "http://localhost:8080/api/todos";


export const getTodos = () => {
  return axios.get(API_URL);
};


export const createTodo = (todo) => {
  return axios.post(API_URL, todo);
};


export const deleteTodo = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
🛠️ Run the Complete Application
1. Start Backend
cd backend_todolist/backend_todolist
mvnw.cmd spring-boot:run
2. Start Frontend

Open a new terminal:

cd Frontend/TodoFrontend
npm install
npm run dev

Then open:

http://localhost:5173
📌 Current Project Status
Completed
 Spring Boot backend setup
 H2 database configuration
 Todo Entity
 Todo Repository
 Todo Service
 Todo REST Controller
 Create Todo
 Get All Todos
 Get Todo by ID
 Delete Todo
 React frontend
 Frontend–Backend API integration
Planned
 Update Todo
 Mark Todo as completed
 Validation
 Exception handling
 Search and filtering
 User authentication
 JWT authentication
 PostgreSQL/MySQL integration
 Docker deployment
👨‍💻 Author

Vijay Khetre

Java Spring Boot | React | Full Stack Developer

📄 License

This project is created for learning and development purposes.



Then save this as the **root**:


```text
ToDoApplicationfullsatack/
└── README.md

and commit it:

git add README.md
git commit -m "docs: add project README"
git push
