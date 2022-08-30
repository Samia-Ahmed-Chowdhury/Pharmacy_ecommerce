import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import CartPage from './component/CartPage';
import ProductDetails from './component/ProductDetails';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/home" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/Precibecision" element={<h1> Precibecision page</h1>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/Cta" element={<h1> Cta page</h1>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/ProductDetails" element={<ProductDetails />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/ProductDetails/buy_now" element={<h1> Thanks for Buying From Us</h1>}></Route>
        </Routes>
        <Routes>
       <Route exact path="/CartPage" element={<CartPage />}></Route>
        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
