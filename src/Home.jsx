



function Home({missname, misssurname, misspass, name, surname, pass, confirmRegister, setSurname, setName, setPass}) {

    return ( 
        <div className="container">

        <div className='reg-form-container'>
          <div className="missed-fields">
          {missname && <h1 style={{marginTop: '-50px'}}>You Missing Name Field</h1>}
          {misssurname && <h1 style={{marginTop: '-50px'}}>You Missing SurName Field</h1>}
          {misspass && <h1 style={{marginTop: '-50px'}}>You Missing Password Field</h1>}
          </div>
          <div className='form-container'>
            <h2>SignUp Form</h2>

            <input className='name-field remove-border-black'
              placeholder="Name"
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input className='surname-field remove-border-black'
              placeholder="SurName"
              type='text'
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />

            <input className='pass-field remove-border-black'
              placeholder="Password"
              type='password'
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />

            <button onClick={confirmRegister} className='register-btn'>Register</button>
          </div>
        </div>
      </div>
     );
}
 
export default Home;