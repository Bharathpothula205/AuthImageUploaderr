const express=require('express');
const cors=require("cors")
require('dotenv').config();


const app=express();


//Middlewares
app.use(express.json());
app.use(cors());

//Routes



const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server is Online at PORT ${PORT}`));


