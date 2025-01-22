import React from 'react'
import '../style/Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='homePage'>
      
      <div className='hero'>
      <h2>Quality clothins Australian made</h2>
      <p>Quality craftsmanship defines every men’s leather belt in the R.M.Williams range, 
        from the timeless Drover collection to hand-plaited kangaroo leather belts. 
        Durable, timeless and crafted from the finest 
        Australian leather - this is an accessory 
        you can rely on.
      </p>
      <Link to="products">
      <button className='hero-btn'>Shop Now</button>
      </Link>
      </div>
      </div>
  )
}

export default Home