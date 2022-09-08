import React, { useReducer, useContext, useState, useEffect } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { CounterContex } from '../App'

function CartCard(props) {
    const { price } = props;


    const reducer = (state, action) => {
        switch (action) {
            case 'add':
                return state + 1;
            case 'subtract':
                return state - 1;
            default:
                return state;
        }
    }

    const initialState = 1;
    const [count, dispatch] = useReducer(reducer, initialState);

    const Counter = useContext(CounterContex)

    const AddCartHandler = (getV) => {
        dispatch('add');
        Counter.counterDispatch('increment');
      
    }



    const SubCartHandler = () => {
        dispatch('subtract')
        Counter.counterDispatch('decrement');
    }

    return (
        <>
            <div className='cart_row row m-auto '>
                <div className=" d-flex justify-content-center col-xl-2 col-lg-2 col-md-2 col-sm-3 col-5 g-5 ">
                    <img src={props.img} style={{ height: "105px" }} className="img-fluid rounded-start" alt="img" />
                </div>
                <div className=" text-center product_name col-xl-2 col-lg-2 col-md-3 col-sm-3 col-6 g-5 ">
                    <h2>{props.title}</h2>
                    <p> EXP:{props.EXP}</p>
                </div>
                <div className="d-flex justify-content-center col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 m-auto ">
                    <div className='d-flex' style={{ borderRadius: "20px", border: '2px solid beige' }}>
                        <button className='subtract' onClick={SubCartHandler}><RemoveIcon /></button>
                        <h2>{count > 0 ? count : 1}</h2>
                        <button className='add' onClick={() => AddCartHandler(price)}><AddIcon /></button>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 g-5 ">
                    <h5>{count > 0 ? price * count : price}</h5>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-1 col-2 g-5 d-flex justify-content-center">
                    <DeleteIcon className='del' onClick={() => props.clearItem(props.id)} />
                </div>
            </div>
            <hr />
        </>
    )

}

export default CartCard