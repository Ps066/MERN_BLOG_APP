import { useEffect, useState } from 'react'
import Header from '../../Components/HeaderComponent/Header'
import Posts from '../../Components/PostsComponent/Posts'
import SideBar from '../../Components/SideBarComponent/SideBar'
import './homepage.css'
import axios from "axios"
import { useLocation } from 'react-router-dom'

const HomePage = () => {

  const[posts, setPosts] = useState([]);
  const {search} = useLocation();
  

  useEffect(()=>{
    const fetchPosts = async ()=>{
      const res = await axios.get('/post'+ search)
      setPosts(res.data);
    }
    fetchPosts();
  },[search])
  return (
    <>
        {/* here i have added a line where header will be hidden if search item is there */}
        {
          !search &&
          <Header />
        }
        <div className="home">
          <Posts posts={posts}/>
          <SideBar />
        </div>
    </>
  )
}

export default HomePage