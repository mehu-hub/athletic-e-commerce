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
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Women from './Pages/Women/Women';
import Kids from './Pages/Kids/Kids';
import Trending from './Pages/Trending/Trending';
import AllFashion from './Pages/AllFashion/Allfashion';
import Accessories from './Pages/Accessories/Accessories';


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
            <Route extact path="/womenfashion" element={<Women />} />
            <Route extact path="/kids" element={<Kids />} />
            <Route extact path="/trending" element={<Trending />} />
            <Route extact path="/all" element={<AllFashion />} />
            <Route extact path="/accessories" element={<Accessories />} />

            <Route extact path="/about" element={<About />} />
            <Route extact path="/contact" element={<Contact />} />

            <Route extact path="/blogs" element={<Blogs />} />
            <Route extact path="/blogs/:slug" element={<BlogDetails />} />
            <Route extact path="/product/:slug" element={<ProductDetails />} />
            <Route exact path="/cart" element={<Cart />} />
            
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
          </Routes>
        </SettingsProvider>
      </CartProvider>
    </>
  );
}

export default App;
