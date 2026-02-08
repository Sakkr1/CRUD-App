# React CRUD App 🧩

A simple **CRUD (Create, Read, Update, Delete)** application built with **React** and powered by **json-server** as a fake RESTful API.  
This project is created to practice real-world frontend development and RESTful API concepts.

---

## 🚀 Features

- Display all items (GET)
- Add new item (POST)
- Update existing item (PUT)
- Delete item (DELETE)
- Uses RESTful API principles
- Clean and simple UI
- Beginner-friendly project

---

## 🛠️ Technologies Used
- React
- JavaScript (ES6+)
- Axios
- json-server
- HTML
- CSS
- Git & GitHub

---

## ⚙️ How to Run the Project

### 1️⃣ Clone the repository
in terminal:
git clone https://github.com/Sakkr1/CRUD-App.git
cd REPO_NAME

### 2️⃣ Install dependencies
in terminal:
npm install

### 3️⃣ Install json-server (if not installed globally)
in terminal:
npm install -g json-server

### 4️⃣ Create db.json (next to package.json file)
and add in it :
{
  "products": []
}

### 5️⃣ Run json-server
in terminal:
json-server --watch db.json --port 5000

API will be available at:
http://localhost:5000/products

The port(5000) may change 

### 6️⃣ Run the React application
in terminal:
npm run start

👨‍💻 Author

Mostafa Abdallah
Frontend Developer (React.js)
GitHub: https://github.com/Sakkr1

