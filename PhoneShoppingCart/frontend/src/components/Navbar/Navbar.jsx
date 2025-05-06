import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [cartCount, setCartCount] = useState(0);
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

    // Fetch cart count
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
                const count = data.items.reduce((sum, item) => sum + item.quantity, 0);
                setCartCount(count);
            } catch (err) {
                console.error(err);
            }
        };
        fetchCart();
    }, [isLoggedIn]);

    // Handle logout
    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        setCartCount(0);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    Gadgets
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        {!isLoggedIn ? (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">
                                        Login
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">
                                        Register
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <li className="nav-item">
                                <button className="nav-link btn" onClick={handleLogout}>
                                    Logout
                                </button>
                            </li>
                        )}
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">
                                <i className="bi bi-cart"></i>
                                <span className="badge bg-primary ms-1">{cartCount}</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;