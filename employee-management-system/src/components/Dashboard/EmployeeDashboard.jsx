import React from 'react'
import Header from '../Others/Header'
import TaskLisNumbers from '../Others/TaskLisNumbers'
import TaskList from '../TaskList/Tasklist'

const EmployeeDashboard = () => {
  return (
    <div className='h-screen text-white bg-[#1e1e1e] p-4'>
        <Header />
        <TaskLisNumbers />
        <TaskList />
    </div>
  )
}

export default EmployeeDashboard