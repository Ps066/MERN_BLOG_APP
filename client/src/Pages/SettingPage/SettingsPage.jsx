import { useContext, useState } from "react";
import SideBar from "../../Components/SideBarComponent/SideBar";
import "./settingspage.css";
import { AuthContext } from "../../Context/Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const SettingsPage = () => {
  //path to images
  const PF = process.env.REACT_APP_IMAGE_PATH;

  // navigtion hook
  const navigate = useNavigate();


  // fetch the current user
  const {user, dispatch} = useContext(AuthContext)

  // useState to hold user update settings
  const [profilepic, setProfilePic] = useState(null);
  const [uname , setUname] = useState(user.username);
  const [email , setEmail] = useState(user.email);
  const [pass , setPass] = useState(user.password);


  const handelUserUpdate = async (e)=>{
    e.preventDefault();
    dispatch({type:"UPDATE_START"});
    const updateUser ={
      userID: user._id,
      username:uname,
      email:email,
      password:pass,
    }

    if(profilepic){
      const data = new FormData();
      const fileExtension = profilepic.name.split('.').pop(); // Extract file extension
      const filename = `${Date.now()}_${user._id}.${fileExtension}`;
      data.append("name", filename);
      data.append("file", profilepic);
      updateUser.profilePic = filename;
      try {
        await axios.post('/upload',data);
      } catch (error) {
        console.log(error);
      }
    }else {
      // If no new image is selected, retain the existing profilePic
      updateUser.profilePic = user.profilePic;
    }
    try {
      const res = await axios.put(`/user/${user._id}`, updateUser);
      console.log(res.data);
      dispatch({type:"UPDATE_SUCCESS", payload:res.data});
      navigate("/settings");
      // window.location.reload(`/settings`);
    } catch (error) {
      console.log(error);
      dispatch({type:"UPDATE_FAILURE"});
    }
  }

  // handel delete user function 
  const handelDeleteUser = async ()=>{
    try {
      await axios.delete(`/user/${user._id}`,
        {data:{
          userID:user._id
        }}
      )
      dispatch({type:"LOGOUT"});
      navigate("/");
    } catch (error) {
      
    }
  }

  return (
    <div className='settingsPage'>
      <div className='settingsWrapper'>
        <div className='settingsTitle'>
          <span className='settingUpdateTitle'>Update Your Account</span>
          <span className='settingDeleteTitle' onClick={handelDeleteUser}>Delete Your Account</span>
        </div>
        <form className='settingsForm'>
          <label>Profile Picture</label>
          <div className='settingsPP'>
            <img
              src={
                profilepic?(
                  URL.createObjectURL(profilepic)
                ):(
                  user.profilePic
                  ? PF+user.profilePic
                  : "https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png"
                )
                
              }
              alt=''
              className='settingProfileImg'
            />
            <label htmlFor="fileInput">
            <i className="settingsPPIcon fa-solid fa-circle-user"></i>
            <input type="file" id="fileInput" style={{display:"none"}} onChange={(e)=>setProfilePic(e.target.files[0])}/>
            </label>
          </div>
          <label>Username</label>
          <input type="text"   value={uname} onChange={(e)=>setUname(e.target.value)}/>
          <label>Email</label>
          <input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <label>Password</label>
          <input type="password" onChange={(e)=>setPass(e.target.value)} placeholder="type to set new pass"/>

          <button className="settingsSubmit" onClick={handelUserUpdate}>Update</button>
        </form>
      </div>
      <SideBar />
    </div>
  );
};

export default SettingsPage;
