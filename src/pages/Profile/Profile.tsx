import React, { FC } from 'react';
import Menu from '../../components/Menu/Menu';

interface UserDetails {
  username: string;
}

const Profile: FC = () => {
  let userDetails: UserDetails | null = JSON.parse(localStorage.getItem('userDetails') || '');
  const userRoleDetails: Record<string, string> = {
    "Ajay": "admin",
    "Suresh": "user",
    "Priya": "user",
    "Garry": "user"
  };
  console.log(userDetails);

  return (
    <>
      <Menu></Menu>
      <div className='container'>
        <h2>My Profile</h2>
        <div className='profile'>
          <label> Name: </label> <label>{userDetails?.username}</label><br></br><br></br>
          <label> Role: </label><label></label>
        </div>
      </div>
    </>
  );
}

export default Profile;