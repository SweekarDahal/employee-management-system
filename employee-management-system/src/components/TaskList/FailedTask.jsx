import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className="h-full w-75 bg-red-300 rounded-2xl shrink-0 p-4">
      <div className="flex items-end justify-between">
        <h3 className="px-3 py-1 bg-red-600 text-sm">{data.category}</h3>
        <h3 className="text-sm ">{data.taskDate}</h3>
      </div>
      <h2 className=" mt-3 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="mt-2 text-sm">
        {data.taskDescription}
      </p>
      <div className=" mt-4">
        <button className='w-full bg-red-500 '>
            Failed
        </button>
      </div>

    </div>
  )
}

export default FailedTask