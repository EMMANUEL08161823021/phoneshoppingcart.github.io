import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [cart, setCart] = useState([]);
    const [error, setError] = useState(null);

    // Fetch product by ID
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`/api/products/${id}`);
                if (!response.ok) throw new Error('Failed to fetch product');
                const data = await response.json();
                setProduct(data);
            } catch (err) {
                console.error(err);
                setError('Error fetching product');
            }
        };
        fetchProduct();
    }, [id]);

    // Fetch cart (if user is logged in)
    useEffect(() => {
        const fetchCart = async () => {
            const token = localStorage.getItem('token');
            if (!token) return;
            try {
                const response = await fetch('/api/cart', {
                    headers: { 'Authorization': `Bearer ${token}` },
                });
                if (!response.ok) throw new Error('Failed to fetch cart');
                const data = await response.json();
                setCart(data?.items || []);
            } catch (err) {
                console.error(err);
                setError('Error fetching cart');
            }
        };
        fetchCart();
    }, []);

    // Add to cart
    const addToCart = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            alert('Please login to add items to cart');
            return;
        }
        try {
            const response = await fetch('/api/cart/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ productId: id, quantity }),
            });
            if (!response.ok) throw new Error('Failed to add to cart');
            const data = await response.json();
            setCart(data.items);
            alert('Added to cart');
        } catch (err) {
            console.error(err);
            setError('Error adding to cart');
        }
    };

    // Quantity controls
    const incrementQuantity = () => setQuantity(quantity + 1);
    const decrementQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    if (error) return <div className="container mt-5"><p>{error}</p></div>;
    if (!product) return <div className="container mt-5"><p>Loading...</p></div>;

    return (
        <div>
            <Navbar />
            <div style={{ height: '56px' }}></div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <img
                            src={product.image || 'https://via.placeholder.com/300'}
                            alt={product.name}
                            className="img-fluid"
                        />
                    </div>
                    <div className="col-md-6">
                        <h2>{product.name}</h2>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Info</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Name</td>
                                    <td>{product.name}</td>
                                </tr>
                                <tr>
                                    <td>Weight</td>
                                    <td>{product.weight}</td>
                                </tr>
                                <tr>
                                    <td>Height</td>
                                    <td>{product.height}</td>
                                </tr>
                                <tr>
                                    <td>Battery Health</td>
                                    <td>{product.battery}</td>
                                </tr>
                                <tr>
                                    <td>Capacity</td>
                                    <td>{product.capacity}</td>
                                </tr>
                                <tr>
                                    <td>Amount</td>
                                    <td>${product.amount}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="d-flex align-items-center mb-3">
                            <h5 className="me-3">Quantity:</h5>
                            <button
                                className="btn btn-outline-secondary me-2"
                                onClick={decrementQuantity}
                            >
                                <i className="bi bi-dash-lg"></i>
                            </button>
                            <span>{quantity}</span>
                            <button
                                className="btn btn-outline-secondary ms-2"
                                onClick={incrementQuantity}
                            >
                                <i className="bi bi-plus-lg"></i>
                            </button>
                        </div>
                        <button className="btn btn-primary" onClick={addToCart}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;