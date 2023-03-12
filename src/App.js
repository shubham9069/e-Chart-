import React from 'react'
import { Routes, Route } from "react-router-dom";
import {Header,Home, Scatteredplot ,Barchart} from "./component"
const App = () => {
  return (
    <>
    <Header/>
    <Routes>
    <Route path="/react_echart" element={<Home/>}/>
    <Route path="/Sgraph" element={<Scatteredplot/>}/>
    <Route path="/Bgraph" element={<Barchart/>}/>


    </Routes>
    
    </>
  )
}

export default App