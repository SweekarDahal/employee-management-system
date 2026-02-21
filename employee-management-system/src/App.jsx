import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import { AuthContext } from './context/AuthProvider'
import { setLocalStorage } from './pages/util/LocalStorage'

const App = () => {
  const [user, setUser] = useState('');
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);
  useEffect(() => {
    if(userData) {
      const loggedInUser = localStorage.getItem('loggedInUser');

      if(loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role)
      setLoggedInUserData(userData.data)
      }
    }
  }, [userData])

  const handleLogin = (email, password) => {
    if(email === 'admin@me.com' && password == 123) {
      setUser("Admin");
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'Admin'}));
    } else if(userData) {
      const employee = userData.find((e) => email == e.email && password == e.password);
      if(employee){
      setUser("Employee");
      setLoggedInUserData(employee);
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'Employee', data:employee}));
      }
    } else {
      alert("Invalid Credential!!");
    }
    }
  
  return (
    <>
    {!user ? <Login handleLogin={handleLogin} /> : ''}
    {user == 'Admin' ? <AdminDashboard changeUser = {setUser} /> : (user == 'Employee' ? <EmployeeDashboard changeUser = {setUser} data={loggedInUserData} /> : null) }
    </>
  )
}

export default App