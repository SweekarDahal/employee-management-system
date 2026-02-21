import React, { useEffect, useState } from 'react'

const Header = (props) => {
  const [username, setUsername] = useState('')
  const logOut = () => {
     localStorage.removeItem('loggedInUser')
     props.changeUser('');
  }
  useEffect(() => {
      if(props.data?.name) {
    setUsername(props.data.name);
  }else {
    setUsername('Admin')
  }
  }, [props.data])

  return (
    <div className='flex justify-between items-end px-10 py-6'>
       <h1 className='text-2xl text-[#1971c2] font-medium'>Hello <br /> <span className='text-3xl font-bold'>{username}👋</span></h1>
       <button onClick={logOut} className='px-5 py-2 bg-[#8B0000] text-white text-lg font-medium rounded'>Log out</button>
    </div>
  )
}

export default Header