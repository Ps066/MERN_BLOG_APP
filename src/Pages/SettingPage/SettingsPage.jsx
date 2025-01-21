import SideBar from "../../Components/SideBarComponent/SideBar";
import "./settingspage.css";

const SettingsPage = () => {
  return (
    <div className='settingsPage'>
      <div className='settingsWrapper'>
        <div className='settingsTitle'>
          <span className='settingUpdateTitle'>Update Your Account</span>
          <span className='settingDeleteTitle'>Delete Your Account</span>
        </div>
        <form className='settingsForm'>
          <label>Profile Picture</label>
          <div className='settingsPP'>
            <img
              src='https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png'
              alt=''
              className='settingProfileImg'
            />
            <label htmlFor="fileInput">
            <i className="settingsPPIcon fa-solid fa-circle-user"></i>
            <input type="file" id="fileInput" style={{display:"none"}}/>
            </label>
          </div>
          <label>Username</label>
          <input type="text" placeholder="Ps066" />
          <label>Email</label>
          <input type="email" placeholder="prashantshukla0666@gmail.com" />
          <label>Password</label>
          <input type="password" />

          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <SideBar />
    </div>
  );
};

export default SettingsPage;
