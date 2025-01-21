import './viewpostpage.css'
import SideBar from '../../Components/SideBarComponent/SideBar'
import SinglePost from '../../Components/SinglePostComponent/SinglePost'

const ViewPostPage = () => {
  return (
    <div className="viewPost">
        <SinglePost/>
        <SideBar />
    </div>
  )
}

export default ViewPostPage