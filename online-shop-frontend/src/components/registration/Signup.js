import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePostRequest = async () => {
    try {
      const response = await axios.post("http://localhost:3000/customers", {
        email: email,
        password: password,
      });
      setIsSuccess(true);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signup">
      {!isSuccess ? (
        <div className="signup">
          <h1>Sign Up</h1>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button onClick={handlePostRequest}>Submit</button>
        </div>
      ) : (
        <h1>Registration Successful!</h1>
      )}
      <Link to="/">
        {" "}
        <h5 style={{ color: "black" }}>Back to Login</h5>
      </Link>
    </div>
  );
};
