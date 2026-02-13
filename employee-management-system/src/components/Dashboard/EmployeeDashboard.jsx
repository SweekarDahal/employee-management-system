import React from 'react'
import Header from '../Others/Header'
import TaskLisNumbers from '../Others/TaskLisNumbers'
import TaskList from '../TaskList/TaskList'


const EmployeeDashboard = ({data}) => {
  return (
    <div className='h-screen text-white bg-[#1e1e1e] p-4'>
        <Header data = {data} />
        <TaskLisNumbers data = {data} />
        <TaskList data = {data} />
    </div>
  )
}

export default EmployeeDashboard