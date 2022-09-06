import React from 'react'
import "./header.css"
import {  Link } from "react-router-dom";

const Header = () => {
  return (
    <>
    <Link to="/">
<div className="header">                          
    { <h1> React E-chart </h1>      /* its header when we click into this div it will direct your path to home page */}
    <p>wine data set</p>
</div>
</Link>
    </>
  )
}

export default Header