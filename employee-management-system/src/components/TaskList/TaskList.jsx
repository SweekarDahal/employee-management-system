import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='TaskList' className='h-[50%] w-full py-6 mt-7 flex justify-around items-center gap-10 overflow-x-auto'>
        {data.tasks.map((elem, idx) => {
            if(elem.active) {
                return <AcceptTask key = {idx} data = {elem} />
            }else if(elem.newTask) {
                return <NewTask key = {idx}  data = {elem}/>
            }else if(elem.completed) {
                return <CompleteTask key = {idx}  data = {elem}/>
            }else {
                return <FailedTask key = {idx}  data = {elem}/>
            }
        })}     
    </div>
  )
}

export default TaskList