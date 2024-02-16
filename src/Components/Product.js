import React from 'react'
import { Link } from 'react-router-dom'

export default function Product(props) {
    let {title, description, price, thumbnail} = props.product
    return (
        <div className="card">
            <img className="card-img-top" src={thumbnail} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title d-flex justify-content-between">
                    <span>{title}</span>
                    <span>₹{price}</span>
                </h5>
                <p className="card-text">{description}</p>
                <Link to='#' className="btn btn-primary" onClick={(e)=>{props.handleCart(e, props.product)}}>Add To Cart</Link>
            </div>
        </div>
    )
}
