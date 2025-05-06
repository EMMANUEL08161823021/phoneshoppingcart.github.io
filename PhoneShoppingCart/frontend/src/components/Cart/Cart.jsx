import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Cart = () => {
    const [cart, setCart] = useState({ items: [] });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Fetch cart data on mount
    useEffect(() => {
        const fetchCart = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    setError('Please log in to view your cart');
                    setLoading(false);
                    return;
                }

                const response = await fetch('/api/cart', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });
                if (!response.ok) {
                    const text = await response.text();
                    console.log('GET /api/cart failed with status:', response.status, 'Response:', text);
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setCart(data);
                setError(null);
            } catch (err) {
                console.error('Fetch cart error:', err);
                setError(`Failed to load cart: ${err.message}`);
            } finally {
                setLoading(false);
            }
        };
        fetchCart();
    }, []);

    // Update quantity of an item
    const updateQuantity = async (productId, quantity) => {
        if (quantity < 1) return; // Prevent negative quantities
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                setError('Please log in to update cart');
                return;
            }
            console.log('Sending PUT /api/cart/:productId:', { productId, quantity });
            const response = await fetch(`/api/cart/${productId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ quantity }),
            });
            if (!response.ok) {
                const text = await response.text();
                console.log('PUT /api/cart/:productId failed with status:', response.status, 'Response:', text);
                try {
                    const errorData = JSON.parse(text);
                    throw new Error(`Failed to update quantity: ${errorData.message || response.statusText} (Status: ${response.status})`);
                } catch (jsonErr) {
                    throw new Error(`Failed to update quantity: Non-JSON response (Status: ${response.status}, Response: ${text.slice(0, 100)}...)`);
                }
            }
            const updatedCart = await response.json();
            console.log('Updated cart:', updatedCart);
            setCart(updatedCart);
            setError(null);
        } catch (err) {
            console.error('Update quantity error:', err);
            setError(err.message);
        }
    };

    // Remove item from cart
    const removeItem = async (productId) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                setError('Please log in to update cart');
                return;
            }
            console.log('Sending DELETE /api/cart/:productId:', { productId });
            const response = await fetch(`/api/cart/${productId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            if (!response.ok) {
                const text = await response.text();
                console.log('DELETE /api/cart/:productId failed with status:', response.status, 'Response:', text);
                throw new Error(`Failed to remove item: ${text || response.statusText} (Status: ${response.status})`);
            }
            const updatedCart = await response.json();
            setCart(updatedCart);
            setError(null);
        } catch (err) {
            console.error('Remove item error:', err);
            setError(err.message);
        }
    };

    // Calculate total price
    const calculateTotal = () => {
        return cart.items.reduce((total, item) => {
            return total + (item.productId.amount * item.quantity);
        }, 0).toFixed(2);
    };

    // Handle checkout (placeholder)
    const handleCheckout = () => {
        alert('Proceeding to checkout (placeholder)');
    };

    return (
        <div>
            <Navbar />
            <div style={{ height: '56px' }}></div>
            <div className="container mt-5">
                <h2>Your Cart</h2>
                {loading && <p>Loading cart...</p>}
                {error && <div className="alert alert-danger">{error}</div>}
                {!loading && !error && (
                    <>
                        {cart.items.length > 0 ? (
                            <div>
                                <div className="row">
                                    {cart.items.map((item) => (
                                        <div className="col-12 mb-3" key={item.productId._id}>
                                            <div className="card flex-row">
                                                <img
                                                    src={item.productId.image || 'https://via.placeholder.com/100'}
                                                    className="card-img-left"
                                                    alt={item.productId.name}
                                                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                                />
                                                <div className="card-body">
                                                    <h5 className="card-title">
                                                        <Link to={`/product/${item.productId._id}`}>
                                                            {item.productId.name}
                                                        </Link>
                                                    </h5>
                                                    <p className="card-text">
                                                        Price: ${item.productId.amount} | Quantity: {item.quantity}
                                                    </p>
                                                    <div className="d-flex align-items-center">
                                                        <button
                                                            className="btn btn-sm btn-outline-secondary me-2"
                                                            onClick={() => updateQuantity(item.productId._id, item.quantity - 1)}
                                                        >
                                                            -
                                                        </button>
                                                        <span>{item.quantity}</span>
                                                        <button
                                                            className="btn btn-sm btn-outline-secondary ms-2"
                                                            onClick={() => updateQuantity(item.productId._id, item.quantity + 1)}
                                                        >
                                                            +
                                                        </button>
                                                        <button
                                                            className="btn btn-sm btn-danger ms-3"
                                                            onClick={() => removeItem(item.productId._id)}
                                                        >
                                                            Remove
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-4">
                                    <h4>Total: ${calculateTotal()}</h4>
                                    <button
                                        className="btn btn-primary"
                                        onClick={handleCheckout}
                                    >
                                        Proceed to Checkout
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <p>Your cart is empty. <Link to="/">Shop now</Link></p>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;

