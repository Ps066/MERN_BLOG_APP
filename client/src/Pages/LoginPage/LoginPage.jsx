import { Link } from 'react-router-dom'
import './loginpage.css'
import { useContext, useRef } from 'react'
import { AuthContext } from '../../Context/Context';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';

const LoginPage = () => {
    // fetching id pass using useRef 
    const userRef = useRef();
    const passRef = useRef();

    // importing our context and preparing dispatch
    const {dispatch, isFetching} = useContext(AuthContext);

    // function to handel login and also to handel contetx api
    const handelSubmit = async (e)=>{
        e.preventDefault();
        dispatch({type:"LOGIN_START"});
        try {
            const res = await axios.post("/auth/login",{
                username: userRef.current.value,
                password: passRef.current.value,
            });
            dispatch({type:"LOGIN_SUCCESS",payload: res.data});
        } catch (error) {
            dispatch({type:"LOGIN_FAILURE"});
        }
    }


  return (
    <div className="loginPage">
        <div className="loginCard">
            <h1 className="loginHeadding">Login</h1>
            <form className="loginForm" onSubmit={handelSubmit}>
                <label htmlFor="">Username</label>
                <input type="text" placeholder='Enter Your username...' ref={userRef} />
                <label htmlFor="">Password</label>
                <input type="password" placeholder='Enter Your Password' ref={passRef}/>
                <button className="loginFormButton" type='submit'>
                    {
                        isFetching? <CircularProgress color='white' size="20px" /> :"Login"
                    }
                </button>
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