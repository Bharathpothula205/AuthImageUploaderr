import React,{useEffect} from 'react'
import {Routes,Route,useLocation} from "react-router-dom"
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Profile from './pages/Profile'
import './App.css';
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== "/profile") {
      const tok=localStorage.getItem("token");
      if(!tok){
        console.log("token is not there anymore")
      }else{
        console.log("still localStorage contains token and token is",tok); 
      }
     
    }
  }, [location]);
  return (
    <div className='mar'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route element={<ProtectedRoute/>}>
        <Route path='/profile' element={<Profile/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
