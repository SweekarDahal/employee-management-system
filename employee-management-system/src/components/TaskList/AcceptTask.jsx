import React from "react";
import CompleteTask from "./CompleteTask";

const AcceptTask = ({data}) => {
  const completedTask = () => {
    return <CompleteTask data = {data} />
  }
  return (
    <div className="h-full w-75 bg-yellow-600 rounded-2xl shrink-0 p-4">
      <div className="flex items-end justify-between">
        <h3 className="px-3 py-1 bg-red-600 text-sm">{data.category}</h3>
        <h3 className="text-sm"> {data.taskDate} </h3>
      </div>
      <h2 className=" mt-3 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="mt-2 text-sm">
       {data.taskDescription}
      </p>
      <div className="flex justify-around mt-4">
        <button onClick={completedTask} className="bg-green-500 text-black text-xs py-1 px-3 rounded active:scale-95">
          Marked as Completed
        </button>
        <button className="bg-red-500 text-black text-xs py-1 px-3 rounded active:scale-95">
          Marked as Failed
        </button>
      </div>

    </div>
  )
}

export default AcceptTask;
