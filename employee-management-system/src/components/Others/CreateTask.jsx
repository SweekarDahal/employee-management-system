import React from 'react'

const CreateTask = () => {
  return (
    <div className="flex flex-col w-full gap-2">
        <form className="flex flex-col px-10 py-5 bg-[#081C15]">
          <div className="flex items-baseline justify-between">
            <div className="w-1/2 flex flex-col gap-5">
              <div>
                <h2 className="">Task title:</h2>
                <input
                  type="text"
                  required
                  placeholder="Enter task title"
                  className="w-3/4 px-5 py-2 border-2 border-white  rounded text-black font-semibold bg-transparent placeholder:text-gray-500"
                />
              </div>
              <div>
                <h2>Date:</h2>
                <input
                  type="date"
                  required
                  className="w-3/4 px-5 py-2 border-2 border-white  rounded  font-semibold bg-transparent text-gray-500 valid:text-white focus:text-white"
                />
              </div>
              <div>
                <h2>Assign to:</h2>
                <input
                  type="text"
                  required
                  placeholder="Assign to Developer,Designer,etc..."
                  className="w-3/4 px-5 py-2 border-2 border-white  rounded text-black font-semibold bg-transparent placeholder:text-gray-500"
                />
              </div>
              <div>
                <h2>Catagory:</h2>
                <input
                  type="text"
                  required
                  placeholder="Desiegn,Development,etc...."
                  className="w-3/4 px-5 py-2 border-2 border-white  rounded text-black font-semibold bg-transparent placeholder:text-gray-500"
                />
              </div>
            </div>
            <div className="w-1/2 flex flex-col items-end">
              <div className="w-3/4">
                <h2>Description:</h2>
              <textarea
                rows={9}
                placeholder="Detailed Description of task (Max 500 Words)"
                className="w-full px-5 py-2 border-2 border-white rounded text-black font-semibold bg-transparent placeholder:text-gray-500"
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