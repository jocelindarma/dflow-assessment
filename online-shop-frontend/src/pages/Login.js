import React, {useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './Login.css'

export const Login = () => {
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.get('http://localhost:3000/customers', {
        email: email,
        password: password,
      });
      console.log(response);
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
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Link to="/shop"><button>Submit</button></Link>
      <Link to="/signup"> <h5 style={{color: "black"}}>Click here to Sign Up</h5></Link>
    </div>
  );
};
