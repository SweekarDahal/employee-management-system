import React, { useState } from "react";
import { Mail } from "lucide-react";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Email is " + email);
        console.log("Password is " + password)
        setEmail("");
        setPassword("");
    }
  return (
    <div className="h-screen w-full flex justify-center items-center bg-[rgb(122,0,122)]">
      <div className="mt-[6vh] border-2 border-red-400 h-[85vh] w-[60vh] rounded-2xl bg-white">
        <div className="w-full h-1/3 flex items-center justify-center">
          <h1 className="text-3xl font-bold text">Login</h1>
        </div>
        <form className="flex flex-col items-center justify-center text-black gap-4"
            onSubmit={(e) => {submitHandler(e)}}>
          <input required
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
            type="email"
            placeholder="example@gmail.com"
            className="w-3/4 px-5 py-2  rounded text-black font-semibold bg-[#e1cbca] placeholder:text-gray-500"
          />
          <input required
            value={password}
            onChange={(e) => {setPassword(e.target.value)}}
            type="password"
            placeholder="Enter Password"
            className="w-3/4 px-5 py-2  rounded text-black font-semibold bg-[#e1cbca] placeholder:text-gray-500"
          />
          <div className="flex gap-2 items-baseline justify- w-3/4">
            <input
              type="checkbox"
              name="Remember me"
              id="remember-me"
              className="accent-[#CC00CC]"
            />
            <label htmlFor="remember-me" className="text-[#CC00CC]">
              Remember me
            </label>
           </div>
          <button className="w-3/4 px-5 py-2 border-2  rounded text-white font-medium bg-[#CC00CC] active:scale-95 cursor-pointer">
            Login
          </button>
        </form>
        <div className="h-1/3 w-full flex justify-center items-baseline-last py-10">
          <p className="text-sm text-gray-400">
            Not a member?
            <a href="#" className="underline">
              Sign up now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
