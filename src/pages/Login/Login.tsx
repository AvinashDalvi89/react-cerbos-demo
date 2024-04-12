import React from 'react';
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const userLoginDetails: {[key: string]: string} =  {
    "Ajay": "supersecret",
    "Suresh": "password1234",
    "Priya": "Feg@123",
    "Garry": "pwd123"
  };
  const doLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
        username: { value: string };
        password: { value: string };
      };
      const userRoleDetails: Record<string, string> = {
        "Ajay": "admin",
        "Suresh": "user",
        "Priya": "user",
        "Garry": "marketing"
      };
      const username = target.username.value; // typechecks!
      const password = target.password.value; // typechecks! 
      const data = {
        username : username,
        password: password,
        role: userRoleDetails[username]
      }
    if(username in userLoginDetails && userLoginDetails[username] === password){
      localStorage.setItem('userDetails', JSON.stringify(data));
      console.log("Login successful");
      navigate('/dashboard');
    }
    else{
      console.log("Please check login details");
    }
  }
  return(
    <>
    <div className='container'>
      <h2>Login Page</h2>
      <div className='login'>
        <form action="" onSubmit={(e) => doLogin(e)}>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="text" name="password" id="password" />
          </div>
          <button type="submit"  >Login</button>
        </form>
      </div>
    <table >
      <thead >
        <tr >
          <th >Username</th>
          <th >Password</th>
          <th >Role</th>
        </tr>
      </thead>
      <tbody >
        <tr >
          <td >Ajay</td>
          <td >supersecret</td>
          <td >admin</td>
        </tr>
        <tr >
          <td >Suresh</td>
          <td >password1234</td>
          <td >user</td>
        </tr>
        <tr >
          <td >Priya</td>
          <td >Feg@123</td>
          <td >user</td>
        </tr>
        <tr >
          <td >Garry</td>
          <td >pwd123</td>
          <td >Markt</td>
        </tr>
      </tbody>
    </table>
    </div></>
  );
}

