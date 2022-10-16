import React from 'react'
import { Link } from 'react-router-dom';


const SliderDesign = ({ title,text, img,desc }) => {
  return (
    <div className="pt-5 pb-2" style={{backgroundColor:"#F7F8FC"}}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <div className="hero-part1 pt-5">
              <h4 className='' style={{color:"#3cb815"}}>{title}</h4>
              <h1 className='py-3'>Natural is <span style={{color:"#3cb815"}}>Always</span> Healthy</h1>
              <h6 className='lh-base pb-4'>{desc}</h6>

              <Link to="/shop" className="hero-btn"> Shop Now</Link>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 ">
            <div className="banner-img ">
              <img className="img-fluid" src={img} alt={text} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SliderDesign