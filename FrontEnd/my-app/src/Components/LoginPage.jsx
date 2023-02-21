import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [username, SetUsername] = useState();
  const [password, SetPassword] = useState();
  const naviageAdmin = useNavigate();
  const usernameChanger = (event) => {
    const result = event.target.value;
    SetUsername(result);
  };
  const passwordChanger = (event) => {
    const result = event.target.value;
    SetPassword(result);
  };
  const handleAdminLogin = () => {
    console.log({ username, password });
   if(username==="admin",password==="admin"){
     naviageAdmin("/admin/users");
   }
  };

  return (
    <div>
      <center>
        <form onSubmit={handleAdminLogin}>
          <label htmlFor="username">Enter Your Id</label>
          <input type="text" onChange={usernameChanger} value={username} />
          <br />
          <label htmlFor="password">password</label>
          <input type="password" onChange={passwordChanger} value={password} />
          <button type="submit">Login</button>
        </form>
      </center>
    </div>
  );
}
