import './registerpage.css'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <div className="RegisterPage">
        <div className="RegisterCard">
            <h1 className="RegisterHeadding">Register</h1>
            <form className="RegisterForm">
                <label htmlFor="">Username</label>
                <input type="text" placeholder='Enter Your Username' />
                <label htmlFor="">Email</label>
                <input type="email" placeholder='Enter Your Email' />
                <label htmlFor="">Password</label>
                <input type="password" placeholder='Enter Your Password' />
                <button className="RegisterFormButton">Register</button>
                <p className="RegisterConfirmText">Already have an account? 
                    <span>
                        <Link className='link' to="/login"> Login</Link>
                    </span>
                </p>
                <hr />
                <div className="RegisterFormIconButtons">
                    <i className="RegisterIconButton fa-brands fa-google"></i>
                    <i className="RegisterIconButton fa-brands fa-apple"></i>
                    <i className="RegisterIconButton fa-brands fa-facebook"></i>
                    <i className="RegisterIconButton fa-brands fa-windows"></i>
                </div>
            </form>
        </div>
    </div>
  )
}

export default RegisterPage