import React from 'react'
import {Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Layout from './Pages/Layout';

const routes = () => {
  return (
    <>
     <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='task' element={<h1>Tasks</h1>}/>
        </Route>
     </Routes>
    </>
  )
}

export default routes