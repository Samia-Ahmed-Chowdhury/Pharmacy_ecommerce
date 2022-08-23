import React from 'react'
function CatCard(props) {
  return (
    <>
      
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-10 col-10 g-4 mx-auto">
          <div className="medicine_card card mb-3" >
            <div className="row g-0">
              <div className="col-md-4">
                <img src={props.img}  className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{props.title}</h5>
                  <p className="card-text">{props.details}
                    <small className="text-muted"> load more</small></p>
                  <h5 style={{color:"red"}}>{props.price}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
    

    </>
  )
}

export default CatCard