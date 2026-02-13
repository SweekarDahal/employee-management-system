import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='TaskList' className='h-[50%] w-full py-6 mt-7 flex justify-around items-center gap-10 overflow-x-auto'>
        {data.tasks.map((e) => {
            if(e.active) {
                return <AcceptTask />
            }else if(e.newTask) {
                return <NewTask />
            }else if(e.completed) {
                return <CompleteTask />
            }else {
                return <FailedTask />
            }
        })}     
    </div>
  )
}

export default TaskList