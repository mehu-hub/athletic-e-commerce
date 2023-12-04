import React from 'react';
import Layout from '../../Layout/Layout';
import { useCart } from 'react-use-cart';
import swal from 'sweetalert';

const Cart = () => {
    const { items, cartTotal, removeItem, updateItemQuantity } = useCart();
    return (
        <Layout>

            <div className='container mx-auto'>
                <h3 className="m-5 font-bold text-4xl text-green-800 ">Cart items</h3>

                <div className="mt-5 p-5 bg-blue-50 rounded-lg m-2">
                    <div className="min-w-full"> 
                            {items?.map((product, index) => {
                                return (
                                    <div className='border rounded p-5 border-gray-600 grid md:grid-cols-3 gap-10 mt-5' key={index}> 
                                        <div className='flex items-center gap-10'>
                                            <div className="">
                                                <img src={product.image} width={80} height={80} alt='' />
                                            </div>
                                            <div className="">
                                                {product.name}
                                            </div>
                                        </div> 
                                        <div className='flex items-center gap-10'>
                                            <div className="">
                                                {product.price.toFixed(0)} Tk
                                            </div>
                                            <div className="">
                                                <div className="flex justify-between items-center w-[6rem]">
                                                    <button className={`text-2xl p-2 w-8 rounded-lg ${product.quantity == 1 ? 'bg-slate-100 text-red-600' : ' text-black'}`} onClick={() => updateItemQuantity(product.id, (product.quantity - 1))}
                                                        disabled={product.quantity === 1}>
                                                        -
                                                    </button>
                                                    {product.quantity}
                                                    <button className="text-2xl text-black p-2 w-8 rounded-lg" onClick={() => updateItemQuantity(product.id, (product.quantity + 1))}>
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-10">
                                            <div className="">
                                                {(Number(product.quantity) * Number(product.price)).toFixed(0)} Tk
                                            </div>
                                            <button className="bg-red-500 text-white rounded-lg px-6 p-2" onClick={() => {
                                                removeItem(product?.id);
                                                swal({ 
                                                    text: "Product Removed from Cart",
                                                    icon: "success"
                                                  });
                                            }}>
                                                Delete
                                            </button>
                                        </div> 
                                    </div>
                                )
                            })} 
                    </div> 
                    <hr className='mt-5' />
                    <div className="md:flex justify-around mt-5">
                        <p></p>
                        <p className="text-2xl font-semibold ">Total Price: <span className='text-red-600'>{cartTotal.toFixed(0)} Tk</span></p>
                    </div>
                </div>
            </div>


        </Layout>
    );
};

export default Cart;