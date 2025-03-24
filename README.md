AuthImageUploader
A MERN stack app with JWT auth, image uploads to Cloudinary, and protected profile route. Users can register, login, upload images, and view their posts. Built with React, Node.js, Express, MongoDB, Tailwind CSS, and tested via Postman.

🌐 MERN Stack Profile Upload App This is a full-stack web application built with the MERN stack (MongoDB, Express, React, Node.js), featuring:

✅ JWT Authentication using jsonwebtoken and bcrypt

🖼 Image Uploads to Cloudinary

🔒 Protected Routes based on login status

📄 Profile Page where users can upload and view their own photos

🌍 RESTful API tested with Postman

💨 Styled with Tailwind CSS and bootstrapped using Vite

✨ Features User Registration and Login with hashed passwords

Token-based session handling stored in localStorage

Protected /profile route accessible only when logged in

Upload images directly from the profile page to Cloudinary

Fetch and display uploaded images using map() from MongoDB

Backend validation and error handling

🛠️ Tech Stack Frontend: React, React Router, Axios, Tailwind CSS

Backend: Node.js, Express, MongoDB, Mongoose, Cloudinary SDK

Authentication: JWT, bcryptjs

Tools: Vite, Postman

🚀 How to Run Backend:

bash Copy Edit cd backend npm install npm start Frontend:

bash Copy Edit cd frontend npm install npm run dev
