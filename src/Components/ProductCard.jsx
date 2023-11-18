import React, { useContext } from 'react';
import ProductCart from './ProductCart';
import { SettingsContext } from "../Components/SettingsProvider";

const ProductCard = () => {
    const settingsDataFromContext = useContext(SettingsContext);
    return (
        <div className='container mx-auto mt-[100px]'>
            <p className="text-6xl md:ml-0 ml-5 font-bold text-black">Products</p>

            <div className="grid grid-cols-1 md:grid-cols-4  gap-4 p-5 md:p-0">
                {settingsDataFromContext?.popular?.data.map((product, index) => {
                    return (
                        <div key={index} className="">
                             <ProductCart product={product}/>
                        </div>
                    )
                })}
            </div>

        </div>
    );
};

export default ProductCard;