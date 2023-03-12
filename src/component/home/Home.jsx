import React from 'react'
import { Link } from 'react-router-dom'
import "./home.css"

const Home = () => {
  return (
   <>
<div className="container">
  <div className="container-left">
<h1> sorry for this but i did not know anything about yarn package </h1>
  </div>
  <div className="container-right">
  <Link to="/Sgraph">
<div className="container-right-box">
  <h3>scattred plot </h3>
  <p> coloured intensity vs hue </p>
</div>
</Link>
<Link to="/Bgraph">
<div className="container-right-box">
  <h3>bar chart </h3>
  <p>alchole vs avg malic acid  </p>
</div>
</Link>
  </div>
</div>
   </>
  )
}

export default Home