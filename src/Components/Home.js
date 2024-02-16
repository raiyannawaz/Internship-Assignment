import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Product from './Product';

export default function Home({ loadProducts, products, setProducts }) {

    let navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('token') === null) {
            navigate('/login')
        }
        else {
            loadProducts.then((data) => {
                setProducts(data)
            }).catch((err) => {
                console.log(err)
            })
            navigate('/')
        }
    }, [])

    const handleChange = (e) => {
        if (e.target.value === 'lowest') {
            loadProducts.then((data) => {
                data.sort((a, b) => {
                    if (a.price > b.price) return 1;
                    if (a.price < b.price) return -1;
                    return 0
                })
                setProducts(data)
            }).catch((err) => {
                console.log(err)
            })
        }
        else if (e.target.value === 'highest') {
            loadProducts.then((data) => {
                data.sort((a, b) => {
                    if (a.price > b.price) return -1;
                    if (a.price < b.price) return 1;
                    return 0
                })
                setProducts(data)

            }).catch((err) => {
                console.log(err)
            })
        }
        else {
            loadProducts.then((data) => {
                setProducts(data)
            }).catch((err) => {
                console.log(err)
            })
        }
    }

    const handleCart = (e, product) => {
        e.preventDefault();

        let cartItems = JSON.parse(localStorage.getItem('cartItems'))

        if (cartItems === null) {
            cartItems = [];
            cartItems.push(product)
            localStorage.setItem('cartItems', JSON.stringify(cartItems))
        }
        else {
            let filterItems = cartItems.filter((item)=>{
                return item.id===product.id
            })
            if(filterItems.length === 0){
                cartItems.push(product)
                localStorage.setItem('cartItems', JSON.stringify(cartItems))
            }
        }
    }

    return (
        <div className="container pb-3">
            <div className="d-flex justify-content-between align-items-center">
                <h2 className='py-4 m-0'>Products</h2>
                <div className='d-flex align-items-center'>
                <p className='m-0 pe-3'>Filter:</p>
                <select id="sort" onChange={handleChange} style={{ border: '1px solid grey', outline: 'none' }}>
                    <option value="relevance">Relevance</option>
                    <option value="lowest">Lowest Price</option>
                    <option value="highest">Highest Price</option>
                </select>
                </div>
            </div>
            <div className="row g-4">
                {products.length === 0 ? <h2>No Items Found!</h2> : products.map((product) => {
                    return <div className="col-lg-3 col-10 mx-auto" key={product.id}>
                        <Product product={product} handleCart={handleCart} />
                    </div>
                })}
            </div>
        </div>
    )
}
