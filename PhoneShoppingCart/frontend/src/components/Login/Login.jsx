import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
          });
          const data = await response.json();
          if (data.token) {
            localStorage.setItem('token', data.token);
            navigate('/');
          } else {
            alert(data.message);
          }
      } catch (err) {
          console.error(err);
          alert('Error logging in');
      }
    };

    return (
        <div className="container mt-5">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
              <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                  />
              </div>
              <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                  />
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
    );
};

export default Login;