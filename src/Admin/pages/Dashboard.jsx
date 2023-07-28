import React, { useEffect,useState } from 'react';
import Sidebar from '../components/Sidebar'
import './Dashboard.css';
import {Link }from 'react-router-dom'
import axios from 'axios';
import { logout } from './userSlice';
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from './userSlice';
const Dashboard = () => {
    const user=useSelector(selectUser)
        const dispatch = useDispatch();
        const handleLogout = (e) => {
          e.preventDefault();
          dispatch(logout());
        };
  
    
    return (
        <div className="dash">

<h1 className="welcomeadmin">Welcome {user.name}</h1>
          
            <Link to='/Viewfeedback'>
                <button classname='app-animated'>viewfeedback</button>
            </Link>
                <Sidebar/>

                
              
               
        </div>
    );
};

export default Dashboard;