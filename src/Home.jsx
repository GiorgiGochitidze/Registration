function Home({ name, surname, pass, confirmRegister, setSurname, setName, setPass }) {
  const handleConfirmRegister = () => {
    const userData = {
      name: name,
      surname: surname,
      pass: pass
    };

    // Update the state with the user data
    setName('');
    setSurname('');
    setPass('');

    console.log(userData);
  };

  return (
    <div className="container">
      <div className='reg-form-container'>
        <div className='form-container'>
          <h2>SignUp Form</h2>

          <input
            className='name-field remove-border-black'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className='surname-field remove-border-black'
            type='text'
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />

          <input
            className='pass-field remove-border-black'
            type='password'
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />

          <button onClick={handleConfirmRegister} className='register-btn'>Register</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
