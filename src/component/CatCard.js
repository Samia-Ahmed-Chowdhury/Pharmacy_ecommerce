import React from 'react'
import Sdata from '../Api_Data'
import { useNavigate } from "react-router-dom";
function CatCard(props) {

  let navigate = useNavigate();
  const showDetails = (categoryItem) => {
    const updateItems = Sdata.filter((curEle) => {
      return curEle.id === categoryItem;

    });
    // console.log(updateItems)

    navigate('ProductDetails',
      {
        state: {
          //  id:1
          updateItems
        },
      }
    );
  }
  return (
    <>
      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-10 col-10 g-5 ">
        <div className= {`${props.id} medicine_card card mb-3`} onClick={() => showDetails(props.id)}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={props.img} className="img-fluid rounded-start" alt="img" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.details}
                  <small className="text-muted"> load more</small></p>
                <h5 style={{ color: "red" }}> ${props.price}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CatCard