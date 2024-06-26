import React, { FC, useEffect, useState , useRef} from 'react';
import Menu from '../../components/Menu/Menu';
import { getCerbosClient } from '../../lib/Cerbos';
interface UserDetails {
    username: string;
    role: string,
    password: string
  }
const Contact: FC = () => {
    let userDetails: UserDetails | null = JSON.parse(localStorage.getItem('userDetails') || '');
    const initialized = useRef(false);
    const [data, setData] = useState(Boolean);
    console.log("Data...",data);
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
            kind: "contact",
            id: "1",
            },
            action: "read",
        }); // => true
        console.log(contactQueryPlan); 
        setData(contactQueryPlan); 
        
    }
    useEffect(() => {
        if (!initialized.current) {
            initialized.current = true
            checkAccess();
        }
      }, []); // Pass an empty array to only call the function once on mount.
      if (data) {
        return (
            <>
              <Menu></Menu>
              <div className='container'>
                <h2>Contact</h2>
                <table >
                    <thead >
                        <tr >
                        <th >Name</th>
                        <th >Mobile</th> 
                        </tr>
                    </thead>
                    <tbody >
                        <tr >
                        <td >Ajay</td>
                        <td >252522552355</td> 
                        </tr>
                        <tr >
                        <td >Suresh</td>
                        <td >6543463663634</td> 
                        </tr>
                        <tr >
                        <td >Priya</td>
                        <td >14112441241412</td> 
                        </tr>
                        
                    </tbody>
                </table>
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

export default Contact;