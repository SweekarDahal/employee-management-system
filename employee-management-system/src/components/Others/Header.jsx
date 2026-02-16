import React, { useState } from 'react'

const Header = ({data}) => {
  
  const logOut = () => {
    console.log("Logged Out");
     localStorage.removeItem('loggedInUser')
    window.location.reload();
  }

  return (
    <div className='flex justify-between items-end px-10 py-6'>
       <h1 className='text-2xl text-[#1971c2] font-medium'>Hello <br /> <span className='text-3xl font-bold'>userName👋</span></h1>
       <button onClick={logOut} className='px-5 py-2 bg-[#8B0000] text-white text-lg font-medium rounded'>Log out</button>
    </div>
  )
}

export default Header