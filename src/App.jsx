import './App.css'
import React, { useState } from 'react';
import {Routes, BrowserRouter, Link, Route} from 'react-router-dom';
import Home from './Home';
import Login from './Login';

function App() {
  //header usestates start
  const [register, setRegister] = useState(false);
  const [logIn, setLogIn] = useState(true);
  //header usestates end

  //registration usestates start
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [pass, setPass] = useState('');
  //registration usestates end

  //for data
  const [dataall, setDataall] = useState(null);
  const [logindata, setLogindata] = useState([]);

  //login usestates start
  const [logName, setLogName] = useState('')
  const [logSurName, setLogSurName] = useState('')
  const [logPass, setLogPass] = useState('')
  //login usestates end

  //for missed fields
  const [missname, setMissname] = useState(false)
  const [misssurname, setMisssurname] = useState(false)
  const [misspass, setMisspass] = useState(false)

  function confirmRegister() {
    const userData = {
      name: name,
      surname: surname,
      pass: pass
    };
    
    setDataall(userData);
    console.log(userData);

    if(!name){
      setMissname(true)
    }else{
      setMissname(false)
    }

    if(!surname){
      setMissname(true)
    }else{
      setMissname(false)
    }

    if(!pass){
      setMissname(true)
    }else{
      setMissname(false)
    }
  }

  function toRegister(){
    setLogIn(true)
    setRegister(false)
  }

  function toLogIn(){
    setLogIn(false)
    setRegister(true)
  }

  return (
    <BrowserRouter>
    <div>
    <header>
      <nav>
            
        {logIn && <Link to="/login"><button onClick={toLogIn} className='button'>LogIn</button></Link>}
        
        {register && <Link to='/'><button onClick={toRegister} className='button'>Register</button></Link>}
      </nav>
    </header>

      <Routes>
        <Route path='/' element={<Home  
          name={name}
          surname={surname}
          pass={pass}
          confirmRegister={confirmRegister}
           logIn={logIn}
          register={register}
          setSurname={setSurname}
          setName={setName}
          setPass={setPass}
          missname={missname}
          misssurname={misssurname}
          misspass={misspass} />} />
          
        <Route path='/login' element={<Login 
        logName={logName}
        logSurName={logSurName}
        logPass={logPass}
        setLogName={setLogName}
        setLogSurName={setLogSurName}
        setLogPass={setLogPass}
        setLogindata={setLogindata}
        dataall={dataall}
        />} />
      </Routes>

        </div>
    </BrowserRouter>
  );
}

export default App;
