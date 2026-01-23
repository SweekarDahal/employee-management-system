import React from "react";
import Header from "../Others/Header";
import CreateTask from "../Others/CreateTask";
import AllTask from "../Others/AllTask";

const AdminDashboard = () => {
  const submitHandler = () => {};
  return (
    <div className="bg-[#1e1e1e] h-screen text-white w-full flex flex-col gap-1 px-4">
      <Header />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
