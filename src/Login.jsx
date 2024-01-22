import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform any necessary validation before calling the onLogin function
    // You might want to add more validation logic based on your requirements

    // Call the onLogin function with the entered credentials
    onLogin({ username, password });
  };

  return ( 
    <div className="container">
      <div className='reg-form-container'>
        <div className='form-container'>
          <h2>Login Form</h2>

          <input
            className='name-field remove-border-black'
            type='text'
            placeholder='Username or Email'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            className='pass-field remove-border-black'
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleLogin} className='login-button'>Login</button>
          <span>check console</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
