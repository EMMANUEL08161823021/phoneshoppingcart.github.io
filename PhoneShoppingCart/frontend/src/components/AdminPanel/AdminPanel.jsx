import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
    const [product, setProduct] = useState({
        name: '',
        weight: '',
        height: '',
        battery: '',
        capacity: '',
        amount: '',
        category: '',
        image: '',
    });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        if (!token) {
            alert('Please login as admin');
            navigate('/login');
            return;
        }
        try {
            const response = await fetch('/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ ...product, amount: Number(product.amount) }),
            });
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message || 'Failed to add product');
            }
            alert('Product added successfully');
            setProduct({
                name: '',
                weight: '',
                height: '',
                battery: '',
                capacity: '',
                amount: '',
                category: '',
                image: '',
            });
        } catch (err) {
            console.error(err);
            setError(err.message);
        }
    };

    return (
        <div className="container mt-5">
            <h2>Add Product</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="weight" className="form-label">Weight</label>
                    <input
                        type="text"
                        className="form-control"
                        id="weight"
                        name="weight"
                        value={product.weight}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="height" className="form-label">Height</label>
                    <input
                        type="text"
                        className="form-control"
                        id="height"
                        name="height"
                        value={product.height}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="battery" className="form-label">Battery</label>
                    <input
                        type="text"
                        className="form-control"
                        id="battery"
                        name="battery"
                        value={product.battery}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="capacity" className="form-label">Capacity</label>
                    <input
                        type="text"
                        className="form-control"
                        id="capacity"
                        name="capacity"
                        value={product.capacity}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="amount" className="form-label">Amount</label>
                    <input
                        type="number"
                        className="form-control"
                        id="amount"
                        name="amount"
                        value={product.amount}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Category</label>
                    <select
                        className="form-control"
                        id="category"
                        name="category"
                        value={product.category}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Category</option>
                        <option value="Phones">Phones</option>
                        <option value="Laptops">Laptops</option>
                        <option value="Ipads">Ipads</option>
                        <option value="Watches">Watches</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image URL</label>
                    <input
                        type="text"
                        className="form-control"
                        id="image"
                        name="image"
                        value={product.image}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add Product</button>
            </form>
        </div>
    );
};

export default AdminPanel;