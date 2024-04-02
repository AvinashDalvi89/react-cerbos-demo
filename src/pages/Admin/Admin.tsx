import React, { FC, useState } from 'react'; 
import { getCerbosClient } from '../../lib/Cerbos';
import { useEffect } from 'react';
interface UserDetails {
    username: string;
    role: string,
    password: string
  }
const Admin: FC = () => {
    let userDetails: UserDetails | null = JSON.parse(localStorage.getItem('userDetails') || '');
    const [data, setData] = useState(Boolean);
    
    async function checkAccess() {
        const cerbos = getCerbosClient();
        let role; 
        if(userDetails === null){
            role = "Demo";
        }
        else{
            role = userDetails.role;
        }
        const contactQueryPlan = await cerbos.isAllowed({
            principal: {
            id: "demoUserID",
            roles: [role],
            attr: { },
            },
            resource: {
            kind: "admin",
            id: "1",
            },
            action: "read",
        }); // => true
        console.log(contactQueryPlan); 
        setData(contactQueryPlan);
        return contactQueryPlan;
        
    }
    useEffect(() => {
       checkAccess();
     }, [userDetails]); // Pass an empty array to only call the function once on mount.
 
     if (data) {
        return (
            <> 
              <div className='container'>
                <h2>Admin Access</h2>
                
              </div>
            </>
          );
     }
     else{
        return (
            <> 
              <div className='container'>
                <h2>Sorry don't have access to this page</h2>
                
              </div>
            </>
          );
     }
 
}


export default Admin;
 
 

