import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Blogs from './Pages/Blogs/Blogs';
import axios from 'axios';
import BlogDetails from './Pages/Blogs/BlogDetails';
import Men from './Pages/Men/Men';
import SettingsProvider from './Components/SettingsProvider';
import Cart from './Pages/Cart/Cart';
import { CartProvider } from 'react-use-cart';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import { ToastContainer } from 'react-toastify';


function App() {
  axios.defaults.baseURL = "https://uol-v-2.hostprohub.com/api/";
  return (
    <>
    <ToastContainer/>
      <CartProvider>
        <SettingsProvider>
          <Routes>
            <Route extact path="/" element={<Home />} />
            <Route extact path="/shop" element={<Shop />} />
            <Route extact path="/menfashion" element={<Men />} />
            <Route extact path="/about" element={<About />} />
            <Route extact path="/contact" element={<Contact />} />
            <Route extact path="/blogs" element={<Blogs />} />
            <Route extact path="/blogs/:slug" element={<BlogDetails />} />
            <Route extact path="/product/:slug" element={<ProductDetails />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </SettingsProvider>
      </CartProvider>
    </>
  );
}

export default App;
