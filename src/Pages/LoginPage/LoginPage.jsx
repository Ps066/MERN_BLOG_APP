import { Link } from 'react-router-dom'
import './loginpage.css'

const LoginPage = () => {
  return (
    <div className="loginPage">
        <div className="loginCard">
            <h1 className="loginHeadding">Login</h1>
            <form className="loginForm">
                <label htmlFor="">Email</label>
                <input type="email" placeholder='Enter Your Email' />
                <label htmlFor="">Password</label>
                <input type="password" placeholder='Enter Your Password' />
                <button className="loginFormButton">Login</button>
                <p className="loginConfirmText">Don't have an account? 
                    <span>
                        <Link className='link' to="/register"> Register Now!</Link>
                    </span>
                </p>
                <hr />
                <div className="loginFormIconButtons">
                    <i className="loginIconButton fa-brands fa-google"></i>
                    <i className="loginIconButton fa-brands fa-apple"></i>
                    <i className="loginIconButton fa-brands fa-facebook"></i>
                    <i className="loginIconButton fa-brands fa-windows"></i>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LoginPage