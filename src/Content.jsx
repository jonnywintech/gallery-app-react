import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

const Content = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Login" element={<Login />}/>
            {/* <Route path="/locations" element={<Locations />}/>
            <Route path="/contact-us" element={<Contact />}/>
            <Route path="/web-design" element={<WebDesign />}/>
            <Route path="/app-design" element={<AppDesign />}/>
            <Route path="/graphic-design" element={<GraphicDesign />}/> */}
        </Routes>

    </>
  )
}

export default Content