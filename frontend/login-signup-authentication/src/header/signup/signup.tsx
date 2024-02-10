import { useState } from 'react';
import './signup.style.css';
import axios from 'axios';

export const Signup = () => {
  
  const [name , setName ] = useState('');
  const [password , setPassword ] = useState('');
  const [confirmPassword , setConfirmPassword] = useState("");


  const handleSubmit = async(event : React.FormEvent)=>{
      event.preventDefault();

      try {

        if(password === confirmPassword){
              const response = await axios.post("http://localhost:4000/signup" , {
                name,password,confirmPassword
              });

              console.log(response);
              setName("");
              setPassword("");
              setConfirmPassword("");
        }else{
          alert("Password is not matching");
        }
      } 
      catch (error : any) {
        console.log("Error : " , error);
      }
  }

  return (
    <div className='main-container'>
      <form onSubmit={handleSubmit} >
          <input type='text' placeholder='Enter your name' onChange={(e) => setName(e.target.value)} value={name} />
          <input type='text' placeholder='Enter your Password' onChange={(e) => setPassword(e.target.value)} value={password} />
          <input type='password' placeholder='Enter Password Again' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          <button type='submit'> Register </button>
      </form>  
    </div>
  )
}
