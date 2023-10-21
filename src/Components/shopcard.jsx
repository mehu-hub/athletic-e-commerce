import React from "react";

const ShopCard = (props) => {
    return (
        <>
            <div className="single_cart">
                <img src={props.image} style={{ width: 300 }} alt="" />
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <p>Price: {props.price}</p>
                <button className="btn">BUY NOW</button>
            </div>
        </>
    )
}
export default ShopCard;