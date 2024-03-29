import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export const Navbar = ({ loadProducts, setProducts }) => {
    let location = useLocation()

    const handleChange = async (e) => {
        loadProducts.then((data) => {
            let filterProducts = data.filter((product) => {
                return product.title.toLowerCase().includes(e.target.value.toLowerCase()) || product.description.toLowerCase().includes(e.target.value.toLowerCase()) 
            })
            setProducts(filterProducts)
        })
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Build With Innovation Private Limited</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {localStorage.getItem('token') ? <><li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
                        </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/cart' ? 'active' : ''}`} to="/cart">Cart</Link>
                            </li></> : ''}
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" name='search' type="search" onChange={handleChange} placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )

}

