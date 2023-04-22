import React from 'react';
import './LoginPage.css';
//import Registation from './Registation';

const LoginPage = (props) => {
    return (
        <div className='loginPage flex'>
            <div className="box1">
                <h1 style={{fontSize:40,color:"rgb(87, 87, 193)",padding:"10px 0px"}}>Facebook</h1>
                <p style={{fontSize:20}}>Facebook help you connect and share with</p>
                <p  style={{fontSize:20}}>the people in your life</p>
            </div>
            <div className="box2 flex">
                <input type='email' placeholder='Email Address...'/>
                <input type='password' placeholder='Password...'/>
                <input type='submit' name='Log In'/>
                <span style={{color:"rgb(87, 87, 193)",fontWeight:"500",padding:"5px 0"}}>Forget Password</span>
                <button>Create a New Account</button>
            </div>
            {/* <div className="box2 flex">
                <Registation/>
            </div> */}
        </div>
    );
}

export default LoginPage;