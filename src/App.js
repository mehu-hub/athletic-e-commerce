import axios from 'axios';
import { Route, Routes } from "react-router-dom"; 
import { CartProvider } from 'react-use-cart';
import './App.css';
import UserProvider from './Components/Common/UserProvider';
import SettingsProvider from './Components/SettingsProvider';
import About from './Pages/About/About';
import Accessories from './Pages/Accessories/Accessories';
import AllFashion from './Pages/AllFashion/Allfashion';
import BlogDetails from './Pages/Blogs/BlogDetails';
import Blogs from './Pages/Blogs/Blogs';
import Cart from './Pages/Cart/Cart';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Kids from './Pages/Kids/Kids';
import Login from './Pages/Login/Login';
import Men from './Pages/Men/Men';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Shop from './Pages/Shop/Shop';
import Signup from './Pages/Signup/Signup';
import Trending from './Pages/Trending/Trending';
import Women from './Pages/Women/Women';


function App() {
  axios.defaults.baseURL = "https://uol-v-2.hostprohub.com/api/";
  return (
    <>
       
      <CartProvider>
        <SettingsProvider>
          <UserProvider>
            <Routes>
              <Route extact path="/" element={<Home />} /> 
              {/* ---------------------------------------------- */}
              <Route extact path="/shop" element={<Shop />} />
              <Route extact path="/menfashion" element={<Men />} />
              <Route extact path="/womenfashion" element={<Women />} />
              <Route extact path="/kids" element={<Kids />} />
              <Route extact path="/trending" element={<Trending />} />
              <Route extact path="/all" element={<AllFashion />} />
              <Route extact path="/accessories" element={<Accessories />} />
              {/* ---------------------------------------------- */}  
              <Route extact path="/about" element={<About />} />
              <Route extact path="/contact" element={<Contact />} />
              {/* ---------------------------------------------- */}
              <Route extact path="/blogs" element={<Blogs />} />
              <Route extact path="/blogs/:slug" element={<BlogDetails />} />
              <Route extact path="/product/:slug" element={<ProductDetails />} />
              <Route exact path="/cart" element={<Cart />} />
              {/* ---------------------------------------------- */}
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
            </Routes>
          </UserProvider>
        </SettingsProvider>
      </CartProvider>
    </>
  );
}

export default App;
