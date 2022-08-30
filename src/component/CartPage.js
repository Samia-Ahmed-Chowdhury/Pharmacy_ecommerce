import React from 'react'
import "./CartPage.css"
import { useLocation, useNavigate } from 'react-router-dom';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Scrollbars } from "react-custom-scrollbars-2";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

function CartPage() {

  let navigate = useNavigate();

  return (
    <>
      <section className='cart_page'>
        <div className="container pt-5">
          <div className="row d-flex flex-row m-auto   mb-5">
            <span className='arrow_text'>
              <KeyboardArrowLeftIcon style={{ fontSize: "5rem" }} onClick={() => { navigate(-1) }} />
              Continue Shoppping </span>
          </div>
          <div className='row m-auto'>
            <h1>Your Order</h1>
          </div>
          <div className='d-flex flex-row row m-auto'>
            <div>
              <img src="./images/m1.png" alt='nt' />
            </div>
            <div>
              <div>name</div>
              <div>details</div>
            </div>
          </div>
        </div>


      </section>
    </>
  )
}

export default CartPage