import React, { FC } from 'react'; 
import { getCerbosClient } from '../../lib/Cerbos';
import { useEffect } from 'react';
interface UserDetails {
    username: string;
  }
const Admin: FC = () => {
    let userDetails: UserDetails | null = JSON.parse(localStorage.getItem('userDetails') || '');

    useEffect(() => {
        checkAccess(userDetails);
     }, []); // Pass an empty array to only call the function once on mount.

  return (
    <> 
      <div className='container'>
        <h2>Admin</h2>
      </div>
    </>
  );
}

export async function checkAccess(userDetails: UserDetails | null) {
    const cerbos = getCerbosClient();
    let role;
    if(userDetails === null){
        role = "Demo";
    }
    else{
        role = "afafs";
    }
    const contactQueryPlan = await cerbos.isAllowed({
        principal: {
          id: "demoUserID",
          roles: ['admin'],
          attr: { },
        },
        resource: {
          kind: "admin",
          id: "1",
        },
        action: "read",
      }); // => true
     console.log(contactQueryPlan);
}

export default Admin;