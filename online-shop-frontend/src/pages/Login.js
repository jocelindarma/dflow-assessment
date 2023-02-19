import React, {useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Login = () => {
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try{
      await axios.post("http://localhost:3000/customers/", {
        email, password
      })
    } catch(e){ 
      console.log(e);
    }
  }

  return (
    <div className="login">
      <h1>Login</h1>

      <form action="POST">
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          name=""
          id=""
        />
        <input
          type="email"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          name=""
          id=""
        />
        <input type="submit" onClick={submit}/>
      </form>

      <br />
      <p> OR </p>
      <br />

      <Link to="/signup"> Sign Up</Link>
    </div>
  );
};
