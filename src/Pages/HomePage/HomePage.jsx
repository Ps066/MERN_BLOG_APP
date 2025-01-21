import Header from '../../Components/HeaderComponent/Header'
import Posts from '../../Components/PostsComponent/Posts'
import SideBar from '../../Components/SideBarComponent/SideBar'
import './homepage.css'

const HomePage = () => {
  return (
    <>
        <Header />
        <div className="home">
          <Posts/>
          <SideBar />
        </div>
    </>
  )
}

export default HomePage