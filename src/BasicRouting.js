import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from './Routing/Nav';
import Home from './Routing/Home';
import About from './Routing/About';
import PageNotFound from "./Routing/PageNotFound";

function BasicRouting() {
  return (
    <>

      <Nav/>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound/>}/> 
      </Routes>
    </>
  );
}

export default BasicRouting;
