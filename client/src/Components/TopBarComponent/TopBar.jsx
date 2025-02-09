import "./topbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/Context";
import { useContext } from "react";

const TopBar = () => {

  //path to images
  const PF = process.env.REACT_APP_IMAGE_PATH;

  // import user and dispatch
  const { user, dispatch } = useContext(AuthContext);

  // function to handel logout
  const handelLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className='topBar'>
      <div className='topLeft'>
        <i className='topIcons fa-brands fa-square-facebook'></i>
        <i className='topIcons fa-brands fa-square-twitter'></i>
        <i className='topIcons fa-brands fa-square-pinterest'></i>
        <i className='topIcons fa-brands fa-square-instagram'></i>
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>
            <Link className='link' to='/'>
              HOME
            </Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/'>
              ABOUT
            </Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/'>
              CONTACT
            </Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/write'>
              WRITE
            </Link>
          </li>
          <li className='topListItem' onClick={handelLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className='topRight'>
        <Link to="/settings">
          {user ? (
            <img
              src={
                user.profilePic
                  ? PF+user.profilePic
                  : "https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png"
              }
              alt=''
              className='topImg'
            />
          ) : (
            <Link className='link' to='/login'>
              <div className='LoginBtn'>Login</div>
            </Link>
          )}
        </Link>
        <i className='topSearchIcon fa-solid fa-magnifying-glass'></i>
      </div>
    </div>
  );
};

export default TopBar;
