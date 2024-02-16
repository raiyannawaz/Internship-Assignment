import React from 'react'
import { Link } from 'react-router-dom'

export default function CartItem({cartItem, handleRemoveCart}) {
    let {title, brand, category, price, thumbnail, id} = cartItem
  return (
    <div className="col-lg-12 col-11 mx-auto">
                <div className="card">
                    <div className="row">
                        <div className="col-3">
                            <img src={thumbnail} className='img-fluid h-100 m-0'/>
                        </div>
                        <div className="col-6">
                            <h4 className='mt-2'>{title}</h4>
                            <p className='mb-2'>Brand: {brand}</p>
                            <p className='mb-2'>Category: {category}</p>
                        </div>
                        <div className="col-3 d-flex flex-column justify-content-around align-items-end pe-4">
                            <Link to="" onClick={(e)=>{handleRemoveCart(e, id)}}><i className='fa fa-trash'></i></Link>
                            <h5>₹{price}</h5>
                        </div>
                    </div>
                </div>
            </div>
  )
}
