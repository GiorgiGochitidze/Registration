


const Login = ({logName, logSurName, logPass, setLogName, setLogSurName, setLogPass, dataall}) => {

    function check(){
        if(dataall.name === logName){
            console.log(`Correct Name!! Your Name is ${dataall.name}`)
        } else{
            console.log('Wrong Name!!!')
        }

        if(dataall.surname === logSurName){
            console.log(`correct SurName!! Your SurName is ${dataall.surname}`)
        } else{
            console.log('Wrong SurName')
        }

        if(dataall.pass === logPass){
            console.log(`Correct Password!! Your Password is ${dataall.pass}`)
        } else{
            console.log('Wrong Password')
        }
    }

    return ( 
        <div className="login-container">
            <div className="login-form">
            <h2>LogIn Form</h2>

            <input className='name-field remove-border-black'
            value={logName}
            onChange={(e) => setLogName(e.target.value)}
            placeholder="Name"
            type='text'
            />

            <input className='surname-field remove-border-black'
            onChange={(e) => setLogSurName(e.target.value)}
            value={logSurName}
            placeholder="SurName"
            type='text'
            />

            <input className='pass-field remove-border-black'
            onChange={(e) => setLogPass(e.target.value)}
            value={logPass}
            placeholder="Password"
            type='password'
            />

            <button onClick={check} className='login-btn'>LogIn</button>
            </div>
        </div>
     );
}
 
export default Login;