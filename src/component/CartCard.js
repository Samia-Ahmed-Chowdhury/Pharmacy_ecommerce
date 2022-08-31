import React, { useReducer } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

function CartCard(props) {
    const reducer = (state, action) => {
        switch (action.type) {
            case 'add':
                return state + action.value;
            case 'subtract':
                return state - action.value;
            default:
                return state;
        }
    }

    const initialState = 1;
    const [count, dispatch] = useReducer(reducer, initialState);
    const { price } = props;

    return (
        <>
            <div className='cart_row row m-auto '>
                <div className=" d-flex justify-content-center col-xl-2 col-lg-2 col-md-2 col-sm-10 col-10 g-5 ">
                    <img src={props.img} style={{ height: "105px" }} className="img-fluid rounded-start" alt="img" />
                </div>
                <div className=" text-center  col-xl-2 col-lg-2 col-md-2 col-sm-10 col-10 g-5 ">
                    <h2>{props.title}</h2>
                    <p> EXP:{props.EXP}</p>
                </div>
                <div className="d-flex justify-content-center col-xl-2 col-lg-2 col-md-2 col-sm-10 col-7 m-auto ">
                    <div className='d-flex' style={{ borderRadius: "20px", border: '2px solid beige' }}>
                        <button className='subtract' onClick={() => { dispatch({ type: 'subtract', value: 1 }) }}><RemoveIcon /></button>
                        <h2>{count >= 0 ? count : 1}</h2>
                        <button className='add' onClick={() => { dispatch({ type: 'add', value: 1 }) }}><AddIcon /></button>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 col-10 g-5 ">
     {
        console.log(price)
     }
                    <h5>{price * count}</h5>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 col-10 g-5 d-flex justify-content-center">
                    <DeleteIcon className='del' />
                </div>
            </div>
            <hr />
        </>
    )
}

export default CartCard