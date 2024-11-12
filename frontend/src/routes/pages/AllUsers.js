import React, { useEffect, useState } from 'react'
import SummaryApi from '../../common'
import { toast } from 'react-toastify'
import moment from 'moment'
import { MdModeEditOutline } from "react-icons/md";
import ChangeUserRole from '../components/ChangeUserRole';


const AllUsers = () => {
    const [AllUsers,setAllUsers] = useState([])
    const [openUpdateRole,setOpenUpdateRole] = useState(false)
    const [updateUserDetails,setUpdateUserDetails] = useState ({
        email :  "",
        name : "",
        role :"",
        _id : ""
    })

    const fetchAllUsers = async () => {
        const fetchdata = await fetch(SummaryApi.allUser.url,{
            method : SummaryApi.allUser.method,
            credentials : 'include'
        })

        const dataResponse = await fetchdata.json()

        if(dataResponse.success){
            setAllUsers(dataResponse.data)
        }

        if(dataResponse.error){
            toast.error(dataResponse.message)
        }
        
        console.log(dataResponse);
        
    }

    useEffect(()=>{
        fetchAllUsers()
    },[])

  return (
    <div className='bg-white pb-4 content-center h-full'>
      
        <table className='w-full userTable'>
            <thead className='bg-black text-white'>
                <tr>
                <th>Sr.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Created Date</th>
                <th>action</th>
               </tr>
            </thead>
            <tbody>
                {
                    AllUsers.map((el,index) => {
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{el?.name}</td>
                                <td>{el?.email}</td>
                                <td>{el?.role}</td>
                                <td>{moment(el?.createdAt).format('LL')}</td>
                                <td>
                                    <button className='bg-green-100 p-2 rounded-full cursor-pointer hover:bg-green-500  hover:text-white'
                                     onClick={()=>{
                                     
                                     setUpdateUserDetails(el)  
                                     setOpenUpdateRole(true)
                                     }}>
                                            
                                        < MdModeEditOutline/>
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        {
            openUpdateRole && (

                <ChangeUserRole
                 onClose={()=>setOpenUpdateRole(false)}
                  name={updateUserDetails.name}
                  email={updateUserDetails.email}
                  role={updateUserDetails.role}
                  userId={updateUserDetails._id}
                  callFunc={fetchAllUsers}
                  />
            )
        }

    </div>
    
  )
}

export default AllUsers
