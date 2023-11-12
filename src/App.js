import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Blogs from './Pages/Blogs/Blogs';
import axios from 'axios';


function App() {
  axios.defaults.baseURL="https://uol-v-2.hostprohub.com/api/";
  return (
    <>
      <Routes>
        <Route extact path='/' element={<Home />} />
        <Route extact path='/shop' element={<Shop />} />
        <Route extact path='/about' element={<About />} />
        <Route extact path='/contact' element={<Contact />} />
        
        <Route extact path='/blogs' element={<Blogs />} /> 
      </Routes>
    </>
  );
}

export default App;
