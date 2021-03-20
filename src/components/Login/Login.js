import React from 'react'
import './Login.css';
import '../../App.css';

export default function Login() {
    return (

        <div className="wrapper">
            <div className="login-wrapper">
                <h1>Login please</h1>
                <form>
                    <label>
                        <p>Username</p>
                        <input type="text"/>
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="password"/>
                    </label>
                    <div className="btn-container">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
