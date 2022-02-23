import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AddContact from "./Components/AddContact/AddContact";
import ContactList from "./Components/ContactList/ContactList";
import EditContact from "./Components/EditContact/EditContact";
import Navbar from "./Components/Navbar/Navbar";
import Spinner from "./Components/Spinner/Spinner";
import ViewContact from "./Components/ViewContact/ViewContact";

let App =()=>
{
  return(
    <React.Fragment>
      <Navbar/>
      <Routes>
        <Route path={'/'} element={<Navigate to={'/contact/list'}/>} />
        <Route path ={'/contact/list'} element={<ContactList/>}/>
        <Route path={'/contact/add'} element={<AddContact/>}/>
        <Route path={'/contact/view/:contactId'} element={<ViewContact/>}/>
        <Route path={'/contact/edit/:contactId'} element={<EditContact/>}/>

      </Routes>
    </React.Fragment>
  )
}
export default App