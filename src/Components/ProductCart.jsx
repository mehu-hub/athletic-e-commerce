import React, { useEffect, useState } from "react";
import '../Assets/Css/Cart.css'
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Toaster from "./Common/Toaster";

const ProductCart = (props) => {
    const { product } = props;
    const { addItem } = useCart();
    // console.log(product);

    return (
        <>
            <Link to={`product/${product?.slug}`}>
                <div className="border-2 border-blue-200 md:mt-5 p-5 rounded-lg relative">

                    {Number(product?.discounted_price) > 0 && (

                        <div className="product-badge">{product?.discount} Off</div>
                    )}

                    {Number(product?.stock) < 1 && (
                        <div className="stock-badge">Out of stock</div>
                    )}

                    <div className="flex justify-between items-center">
                        <h3 className="font-bold md:text-2xl text-xl">{product?.name}</h3>
                    </div>
                    <div className="mt-4">
                        <img src={product?.image?.medium} className="w-full rounded-lg md:h-[400px]" alt="" />
                    </div>
                    <div className="h-[5px] w-full border-b-2 mt-4 border-blue-200">

                    </div>
                    <div className="flex md:flex-row flex-col justify-between items-center mt-4">
                        <div>
                            {Number(product?.discounted_price) > 0 ? (
                                <div className="flex items-center discounted-price">
                                    <span className="discounted">{product?.formatted_final_product_price}</span>
                                    <span className="regular">{product?.formatted_regular_price}</span>
                                </div>
                            ) :

                                <span className="regular-price mt-5 regular-price">{product?.formatted_final_product_price}</span>
                            }
                        </div>
                        <div>
                            <button className="bg-blue-800 py-2 px-6 rounded-lg text-white"

                                onClick={(e) => {
                                    e.preventDefault();
                                    if (Number(product?.stock) > 0) {
                                        addItem({
                                            id: product?.id,
                                            name: product?.name,
                                            price: product?.final_product_price,
                                            image: product?.image?.small,
                                            stock: product?.stock
                                        },); 
                                    }
                                    else { 
                                    }

                                }}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default ProductCart;