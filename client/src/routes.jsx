import React from 'react'
import {Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Layout from './Pages/Layout';
import Importatnt from './Pages/Importatnt';

const routes = () => {
  return (
    <>
     <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='important' element={<Importatnt/>}/>
        </Route>
     </Routes>
    </>
  )
}

export default routes