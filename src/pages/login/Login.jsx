import React from "react"
import "./login.css"

export default function Login(){
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">
                        Codershub
                    </h3>
                    <span className="loginDesc">
                        connect with the coders and developers around the world on codershub
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input type="email" placeholder="email" className="loginInput" />
                        <input type="password" placeholder="password" className="loginInput" />
                        <button className="loginButton">Log in</button>
                        <span className="loginForgot">forgot password?</span>
                        <button className="loginRegisterButton">Create a new account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}