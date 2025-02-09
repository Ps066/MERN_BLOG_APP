import { useEffect, useState } from 'react'
import axios from 'axios';
import './sidebar.css'
import { Link } from 'react-router-dom';

const SideBar = () => {
  // useState to store active categories
  const [activeCat, setActiveCat] = useState([]);

  // useEffect to fetch categories
  useEffect(()=>{
    const fetchCats= async ()=>{
      const res = await axios.get('/category');
      setActiveCat(res.data);
    }
    fetchCats();
  },[])

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
          {
            activeCat.map((c)=>(
              <Link className='link' to={`/?cat=${c.name}`}>
                <li className="sideBarListItem">{c.name}</li>
              </Link>
            ))
          }
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