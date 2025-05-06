import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Homepage = () => {
    const tabItems = ['Phones', 'Laptops', 'Ipads', 'Watches'];
    const [activeTab, setActiveTab] = useState(0);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                console.log('Fetching products for category:', tabItems[activeTab]);
                const response = await fetch(`/api/products?category=${tabItems[activeTab]}`);
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const data = await response.json();
                console.log('Products fetched:', data);
                setProducts(data);
                setError(null);
            } catch (err) {
                console.error('Fetch error:', err);
                setError('Failed to load products. Please try again.');
                setProducts([]);
            }
        };
        fetchProducts();
    }, [activeTab]);

    return (
        <div>
            {/* <Navbar /> */}
            <div style={{ height: '56px' }}></div>
            <div
                className="h-30vh w-100 text-center bg-dark d-flex justify-content-center align-items-center text-white"
                style={{ height: '50vh' }}
            >
                <p>EXPLORE GADGETS</p>
            </div>
            <div className="container mt-5">
                <ul className="nav nav-tabs justify-content-between">
                    {tabItems.map((item, index) => (
                        <li className="nav-item" key={index}>
                            <button
                                className={`nav-link ${activeTab === index ? 'active' : ''}`}
                                onClick={() => setActiveTab(index)}
                            >
                                <h6 className="m-0">{item}</h6>
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="tab-content mt-4">
                    {error && <div className="alert alert-danger">{error}</div>}
                    <div className="row">
                        {products.length > 0 ? (
                            products.map((product) => (
                                <div className="col-6 col-md-3 mb-4" key={product._id}>
                                    <Link to={`/product/${product._id}`} style={{ textDecoration: 'none' }}>
                                        <div className="card h-100">
                                            <img
                                                src={product.image || 'https://via.placeholder.com/150'}
                                                className="card-img-top"
                                                alt={product.name}
                                            />
                                            <div className="card-body">
                                                <h6 className="card-title">{product.name}</h6>
                                                <p className="card-text">${product.amount}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <p>No products available</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;