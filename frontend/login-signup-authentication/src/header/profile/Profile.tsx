
import './Profile.style.css'
import { UserContext } from '../../store/auth'
import { useContext } from 'react'

export const Profile = () => {

  const {user , userData} = useContext(UserContext);


  return (
    <div className='profile-container'>
        <h2> Profile  </h2>
        <h3> User Name  - {userData.userDetails} </h3>
        <div className='profile-items'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum laudantium vero labore eveniet illum impedit facilis deserunt iste esse, delectus voluptate minima sint, nostrum incidunt explicabo quasi modi illo dolor!
        </div>
    </div>
  )
}
