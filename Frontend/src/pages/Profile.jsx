import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css'

const Profile = () => {
  const navigate=useNavigate();
  const [image,setImage]=useState(null);
  const [posts,setPosts]=useState([]);

  const token=localStorage.getItem("token");

const handleLogOut=()=>{
  localStorage.removeItem("token");
  navigate('/');
}

const handleUpload=async(e)=>{
  e.preventDefault();
  if(!image) return;

  const formData=new FormData();
  formData.append("image",image);
  try {
    await axios.post("http://localhost:5000/api/posts",formData,{
      headers:{
        "content-Type":"multipart/form-data",
        Authorization:`Bearer ${token}`
      }
    })
    setImage(null);
    fetchPosts();
    alert("uploaded succesfully");
    } catch (error) {
    console.log("upload error",error);
  }
}

const fetchPosts=async()=>{
  try{
    const res=await axios.get("http://localhost:5000/api/posts",{
      headers:{Authorization:`Bearer ${token}`},
    })
    setPosts(res.data);
  }catch(error){
    console.log("fetchng posts failed",err);
  }
};

useEffect(()=>{
fetchPosts();
},[])


  return (
    <div>
      <h1>Profile Page</h1>
      <form onSubmit={handleUpload}>
        <input type="file" onChange={(e)=>setImage(e.target.files[0])} accept='image/*'/>
        <button type="submit">Upload</button>
      </form>
      <button onClick={handleLogOut}>Logout</button>
      <div>
        {posts.map((post)=>
          <div key={post._id}>
             <img src={post.imageUrl}/>
          </div>
        )}
      </div>
    </div>
  )
}

export default Profile
