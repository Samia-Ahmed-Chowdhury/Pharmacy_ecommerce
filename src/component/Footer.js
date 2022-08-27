import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    <>
        <footer>
            <div className="footer_box">
            <div className="container px-4 py-5 ">
            <div className=" row  py-5 ">
                <div className=" col-xl-3 col-lg-3 col-md-6 col-sm-10 col- pb-5  m-auto ">
                    <img src="images/logo.png" className=" img-fluid " alt="..." />
                    <p>There are many variations of lorem of Lorem Ipsum available.</p>
                    <div className="row d-flex flex-row justify-content-center">
                        <div className=" social  text-center col-lg-5 col-md-5 col-sm-10 col-10  mb-2 d-flex flex-row justify-content-center"
                            style={{color: "white"}}>
                            <img className="social-icon p-3" src="../images/fb.svg" />
                            <img className="social-icon p-3" src="../images/twitter.svg" />
                            <img className="social-icon p-3" src="../images/youtube.svg" />
                            <img className="social-icon p-3" src="../images/insta.svg" />
                        </div>
                    </div>
                </div>
                <div className=" col_2 col-xl-3 col-lg-3 col-md-6 col-sm-10 col-10  pb-5 m-auto ">
                    <h6>Get In Touch</h6>
                    <p>121 King St, Melbourne VIC 3000,Australia</p>
                    <p>info@example.com</p>
                    <p> 888-123-4587</p>
                </div>

                <div className="col_2 col-xl-3 col-lg-3 col-md-6 col-sm-10 col-10  m-auto ">
                    <h6>Quick Link</h6>
                    <p>Strategy & research </p>
                    <p>Website Design</p>
                    <p>Research & Development</p>
                    <p>Marketing Analysis</p>
                </div>

                <div className=" col-xl-3 col-lg-3 col-md-6 col-sm-10 col-10 ">
                    <h6>Subscribe Newsletter</h6>
                    <form>
                        <input type="email" name="email" placeholder="Email Address"/>
                        <button className="submit_btn" type="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" viewBox="0 0 25 28"
                                fill="none">
                                <path
                                    d="M0.432617 14.9395L7.27524 19.9821L18.1866 9.39004L11.3003 22.9484L18.1429 27.9911L24.7124 0.534885L0.432617 14.9395Z"
                                    fill="white" />
                            </svg>
                        </button>
                    </form>
                    <p>Designed by Radiant Themes</p>
                </div>
            </div>
        </div>
            </div>
        </footer>
    </>
  )
}

export default Footer