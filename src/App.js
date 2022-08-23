import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
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
          <Route exact path="/Precibecision" element={<h4> ggg</h4>}></Route>
        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
