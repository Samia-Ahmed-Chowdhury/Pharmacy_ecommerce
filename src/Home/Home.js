import React from 'react'
import { useNavigate } from "react-router-dom";
import CatMenu from '../component/CatMenu';
import "../Home/Home.css"
import img from "../images/hero_img.png"
function Home() {
    let navigate = useNavigate();
    const navigationTo = () => {
        navigate('Precibecision')
    }
    return (
        <>
        {/* hero section */}
            <section id="hero">
                <div className="container py-5 ">
                    <div className="row ">
                        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-10 col-10  m-auto ">
                            <h1>Life-saving medicines are delivered on time</h1>
                            <p>If you are like most people, you need to take medicine at some point in your life. You may need to take medicine every day, or you may only need to take medicine once in a while. Either way, you want to make sure that your medicines are safe, and that they will help you get better.. Then You have came right place.</p>
                            <button className="hero-btn" onClick={navigationTo}>Drop your Precibecision</button>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-10 col-10 m-auto ">
                            <img src={img} className="img-fluid hero_img" />
                        </div>

                    </div>
                </div>
                <svg className='svg_bg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,288L60,245.3C120,203,240,117,360,80C480,43,600,53,720,101.3C840,149,960,235,1080,250.7C1200,267,1320,213,1380,186.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            </section>
 {/* hero section */}
 <CatMenu />
 
        </>
    )
}

export default Home