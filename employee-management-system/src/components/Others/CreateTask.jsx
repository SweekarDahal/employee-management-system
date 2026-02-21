import React, { useContext, useState } from 'react'
import { getLocalStorage } from '../../pages/util/LocalStorage'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  const [taskTitle, setTaskTitle] = useState("")
  const [assignTo, setAssignTo] = useState("")
  const [taskDate, setTaskDate] = useState("")
  const [category, setCategory] = useState("")
  const [taskDescription, setTaskDescription] = useState("")

const [newTask, setNewTask] = useState({})
  const submitHandler = (e) => {
    e.preventDefault();
    setNewTask({
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: taskTitle,
        taskDescription: taskDescription,
        taskDate: taskDate,
        assignTo: assignTo,
        category: category,
    })
    const data = userData;
    console.log(data)
    data.forEach((e) => {
      if(assignTo == e.name) {
        e.tasks.push(newTask);
        console.log(e.taskCount.newTask)
        e.taskCount.newTask =  e.taskCount.newTask + 1
        console.log(e.taskCount.newTask)
      }
    })
    setUserData(data)
    setTaskTitle("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
    setTaskDescription("");
  }
  return (
    <div className="flex flex-col w-full gap-2">
        <form onSubmit={(e) => {submitHandler(e)}} className="flex flex-col px-10 py-5  bg-[#081C15]">
          <div className="flex items-baseline justify-between">
            <div className="w-1/2 flex flex-col gap-5">
              <div>
                <h2 className="">Task title:</h2>
                <input
                  type="text"
                  required
                  value={taskTitle}
                  onChange={(e) => {
                    setTaskTitle(e.target.value)
                  }}
                  placeholder="Enter task title"
                  className="w-3/4 px-5 py-2 border-2 border-white  rounded text-gray-300 font-semibold bg-transparent placeholder:text-gray-500"
                />
              </div>
              <div>
                <h2>Date:</h2>
                <input
                  type="date"
                  value={taskDate}
                  onChange={(e) => {
                    setTaskDate(e.target.value)
                  }}
                  required
                  className="w-3/4 px-5 py-2 border-2 border-white  rounded  font-semibold bg-transparent text-gray-500 valid:text-white focus:text-white"
                />
              </div>
              <div>
                <h2>Assign to:</h2>
                <input
                  type="text"
                  required
                  value={assignTo}
                  onChange={(e) => {
                    setAssignTo(e.target.value)
                  }}
                  placeholder="Assign to Developer,Designer,etc..."
                  className="w-3/4 px-5 py-2 border-2 border-white  rounded text-gray-300 font-semibold bg-transparent placeholder:text-gray-500"
                />
              </div>
              <div>
                <h2>Category:</h2>
                <input
                  type="text"
                  required
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value)
                  }}
                  placeholder="Desiegn,Development,etc...."
                  className="w-3/4 px-5 py-2 border-2 border-white  rounded text-gray-300 font-semibold bg-transparent placeholder:text-gray-500"
                />
              </div>
            </div>
            <div className="w-1/2 flex flex-col items-end">
              <div className="w-3/4">
                <h2>Description:</h2>
              <textarea
                rows={9}
                placeholder="Detailed Description of task (Max 500 Words)"
                value={taskDescription}
                onChange={(e) => {
                    setTaskDescription(e.target.value)
                  }}
                className="w-full px-5 py-2 border-2 border-white rounded text-gray-300 font-semibold bg-transparent placeholder:text-gray-500"
              />
              </div>
              <button className="w-3/4 px-5 py-2 rounded text-white font-medium bg-[#52B788] active:scale-95 cursor-pointer mt-2">
            Create task
          </button>
            </div>
          </div>
        </form>
      </div>
  )
}

export default CreateTask