import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
    const [userData, setUserData] = useContext(AuthContext);
  return (
    <div id='TaskList' className='bg-[#081C15] overflow-y-auto h-50 '>
        <div className='flex justify-between px-7 h-10 font-bold text-black border-2 border-green-800'>
            <h2 className='w-1/5 text-amber-500 flex justify-center items-center'>Employee</h2>
            <h3 className='w-1/5 text-green-500 flex justify-center items-center'>New Task</h3>
            <h3 className='w-1/5 text-blue-500 flex justify-center items-center'>Completed Task</h3>
            <h3 className='w-1/5 text-yellow-500 flex justify-center items-center'>Accepted Task</h3>
            <h3 className='w-1/5 text-red-500 flex justify-center items-center'>Failed Task</h3>
        </div>
        <div id='TaskList' className='h-[80%] overflow-y-auto'>
            {userData.map((e,idx) => {
            return (
            <div key={idx} className='flex justify-between items-center gap-0.5 py-1 px-7 h-10 bg-[#081C15] font-semibold border border-green-800'>
            <h2 className='w-1/5 text-amber-500 flex justify-center items-center'>{e.name}</h2>
            <h3 className='w-1/5 text-green-500 flex justify-center items-center'>{e.taskCount.newTask}</h3>
            <h3 className='w-1/5 text-blue-500 flex justify-center items-center'>{e.taskCount.completed}</h3>
            <h3 className='w-1/5 text-yellow-500 flex justify-center items-center'>{e.taskCount.active}</h3>
            <h3 className='w-1/5 text-red-500 flex justify-center items-center'>{e.taskCount.failed}</h3>
        </div>
    )
        })}
        </div>
    </div>
  )
}

export default AllTask
