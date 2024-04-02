import React, { FC, MouseEvent } from 'react';
import { useNavigate } from "react-router-dom";

const Menu: FC = () => {
    const navigate = useNavigate();
    const doLogout = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        let userDetails: string | null = localStorage.getItem('userDetails');
        if(userDetails){
            localStorage.setItem("userDetails",""); 
            navigate('/login');
        }
    }
  return(
    <>
    <nav className="navbar">
        <ul className="nav-list">
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/admin">Admin</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
        <div className="rightNav">
             
            <button className="btn btn-sm" onClick={doLogout}>Logout</button>
        </div>
    </nav>
    </>
   

  );

}

export default Menu;