import React from 'react';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import '../Assets/footer.css'

const Women = () => {
    return (
        <div>
             <Navbar/>
             <div className='shop-now'>
                <h1>Women's Fashion</h1>
                <hr />
             </div>
             <div className='fixed-height'>

             </div>
             <Footer/>
        </div>
    );
};

export default Women;