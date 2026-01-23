import React from 'react'

const AllTask = () => {
  return (
    <div id='TaskList' className='bg-[#081C15] overflow-y-auto h-50'>
        <div className='flex justify-between items-center px-7 mb-2 h-10 bg-amber-400'>
            <h2>Sweekar</h2>
            <h3>Make a ui design</h3>
            <h3>Status</h3>
        </div>
        <div className='flex justify-between items-center px-7 mb-2 h-10 bg-red-400'>
            <h2>Sweekar</h2>
            <h3>Make a ui design</h3>
            <h3>Status</h3>
        </div>
        <div className='flex justify-between items-center px-7 mb-2 h-10 bg-blue-400'>
            <h2>Sweekar</h2>
            <h3>Make a ui design</h3>
            <h3>Status</h3>
        </div>
        <div className='flex justify-between items-center px-7 mb-2 h-10 bg-green-400'>
            <h2>Sweekar</h2>
            <h3>Make a ui design</h3>
            <h3>Status</h3>
        </div>
    </div>
  )
}

export default AllTask