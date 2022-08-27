import { ThunderstormOutlined } from '@mui/icons-material';
import React from 'react'
import { useNavigate } from "react-router-dom";
import CatMenu from '../component/CatMenu';
import Cta from '../component/Cta';
import ServiceCard from '../component/ServiceCard';
import Testimonial from '../component/Testimonial'
import Footer from '../component/Footer'
import "../Home/Home.css"

function Home() {
    let navigate = useNavigate();
    const navigationTo = () => {
        navigate('Precibecision');
    }
    const navigationToCta = () => {
        navigate('Cta');
    }
    return (
        <>
            {/* hero section */}
            <Cta
                section_id="hero"
                h1_title={C[0].h1_title}
                p_title={C[0].p_title}
                btn={C[0].btn}
                img_src={C[0].img_src}
                bg_svg={C[0].bg_svg}
                navigationTo={navigationTo}
            />
            {/* hero section */}
            <CatMenu />
            {/* Cta section */}
            <div className='py-5'>
                <Cta
                    section_id="cta"
                    h1_title={C[1].h1_title}
                    p_title={C[1].p_title}
                    btn={C[1].btn}
                    img_src={C[1].img_src}
                    bg_svg={C[1].bg_svg}
                    navigationTo={navigationToCta}
                />
            </div>
            <section id='service'>
                <div className="container my-5">
                    <div className="row">
                        <h3>What we provides </h3>
                        {
                            ServiceCardData.map((val, index) => {
                                return (
                                    <ServiceCard
                                        key={index}
                                        card_class={val.card_class}
                                        h1_title={val.h1_title}
                                        p_title={val.p_title}
                                        img_src={val.img_src}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </section>

            <Testimonial
                h3_data={Testimonial_data[0].h3_data}
                p_data={Testimonial_data[0].p_data}
                h4_data={Testimonial_data[0].h4_data}
                img_src={Testimonial_data[0].img_src}
                h5_data={Testimonial_data[0].h5_data}
            />

            <Footer />
        </>
    )
}

export default Home;

const C = [
    {
        h1_title: "Life-saving medicines are delivered on time",
        p_title: "If you are like most people, you need to take medicine at some point in your life. You may need to take medicine every day, or you may only need to take medicine once in a while. Either way, you want to make sure that your medicines are safe, and that they will help you get better.. Then You have came right place.",
        btn: "Drop your Precibecision",
        img_src: "../images/hero_img.png",
        bg_svg: "show_svg"
    },
    {
        h1_title: "Treat diseases and improve your health.",
        p_title: "You may need to take medicine every day, or you may only need to take medicine once in a while. Either way, you want to make sure that your medicines are safe, and that they will help you get bette",
        btn: "Consult With Doctor",
        img_src: "../images/cta_img.png",
        bg_svg: "hide_svg"
    }
]


const ServiceCardData = [
    {
        card_class: "top_card",
        h1_title: "Qualified Doctor",
        p_title: "You share your ideas and we handle the  rest. We do i t all from home rent  to event services,foods and other  requirements.Sit back and  relax, we  take care of it",
        img_src: "../images/s1.png"
    },
    {
        card_class: "bottom_card",
        h1_title: "World Class Serivce",
        p_title: "You share your ideas and we handle the  rest. We do i t all from home rent  to event services,foods and other  requirements.Sit back and  relax, we  take care of it",
        img_src: "../images/s2.png"
    },
    {
        card_class: "top_card",
        h1_title: "Best Prize Guarantee",
        p_title: "You share your ideas and we handle the  rest. We do i t all from home rent  to event services,foods and other  requirements.Sit back and  relax, we  take care of it",
        img_src: "../images/s3.png"
    }
]

const Testimonial_data = [
    {
        h3_data: 'Game-changing software for couriers...',
        p_data: 'The UniQore system is a real game changer for our business.I had been searching for software that combines fleet management withdriver safety and compliance for years, with very little that the marketplace could offer.',
        h4_data: 'Alan Connell',
        img_src: '../images/download.jpg',
        h5_data: "More testimonials"
    }
]
