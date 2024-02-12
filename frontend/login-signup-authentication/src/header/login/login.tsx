// src/components/Login.tsx
import React, { useContext, useState } from 'react';
import axios from 'axios';
import { SuccessPage } from '../../components/successPage/SuccessPage';
import './login.style.css'; // Import the CSS file for styling
import { UserContext } from '../../store/auth';


const Login: React.FC = () => {
  const [name, setName] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [password, setPassword] = useState('');
  const {user , setUser , userData , setUserData , storeTokenInLocalStorage , userAuthentication } = useContext(UserContext);
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/login', {
        name,
        password
      });

      if(response.status === 200){
        const data = await response.data;
        //  console.log("Responsed from login : " , data);
        
        const Usertoken = data.token;
        userAuthentication(Usertoken);
         storeTokenInLocalStorage(Usertoken);
         setUserData({userDetails : "Hello"});

         console.log('Successful login');
        //  console.log(response);

         setIsLogin(true);
      }
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  return (
    <div className="login-container">
      {isLogin ? (
        <SuccessPage userName={name} />
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default Login;
