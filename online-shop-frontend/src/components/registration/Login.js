import React, {useState} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'

export const Login = () => {
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[loginSuccess, setLoginSuccess] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/customers/${email}`)
      if(response.data.message === "Not Found"){
        setLoginSuccess(false);
        toast.error("Customer Not Found. Please Sign Up.");
      } else {
        navigate('/shop');
      }
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="login">
      <h1>Login</h1>
      <input
        type="text"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      <Link to="/signup"> <h5 style={{color: "black"}}>Click here to Sign Up</h5></Link>
      <ToastContainer />
    </div>
  );
};
