import React, { useEffect, useState, useContext } from 'react'
import "./CartPage.css"
import { useNavigate } from 'react-router-dom';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Scrollbars } from "react-custom-scrollbars-2";
import CartCard from './CartCard';
import { CounterContex } from '../App'
var all = [0];
function CartPage() {

  let navigate = useNavigate();

  const arr = []

  let keys = Object.keys(sessionStorage);
  for (let key of keys) {
    let data = sessionStorage.getItem(key)
    data = JSON.parse(data)
    // console.log(data)
    arr.push(data)
  }
  // console.log(arr)

  const clearCart = () => {
    alert('Are sure to clear cart list !!!!!');
    sessionStorage.clear();
    navigate('/')

  }

  const Counter = useContext(CounterContex)
  const [ren, setRen] = useState(false)
  const clearItem = (id) => {
    setRen(true);
    sessionStorage.removeItem(`item= ${id}`);
    Counter.counterDispatch('decrement');

  }


  useEffect(() => {
    // console.log(`arr `)
    setRen(false);
  }, [ren])

  const getV = ''
  const t = []

  const [state, setState] = useState(false)
  const v = (getV, getState) => {
    getV = parseInt(getV)
    all.push(getV);
    setState(getState)
  }
  const vv = (getV, getState) => {
    getV = parseInt(getV)
    all.push(-getV);
    setState(getState)
  }

  console.log(all)
  const cc = all.reduce((a, b) => a + b)

  return (
    <>
      <section className='cart_page'>
        <div className="container ">
          <div className="row d-flex flex-row m-auto ">
            <span className='arrow_text'>
              <KeyboardArrowLeftIcon style={{ fontSize: "5rem" }} onClick={() => { navigate(-1) }} />
              Continue Shoppping </span>
          </div>
          <div className='row m-auto'>
            <h1>Your Order</h1>
          </div>
          <div className='cart_part'>
            <Scrollbars className="cart-items-container">
              {arr.map((val, index) => {
                t.push(parseInt((val.price)))

                return (
                  <CartCard
                    key={index}
                    id={val.id}
                    img={val.img}
                    title={val.title}
                    price={val.price}
                    EXP={val.EXP}
                    clearItem={clearItem}
                    v={v}
                    vv={vv}
                  />
                );
              })}

            </Scrollbars>
          </div>


          <div className='row m-auto d-flex justify-content-end'>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-10 col-10 g-5 ">
              <h3>
                card total:  <span> ${state ? 
                (t.reduce((a, b) => a + b) + cc > t.reduce((a, b) => a + b)) ? t.reduce((a, b) => a + b) + cc : t.reduce((a, b) => a + b) 
                : (t.reduce((a, b) => a + b,0)) < 0 ? 0: (t.reduce((a, b) => a + b,0))
                
                }</span>
              </h3>
              <button className='clear' onClick={clearCart}>Clear Cart</button>
              <button className='check_out' onClick={() => { navigate('/checkout') }}>CheckOut</button>
            </div>
          </div>



        </div>
      </section>
    </>
  )
}

export default CartPage

