import React from 'react';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer' 
import '../Assets/footer.css'

const Men = () => {
    return (
        <>
            <Navbar/>
            <div className='shop-now'>
                <h1>Men's Fashion</h1>
                <hr />
            </div>
            <div className='fixed-height'>

            </div>
            <Footer/>
        </>
    );
};

export default Men;