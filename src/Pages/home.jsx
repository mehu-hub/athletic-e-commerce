import React from 'react';
import Navbar from '../Layout/Navbar';
import '../Assets/home.css'
import ShopCard from '../Components/shopcard'

const home = () => {

    let shopCart = [
        {
            image: 'https://lts-images.azureedge.net/product-images/67361132_Zoom.jpg',
            title: 'Hoodie',
            description: 'Gym Wear Cashmere Sweater',
            price: '1500'
        },
        {
            image: 'https://lts-images.azureedge.net/product-images/67362668_Zoom.jpg',
            title: 'T Shirt',
            description: 'Exclusive T-shirt',
            price: '450'
        },
        {
            image: 'https://lts-images.azureedge.net/product-images/67362497_Zoom.jpg',
            title: 'Men shirt',
            description: 'Premium men formal Shirt',
            price: '900'
        },
        {
            image: 'https://lts-images.azureedge.net/product-images/67362904_Zoom.jpg',
            title: 'Shoes',
            description: 'Men Premium quality shoes',
            price: '2222'
        }
    ]
    return (
        <>
            <Navbar />
            <h1 className='shop-now'>SHOP NOW</h1>
            <hr />
            <div className='shop_card'>
                {shopCart.map((item) => {
                    return (
                        <ShopCard
                            image={item.image}
                            title={item.title}
                            description={item.description}
                            price={item.price}
                        />
                    )
                })}
            </div>
        </>
    );
};

export default home;