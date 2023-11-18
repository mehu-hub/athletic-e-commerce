import React from 'react';
import Layout from '../../Layout/Layout';
import { useCart } from 'react-use-cart';

const Cart = () => {
    const { items, cartTotal, removeItem, updateItemQuantity } = useCart();
    return (
        <Layout>

            <div className='container mx-auto'>
                <h3 className="mt-5 font-bold text-4xl text-green-800 ">Cart items</h3>

                <div className="mt-10 p-5 bg-blue-50 rounded-lg">
                    <table className="min-w-full divide-y divide-gray-300 p-4">
                        <thead>
                            <tr>
                                <th scope="col" className="py-3.5  text-left text-[15px] font-semibold text-gray-900 sm:pl-0">
                                    Image
                                </th>
                                <th scope="col" className="py-3.5 px-3 text-left text-[15px] font-semibold text-gray-900">
                                    Title
                                </th>
                                <th scope="col" className="py-3.5 px-3 text-left text-[15px] font-semibold text-gray-900">
                                    Price
                                </th>
                                <th scope="col" className="py-3.5 px-3 text-left text-[15px] font-semibold text-gray-900">
                                    Quantity
                                </th>
                                <th scope="col" className="py-3.5 px-3 text-left text-[15px] font-semibold text-gray-900">
                                    SubTotal
                                </th>
                                <th scope="col" className="py-3.5 px-3 text-left text-[15px] font-semibold text-gray-900">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {items?.map((product, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="whitespace-nowrap py-4  text-sm font-medium sm:pl-0 text-left">
                                            <img src={product.image} width={80} height={80} alt='' />
                                        </td>
                                        <td className="whitespace-nowrap py-4  text-xl font-medium text-gray-900 sm:pl-0 text-left">
                                            {product.name}
                                        </td>
                                        <td className="whitespace-nowrap py-4  text-[15px] font-medium text-gray-900 sm:pl-0 text-left">
                                            {product.price.toFixed(0)} Tk
                                        </td>
                                        <td className="whitespace-nowrap py-4  text-sm font-medium text-gray-900 sm:pl-0 text-left">
                                            <div className="flex justify-between items-center w-[6rem]">
                                                <button className={`text-2xl p-2 w-8 rounded-lg ${product.quantity == 1 ? 'bg-slate-100 text-red-600' : ' text-black'}`} onClick={() => updateItemQuantity(product.id, (product.quantity - 1))}
                                                    disabled={product.quantity == 1}>
                                                    -
                                                </button>
                                                {product.quantity}
                                                <button className="text-2xl text-black p-2 w-8 rounded-lg" onClick={() => updateItemQuantity(product.id, (product.quantity + 1))}>
                                                    +
                                                </button>
                                            </div>
                                        </td>
                                        <td className="whitespace-nowrap py-4  text-[15px] font-medium text-gray-900 sm:pl-0 text-left">
                                            {(Number(product.quantity) * Number(product.price)).toFixed(0)} Tk
                                        </td>
                                        <td className="whitespace-nowrap py-4  text-sm font-medium text-gray-900 sm:pl-0 text-left">
                                            <button className="bg-red-500 text-white rounded-lg px-6 p-2" onClick={() => {
                                                removeItem(product?.id);
                                                // Toaster("Product removed from cart", 'error')
                                            }}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <hr className='mt-5' />
                    <div className="mt-5 mr-[100px] text-end">
                        <p className="text-2xl font-semibold ">Total Price: <span className='text-red-600'>{cartTotal.toFixed(0)} Tk</span></p>
                    </div>
                </div>
            </div>


        </Layout>
    );
};

export default Cart;