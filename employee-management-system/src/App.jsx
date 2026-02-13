import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import { AuthContext } from './context/AuthProvider'
import { setLocalStorage } from './pages/util/LocalStorage'

const App = () => {
  const [user, setUser] = useState('');
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);
  // useEffect(() => {
  //   if(authData) {
  //     const loggedInUser =JSON.parse(localStorage.getItem('loggedInUser'));
  //     if(loggedInUser) {
  //     setUser(loggedInUser.role)
  //     }
  //   }
  // }, [authData])


  const handleLogin = (email, password) => {
    if(email === 'admin@me.com' && password == 123) {
      setUser("Admin");
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'Admin'}));
    } else if(authData) {
      const employee = authData.employees.find((e) => email == e.email && password == e.password);
      if(employee){
      setUser("Employee");
      setLoggedInUserData(employee);
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'Employee'}));
      }
    } else {
      alert("Invalid Credential!!");
    }
    }
  
  return (
    <>
    {!user ? <Login handleLogin={handleLogin} /> : ''}
    {user == 'Admin' ? <AdminDashboard /> : (user == 'Employee' ? <EmployeeDashboard data={loggedInUserData} /> : null) }
    </>
  )
}

export default App