import React, {useState } from "react";
import "./loginform.css";
import {Link} from "react-router-dom";
import "./Signup"
import { useNavigate } from "react-router-dom";
import axios from "axios";


import undraw from './undraw.svg'
import { login } from "../redux/UserSlice";
import { useDispatch } from "react-redux";




const LoginForm = () =>{
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      login(
        {
          name: username
        }
      )
    )
    try {
      const response = await axios.post('http://127.0.0.1:8181/api/v1/auth/authenticate', {
        "username":username,
        "email": email,
        "password": password
      })
        .then((response) => {
          console.log(response.data);
          localStorage.setItem('token', response.data.token);
          console.log(localStorage.getItem('token'));
        })

      alert("Login Successful.");
         navigate("/dashboard");
        
        }
        catch(error){
          alert("Invalid Password");
        }
      }
      const isButtonDisabled = !email || !password;
 

 
    return (
      <div id="adminMain">
      <form className="admin-box" onSubmit={handleSubmit}>
        <br></br><br></br>
          <div className="log-box">
    
        <h3>Login</h3>
        <br></br>
          <p className="admin-ask"></p>
          <input onChange={(e)=>{setUsername(e.target.value)}} value={username} className="admin-inp" type="username" label="Admin username" placeholder="Enter username" required/>
          <br></br>
          <br></br>
          <input onChange={(e)=>{setEmail(e.target.value)}} value={email} className="admin-inp" type="email" label="Admin email" placeholder="Enter email" required/>
          <br></br>
          <br></br>
          <input onChange={(e)=>{setPassword(e.target.value)}} value={password} className="admin-inp" type="password" label="Password" placeholder="Enter password" required/>
          <br></br>
          <br></br>
          <input type="checkbox" id="admin-myCheckbox" name="myCheckbox" />
          <label for="myCheckbox">&nbsp;&nbsp;Keep me signed in</label>
          <br></br>
          <button type="submit"  id="admin-login-button" variant="contained" >
              Log In 
          </button>

          </div>
          
      </form>
      <div className="admin-image">

          <img className="undraw" src={undraw} alt="Company-img"></img>
      </div>

  </div>
    )
}
export default LoginForm