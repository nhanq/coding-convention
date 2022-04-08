import Navbar from "./component/navbar";
import Home from "./component/home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Products from "./component/products";
import Product from "./component/product";
import Cart from "./component/cart";
function App() {
  return (
    <>
      <Navbar />
    
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="products" element={<Products/>}/>
          <Route path="products/:id" element={<Product/>}/>
          <Route path ="cart" element ={<Cart/>}/>
        </Routes>
  

    </>

  );
}

export default App;
