import React from 'react'

const CompleteTask = () => {
  return (
      <div className="h-full w-75 bg-amber-300 rounded-2xl shrink-0 p-4">
      <div className="flex items-end justify-between">
        <h3 className="px-3 py-1 bg-red-600 text-sm">High</h3>
        <h3 className="text-sm">23 Jan 2026</h3>
      </div>
      <h2 className=" mt-3 text-2xl font-semibold">Complete EMS Project</h2>
      <p className="mt-2 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum magnam
        illum, ratione natus atque?
      </p>
      <div className=" mt-4">
        <button className='w-full bg-green-500 '>
            Complete
        </button>
      </div>

    </div>
  )
}

export default CompleteTask