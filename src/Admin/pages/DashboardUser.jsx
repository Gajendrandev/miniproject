import React from 'react';
import SidebarUser from '../components/SidebarUser'
import './DashboardUser.css';
import { Link } from 'react-router-dom';
import { logout } from './userSlice';
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from './userSlice';
const Dashboard = () => {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <>
    <SidebarUser/>
      <div>
      <header class="header">
    
    
<nav class="nav-items">
  
    <a href="/">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
          <Link to='/FeedbackformMicro'>
    <a href="#">Feedback</a>
            </Link>

    
</nav>

  </header>
  </div>
        
          
          <div class="intro24">
    <p >INFORMATION IS WEALTH</p>
    <div className='color'>
      
          <h1 >Welcome {user.name}</h1>
          </div>
      <p>"Unleashing the power of technology."</p>
      <br></br>
    {/* <button onclick="Login">Login</button> */}
    
   
    {/* <button className='signupbutton'>HR Login<img className="upward"src={CallMadeIcon}></img></button> */}
    </div>
                
                
              
               
       
        </>
  );
};

export default Dashboard;