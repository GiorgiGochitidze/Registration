import './App.css'
import React, { useState } from 'react';
import { Routes, BrowserRouter, Link, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';

function App() {
  const [register, setRegister] = useState(true); // Set to true initially
  const [logIn, setLogIn] = useState(true);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [pass, setPass] = useState('');
  const [data, setData] = useState([]);

  function confirmRegister() {
    const userData = {
      name: name,
      surname: surname,
      pass: pass
    };

    setData(userData);
    console.log(userData);
  }

  const handleLogin = (credentials) => {
    // Your login logic here using the credentials
    console.log('Login credentials:', credentials);
  };

  return (
    <BrowserRouter>
      <div>
        <header>
          <nav>
            <Link to="/login"><button className='button'>LogIn</button></Link>
            {register && <Link to="/"><button className='button'>Register</button></Link>}
          </nav>
        </header>

        <Routes>
          <Route
            path='/login'
            element={<Login onLogin={handleLogin} setRegister={setRegister} />}
          />
          <Route
            path='/'
            element={<Home
              name={name}
              surname={surname}
              pass={pass}
              confirmRegister={confirmRegister}
              logIn={logIn}
              register={register}
              setSurname={setSurname}
              setName={setName}
              setPass={setPass}
            />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
