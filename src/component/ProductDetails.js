import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import "./ProductDetails.css"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
function ProductDetails() {

    const params = useLocation();
    const ProductItem = params.state.updateItems
    //  console.log(ProductItem);

    const { id, img, category, title, details, price, MRV, EXP } = ProductItem[0]
    // console.log(id);
    // console.log(id,img,category,title,details,price,MRV,EXP);

    let navigate = useNavigate();
    const c={id,img,category,title,details,price,MRV,EXP}


    const AddToCart = () => {
        sessionStorage.setItem(`item= ${id}`,JSON.stringify(c));
    }

    return (
        <>
            <section className='product_details'>
                <div className="container pt-5">
                    <div className="row m-auto mb-5">
                        <KeyboardArrowLeftIcon style={{ fontSize: "5rem" }} onClick={() => { navigate(-1) }} />
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
                                    <h3><ArrowRightIcon className="arrow_icon" /> ${price}</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row m-auto py-5'>
                        <div className="d-flex justify-content-center col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 m-auto ">
                            <button className='buy_now' onClick={() => { navigate('buy_now') }}>Buy Now</button>
                            <button className='add_to_cart' onClick={AddToCart}>Add to cart</button>
                        </div>
                    </div>
                </div>
               
                
            </section>
        </>
    )
}

export default ProductDetails;