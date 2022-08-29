import React, {  useReducer } from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import "./ProductDetails.css"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
function ProductDetails() {
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

    const params = useLocation();
    const ProductItem = params.state.updateItems
    //  console.log(ProductItem);

    const { id, img, category, title, details, price, MRV, EXP } = ProductItem[0]
    console.log(id);
    // console.log(id,img,category,title,details,price,MRV,EXP);

    let navigate = useNavigate();
    const navigateToCart=()=>{
        navigate('CartPage')
    }

    return (
        <>
            <section className='product_details'>
                <div className="container pt-5">
                <div className="row m-auto mb-5">
                <KeyboardArrowLeftIcon style={{fontSize:"5rem"}} onClick={()=>{  navigate(-1)}} />
                </div>
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-10 col-10 m-auto ">
                            <img src={img} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-10 col-10 m-auto ">
                            <div className="row my-4">
                                <div className="d-flex  align-items-center col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 m-auto ">
                                    <h4>Product Type</h4>
                                </div>
                                <div className=" col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8 m-auto ">
                                    <h4><ArrowRightIcon className="arrow_icon" /> {category} </h4>
                                </div>
                            </div>
                            <div className="row my-4">
                                <div className="d-flex  align-items-center col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 m-auto ">
                                    <h4>Product Name</h4>
                                </div>
                                <div className=" col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8 m-auto ">
                                    <h3><ArrowRightIcon className="arrow_icon" /> {title}</h3>
                                </div>
                            </div>
                            <div className="row my-4">
                                <div className="d-flex  align-items-center col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 m-auto ">
                                    <h4>details</h4>
                                </div>
                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8 m-auto ">
                                    <h4><ArrowRightIcon className="arrow_icon" /> {details}</h4>
                                </div>
                            </div>
                            <div className="row my-4">
                                <div className="d-flex  align-items-center col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 m-auto ">
                                    <h4>MRV Date</h4>
                                </div>
                                <div className=" col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8 m-auto ">
                                    <h3><ArrowRightIcon className="arrow_icon" />{MRV}</h3>
                                </div>
                            </div>
                            <div className="row my-4">
                                <div className="d-flex  align-items-center col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 m-auto ">
                                    <h4>EXP Date</h4>
                                </div>
                                <div className=" col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8 m-auto ">
                                    <h3><ArrowRightIcon className="arrow_icon" /> {EXP}</h3>
                                </div>
                            </div>
                            <div className="row my-4">
                                <div className="d-flex  align-items-center col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 m-auto ">
                                    <h4>Price</h4>
                                </div>
                                <div className=" col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8 m-auto ">
                                    <h3><ArrowRightIcon className="arrow_icon" />{price}</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row m-auto py-5'>
                        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-10 col-10 m-auto ">
                            <div className='row m-auto'>
                                <div className="d-flex justify-content-center col-xl-5 col-lg-5 col-md-5 col-sm-5 col-5 m-auto ">
                                    <h5>Quantity :</h5>
                                </div>
                                <div className="d-flex col-xl-7 col-lg-7 col-md-7 col-sm-7 col-7 m-auto ">
                                    <div className='d-flex' style={{ background: "white", padding: "1.2rem", borderRadius: "20px" }}>
                                        <button className='subtract'
                                            onClick={() => { dispatch({ type: 'subtract', value: 1 }) }}><RemoveIcon /></button>

                                        <h2>{count >= 0 ? count : 0}</h2>
                                        <button className='add'
                                            onClick={() => { dispatch({ type: 'add', value: 1 }) }}><AddIcon /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row m-auto py-5'>
                        <div className="d-flex justify-content-center col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 m-auto ">
                            <button className='buy_now' onClick={()=>{navigate('buy_now')}}>Buy Now</button>
                            <button className='add_to_cart' onClick={navigateToCart}>Add to cart</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetails