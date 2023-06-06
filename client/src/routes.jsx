import React from 'react'
import {Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Layout from './Pages/Layout';
import Importatnt from './Pages/Importatnt';
import Today from './Pages/Today'
import Upcoming from './Pages/Upcoming';

const routes = () => {
  return (
    <>
     <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='important' element={<Importatnt/>}/>
          <Route path='today' element={<Today/>}/>
          <Route path='upcoming' element={<Upcoming/>}/>
        </Route>
     </Routes>
    </>
  )
}

export default routes