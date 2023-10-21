 import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/home'
import Contact from './Pages/contact'
import About from './Pages/about'
import Men from './Pages/men';
import Women from './Pages/women';
import Kids from './Pages/kids';
import Trending from './Pages/trending';
import District from './Pages/district';
import ShopCard from './Components/shopcard';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path='/men' element={<Men/>}/>
        <Route exact path='/women' element={<Women/>}/>
        <Route exact path='/kids' element={<Kids/>}/>
        <Route exact path='/trending' element={<Trending/>}/>
        {/* <Route exact path='/shop-card/:id/:name' element={<ShopCard/>}/> */}
        {/* ----------------------------------------------- */}
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about-us/:id" element={<About />} />
        <Route exact path="/district" element={<District />} />
      </Routes>
    </>
  );
}

export default App;
