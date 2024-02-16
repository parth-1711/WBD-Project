import React from 'react'
import classes from './UserImage.module.css'

const UserImage = ({user}) => {
  return (
    <div className={classes.imgdiv}>
        <img src="userLogo.png" alt="user" className='rounded-s-full rounded-e-full'/>
        <p>{user.uname}</p>
    </div>
  )
}

export default UserImage