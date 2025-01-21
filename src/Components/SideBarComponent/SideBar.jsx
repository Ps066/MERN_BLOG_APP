import './sidebar.css'

const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="sideBarItem">
        <span className="sideBarTitle">ABOUT ME</span>
        <img src="https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, cumque doloremque alias cum et esse neque porro?.</p>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">CATEGORIES</span>
        <ul className="sidBarList">
          <li className="sideBarListItem">Music</li>
          <li className="sideBarListItem">Life</li>
          <li className="sideBarListItem">Style</li>
          <li className="sideBarListItem">Sport</li>
          <li className="sideBarListItem">Tech</li>
          <li className="sideBarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sideBarItem">
        <div className="sideBarTitle">FOLLOW US</div>
        <div className="sideBarSocial">
        <i className="SideBarIcons fa-brands fa-square-twitter"></i>
        <i className="SideBarIcons fa-brands fa-square-pinterest"></i>
        <i className="SideBarIcons fa-brands fa-square-facebook"></i>
        <i className="SideBarIcons fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  )
}

export default SideBar