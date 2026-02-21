import React from 'react'
import Header from '../Others/Header'
import TaskLisNumbers from '../Others/TaskLisNumbers'
import TaskList from '../TaskList/TaskList'


const EmployeeDashboard = (props) => {
  return (
    <div className='h-screen text-white bg-[#1e1e1e] p-4'>
        <Header changeUser = {props.changeUser} data = {props.data} />
        <TaskLisNumbers data = {props.data} />
        <TaskList data = {props.data} />
    </div>
  )
}

export default EmployeeDashboard