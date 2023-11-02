import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

const Content = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />}/>
            {/* <Route path="/about-us" element={<OurCompany />}/>
            <Route path="/locations" element={<Locations />}/>
            <Route path="/contact-us" element={<Contact />}/>
            <Route path="/web-design" element={<WebDesign />}/>
            <Route path="/app-design" element={<AppDesign />}/>
            <Route path="/graphic-design" element={<GraphicDesign />}/> */}
        </Routes>

    </>
  )
}

export default Content