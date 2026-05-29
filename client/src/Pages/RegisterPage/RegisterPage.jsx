import { useState } from "react";
import "./registerpage.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../api"

const RegisterPage = () => {
  // useState for storeing the values
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // useStae to store error status
  const [err, setErr] = useState(false);

  // navigation hook (client-side, avoids full-page reload hitting the host)
  const navigate = useNavigate();

  // function to handel submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && navigate("/login");
    } catch (error) {
      setErr(true);
    }
  };

  return (
    <div className='RegisterPage'>
      <div className='RegisterCard'>
        <h1 className='RegisterHeadding'>Register</h1>
        <form className='RegisterForm' onSubmit={handleSubmit}>
          <label htmlFor=''>Username</label>
          <input
            type='text'
            placeholder='Enter Your Username'
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor=''>Email</label>
          <input
            type='email'
            placeholder='Enter Your Email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor=''>Password</label>
          <input
            type='password'
            placeholder='Enter Your Password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='RegisterFormButton' type='submit'>
            Register
          </button>
          {err && (
            <span className="errmsg"
            >
              Something went wrong!
            </span>
          )}
          <p className='RegisterConfirmText'>
            Already have an account?
            <span>
              <Link className='link' to='/login'>
                Login
              </Link>
            </span>
          </p>
          <hr />
          <div className='RegisterFormIconButtons'>
            <i className='RegisterIconButton fa-brands fa-google'></i>
            <i className='RegisterIconButton fa-brands fa-apple'></i>
            <i className='RegisterIconButton fa-brands fa-facebook'></i>
            <i className='RegisterIconButton fa-brands fa-windows'></i>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
