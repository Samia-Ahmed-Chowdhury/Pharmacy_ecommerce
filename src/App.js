import React, { createContext, useReducer } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import CartPage from './component/CartPage';
import Prescription from './component/Prescription';
import ProductDetails from './component/ProductDetails';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';

const initialState = 0;
function reducer(state, action) {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return 0;
  }
}

export const CounterContex = createContext();

function App() {

  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <>
     <CounterContex.Provider value={{ counterCount: count, counterDispatch: dispatch }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/prescription" element={ <Prescription />}> </Route>
        </Routes>
        <Routes>
          <Route exact path="/Cta" element={<>   <img src="../images/cta_img.png" className="img-fluid " alt="prb" /></>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/ProductDetails" element={<ProductDetails />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/buy_now" element={<img src="../images/buy.jpg" className="img-fluid " alt="prb" />}></Route>
        </Routes>
        <Routes>
       <Route exact path="/CartPage" element={<CartPage />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/checkout" element={<img src="../images/buy.jpg" className="img-fluid " alt="prb" />}></Route>
        </Routes>
      </BrowserRouter> 
      </CounterContex.Provider>
    </>
  );
}

export default App;
