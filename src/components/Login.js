import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ setUser }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://demo2.z-bit.ee/api/login', {
                username,
                password
            });
            localStorage.setItem('userToken', response.data.token);
            setUser({ username, token: response.data.token });
        } catch (error) {
            setError('Failed to login. Please check your credentials.');
            console.error('Login error:', error);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button type="submit">Log In</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};

export default Login;
