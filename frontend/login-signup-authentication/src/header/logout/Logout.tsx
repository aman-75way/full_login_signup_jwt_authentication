import  { useEffect } from 'react'
import { useContext } from 'react';
import { UserContext } from '../../store/auth';
import Home from '../Home/Home';


export const Logout = () => {

  const {user , setUser , setUserData,  removeTokenFromLocalStorage} = useContext(UserContext);


  useEffect(()=>{
       setUser({token : ""});
       setUserData({userDetails : ""});
       localStorage.removeItem("token");
  } , [])


  return (
    <>
      <Home />
    </>
  )
}
