import React from 'react'
import "./Testimonial.css"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
function Testimonial(props) {
  return (
    <>
      <div className="container ">
        <div className="row py-5">
        <h2>Our beloved customers</h2>
          <div className="details_box col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12 m-auto">
            <h3>&ldquo; {props.h3_data} &rdquo;</h3>
            <p>&ldquo; {props.p_data} &rdquo;</p>
            <h4>{props.h4_data}</h4>

            <div className="details_img col-xl-1 col-lg-1 col-md-2 col-sm-2 col-2 m-auto">
              <img src={props.img_src} className="img-fluid" />
            </div>
            <h5>{props.h5_data} <KeyboardArrowRightIcon className='arrow' /></h5>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonial