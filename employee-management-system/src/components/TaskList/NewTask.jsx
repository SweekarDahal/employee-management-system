import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className="h-full w-75 bg-amber-300 rounded-2xl shrink-0 p-4">
      <div className="flex items-end justify-between">
        <h3 className="px-3 py-1 bg-red-600 text-sm">{data.category}</h3>
        <h3 className="text-sm">{data.taskDate}</h3>
      </div>
      <h2 className=" mt-3 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="mt-2 text-sm">
        {data.taskDescription}
      </p>
      <div className="flex mt-1 justify-between mt-4">
        <button className="bg-green-500 text-black text-xs py-1 px-3 rounded active:scale-95">
          Accept Task
        </button>
        <button className="bg-red-500 text-black text-xs py-1 px-3 rounded active:scale-95">
          Reject Task
        </button>
      </div>

    </div>
  )
}

export default NewTask