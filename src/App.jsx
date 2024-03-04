import React, { useState,  useEffect } from "react";
import Cards from "./components/Cards";
import Card from "./components/Card";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import "./App.css";
function App() {
  
const [users,setUsers] = useState([]);
// const handleSubmitFormData = (data)=>{
//   setUsers([...users, data]);
//   localStorage.setItem("userData", JSON.stringify(users));

// }
const handleSubmitFormData = (data)=>{
  setUsers(prevUsers => [...prevUsers, data]);
  localStorage.setItem("userData", JSON.stringify([...users, data]));
}
const HandleRemove = (id) => {
  // Remove user with specified id from state and localStorage
  const updatedUsers = users.filter((user, index) => index !== id);
  setUsers(updatedUsers);
  localStorage.setItem("userData", JSON.stringify(updatedUsers));
};

// const HandleRemove = (id)=>{
//   setUsers(() =>users.filter((item, index) => index != id));
//  localStorage.setItem("userData", JSON.stringify(users));
 
// }
// const HandleRemove = (id)=>{
//   setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
// }
// const HandleRemove = (id)=>{
//   const updatedUsers = users.filter((user) => user.id !== id);
//   setUsers(updatedUsers);
//   localStorage.setItem("userData", JSON.stringify(updatedUsers));
// }
useEffect(() => {
  const savedData = localStorage.getItem("userData");
  if (savedData) {
    setUsers(JSON.parse(savedData));
  }
}, []); 
  return (
    <div>
      <Navbar users={users} />
      <Cards HandleRemove={HandleRemove} users={users}  />
      <Form handleSubmitFormData={handleSubmitFormData} />
    </div>
  );
  }

export default App;
