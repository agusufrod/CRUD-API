import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Create from '../componen/Create'
import Home from '../componen/Home'
import Edit from '../componen/Edit'


const Router = () => {
  return (
    
   <Routes>
        <Route path="/" element={<Navigate to="/Home" replace="true" />}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Create" element={<Create/>}/>
        <Route path="/Edit/:id" element={ <Edit/>}/>
   </Routes>

  )
}

export default Router