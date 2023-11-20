import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../Layout/Layout';
import { useCart } from 'react-use-cart';
import { FaHeart, FaFacebookSquare, FaLinkedin, FaTwitterSquare, FaShareAlt } from "react-icons/fa";



const ProductDetails = () => {
    const { addItem } = useCart();

    const [productDetails, setProductDetails] = useState();

    const { slug } = useParams();

    useEffect(() => {

        axios.get('get-product/' + slug)
            .then(response => {
                console.log(response);
                if (response.data.success) {

                    setProductDetails(response.data.data);
                }
            })

    }, [])

    return (
        <>
            <Layout>

                <div className='container mx-auto mt-10'>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
                        <div className='border-2 border-blue-400 text-center rounded md:m-0 m-2'>
                            <img src={productDetails?.image?.large} className="rounded-lg w-full" alt='' />
                        </div>

                        <div className='mt-10 m-2'>
                            <h1 className="font-semibold text-[30px]">{productDetails?.name}</h1>
                            <p className="text-[40px] font-bold text-blue-400"> {productDetails?.formatted_final_product_price} </p>
                            {/* <p className="text-gray-400"> {productDetails?.alter_text} </p> */}
                            <p className="text-gray-400"> Highly nutritious, Loaded with antioxidants, May support weight loss, May lower your risk of heart disease, Contain many important bone nutrients, May reduce blood sugar levels, Easy to incorporate into your diet. Chia seeds have many culinary applications. Some ways to prepare them to include: 1. Mixing them with milk or fruit juice to make a chia pudding, which you can top with cacao nibs or fresh fruit 2. Creating an egg replacer to use in baked goods such as cakes or bread 3. Mixing them into muffin batter 4. Making a chia gel to add to homemade soups or smoothies 5. Sprinkling raw seeds on oatmeal or a salad Soaking them to make chia sprouts 6. Mixing them with almond flour and spices to make a breading for fried chicken 7. Adding them to homemade energy bars"</p>

                            <div className='mt-5 flex md:flex-row flex-col gap-5 '>
                                <button className="bg-blue-800 p-2 md:px-6 rounded-lg text-white"

                                    onClick={(e) => {
                                        e.preventDefault();
                                        if (Number(productDetails?.stock) > 0) {
                                            addItem({
                                                id: productDetails?.id,
                                                name: productDetails?.name,
                                                price: productDetails?.final_product_price,
                                                image: productDetails?.image?.small,
                                                stock: productDetails?.stock
                                            },);
                                        }
                                        else {
                                        }

                                    }}

                                >Add to Cart</button>
                                <button className='rounded-lg border-2 border-blue-400 p-2 px-6 text-blue-400'>Buy Now</button>
                                <div className='text-center rounded-lg border-2 border-blue-400 p-2 px-6'>
                                    <button><FaHeart className='text-blue-400' /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-10 m-2'>
                        <div className='flex gap-2 items-center'>
                            <FaShareAlt />
                            <p>Share this item</p>
                        </div>
                        <div className='flex gap-2 text-[40px] mt-2'>
                            <FaFacebookSquare />
                            <FaLinkedin />
                            <FaTwitterSquare />
                        </div>
                    </div>
                    <div className='p-10 mt-10 m-2 rounded border border-gray-400'>
                        <p className='text-4xl font-semibold text-gray-600'>Description</p>
                        <p className='mt-2 text-gray-400'>

                            During the times of the Aztec and Mayan civilizations, there's evidence to suggest that Chia seeds were consumed as food. Besides satisfying hunger, Chia seeds were believed to have various medicinal properties by the Aztecs and the Mayans. As a result, they would often consume Chia seeds for general well-being.

                            Chia seeds contain ample Omega-3 fatty acids, quercetin, campesterol, chlorogenic acid, and caffeic acid which are anti-oxidants. They also have potassium, magnesium, iron, calcium, and both soluble and insoluble dietary fibers. Consuming two teaspoons of Chia seeds daily can increase body energy and efficiency.

                            Due to the high amount of antioxidants, Chia seeds enhance the body's disease resistance. By improving the metabolic system, it assists in weight loss. It also helps maintain normal blood sugar levels, thereby reducing diabetes risks.

                            Chia seeds play a pivotal role in bone health due to their high calcium content. They are believed to reduce the risk of colon cancer by keeping the colon clean. Chia seeds help eliminate toxins from the body and alleviate acidity problems.

                            Doctors believe that Chia seeds can also promote better sleep. Not just that, they relieve pain in the legs and joints and help maintain the health of the skin, hair, and nails.

                            Chia seeds contain an anti-oxidant named chlorogenic acid which plays a significant role in blood pressure regulation. The Omega-3 fatty acids present are beneficial for heart health and provide protection from various heart diseases.

                            These Omega-3 fatty acids in Chia seeds are very beneficial for our skin and hair. They also play a vital role in keeping our bodies hydrated. The anti-oxidants present in Chia seeds help in new cell generation in our skin. Thus, it plays an anti-aging role and prevents premature aging signs.

                            Its anti-oxidant properties can fight against cancer. Chia seeds control sugar levels in our blood and assist in insulin production. It helps eliminate toxic substances from the body.

                            Chia seeds are a tasteless and odorless food. There's no need to cook them before consuming them. They can be easily soaked in water and consumed. If desired, they can be mixed with oats, pudding, juices, smoothies, etc. They can also be sprinkled on yogurt, cereal, cooked vegetables, or salads.

                            Chia seeds assist in weight control.
                        </p>
                        <p className='mt-5 text-4xl text-gray-600 font-semibold'>Features</p>
                        <ul className='text-gray-600'>
                            <li>1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, repellat!</li>
                            <li>2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, repellat!</li>
                            <li>3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, repellat!</li>
                            <li>4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, repellat!</li>
                            <li>5. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, repellat!</li> 
                        </ul> 
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default ProductDetails;