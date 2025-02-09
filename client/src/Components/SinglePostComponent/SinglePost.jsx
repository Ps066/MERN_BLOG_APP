import { Link, useLocation } from "react-router-dom";
import "./singlepost.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../Context/Context";

const SinglePost = () => {
  //path to images
  const PF = process.env.REACT_APP_IMAGE_PATH;

  // fetching currently logged in user
  const { user } = useContext(AuthContext);

  // usestate to store the current post state
  const [viewPost, setViewPost] = useState([]);

  // useState for update data
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  // useState for toggling between edit mode
  const [editMode, setEditMode] = useState(false);

  // fetching current location from the page url
  const location = useLocation();

  // in this method we are spliting the pathname attribute of location object with /
  // and selecting last element that is id
  const id = location.pathname.split("/")[2];

  //useEffect that will trigger when id is changed
  useEffect(() => {
    const fetchpost = async () => {
      const res = await axios.get("/post/" + id);
      setViewPost(res.data);
    };
    fetchpost();
  }, [id]);

  // handel delete function
  const handelDelete = async () => {
    try {
      await axios.delete(`/post/${viewPost._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (error) {}
  };

  // function to handel edit
  const handeEdit = async () => {
    setEditMode(true);
    setTitle(viewPost.title);
    setDesc(viewPost.dec);
  };


  // function to handel update
  const handelUpdate = async()=>{
    try {
      await axios.put(`/post/${viewPost._id}`, {
          username: user.username,
          dec: desc,
          title:title
      })
      // window.location.reload();
      setEditMode(false)
    } catch (error) {
      
    }
    

  }

  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        {viewPost.photo && (
          <img src={PF + viewPost.photo} alt='' className='singlePostImg' />
        )}

        {editMode ? (
          <input type="text" className="singlepostTitleEdit" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        ) : (
          <h1 className='singlePostTitle'>
            {title}
            {viewPost.username === user?.username && (
              <div className='singlePostEditContainer'>
                <i
                  className='singlePostEditIcon fa-solid fa-pen-to-square'
                  onClick={handeEdit}
                ></i>
                <i
                  className='singlePostEditIcon fa-solid fa-trash'
                  onClick={handelDelete}
                ></i>
              </div>
            )}
          </h1>
        )}

        <div className='singlePostInfo'>
          <span className='singlePostAuthor'>
            Author :{" "}
            <Link to={`/?user=${viewPost.username}`} className='link'>
              <b>{viewPost.username}</b>
            </Link>
          </span>
          <span className='singlePostDate'>
            {new Date(viewPost.createdAt).toDateString()}
          </span>
        </div>
        {
          editMode?(
            <>
              <textarea value={desc} className="singlePostDecEdit" onChange={(e)=>setDesc(e.target.value)}></textarea>
              <button className="updateBtn" onClick={handelUpdate}>Update</button>
            </>
          ):(
            <p className='singlePostDec'>{desc}</p>
          )
        }


        
      </div>
    </div>
  );
};

export default SinglePost;
