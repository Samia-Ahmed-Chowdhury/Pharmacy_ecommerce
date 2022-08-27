import React from 'react'

function ServiceCard(props) {
    return (
        <>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-10 col-10 m-auto ">
                <div className={ `${props.card_class} card mb-3`} >
                <div className="card_img">
                    <img src={props.img_src} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{props.h1_title}</h5>
                        <p className="card-text">{props.p_title}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceCard