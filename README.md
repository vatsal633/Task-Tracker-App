<h1>task tracker app</h1>
<span>tech stack: react js node js express js mongodb tailwind css</span>

deploy url: https://task-tracker-app-theta.vercel.app/

 Features
✅ User Authentication (Signup/Login) using JWT

📁 Each user can create up to 4 projects

 Tasks management per project:
Create Task
Read Task
Update Task Status
Delete Task
Track task progress using status: Not Complete, In Progress, Completed
Tracks task creation and completion dates
Multi-user support


git clone https://github.com/your-username/task-tracker.git
cd task-tracker

cd backend
npm install

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
