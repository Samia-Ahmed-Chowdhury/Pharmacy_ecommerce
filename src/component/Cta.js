import React from 'react'

function Cta(props) {
  
  return (
    <>
      <section id={props.section_id}>
                <div className="container py-5 ">
                    <div className="row ">
                        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-10 col-10  m-auto ">
                            <h1>{props.h1_title}</h1>
                            <p>{props.p_title}</p>
                            <button className="hero-btn" onClick={props.navigationTo}>{props.btn}</button>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-10 col-10 m-auto ">
                            <img src={props.img_src} className="img-fluid hero_img" />
                        </div>

                    </div>
                </div>
                <svg className={`${props.bg_svg} svg_bg`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fillOpacity="1" d="M0,288L60,245.3C120,203,240,117,360,80C480,43,600,53,720,101.3C840,149,960,235,1080,250.7C1200,267,1320,213,1380,186.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            </section>
    </>
  )
}

export default Cta;