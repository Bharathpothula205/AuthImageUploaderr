const express=require('express');
const cors=require("cors")
require('dotenv').config();
const connectDB =require('./Configs/ConnectDb');
const authRoutes=require('./Routes/authRoutes')
const postRoutes=require('./Routes/postRoute')

const app=express();
connectDB();

//Middlewares
app.use(express.json());
app.use(cors());

//Routes
app.use('/api/auth',authRoutes)
app.use('/api/posts',postRoutes)

const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server is Online at PORT ${PORT}`));


