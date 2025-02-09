import "./post.css";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
   //path to images
  const PF = process.env.REACT_APP_IMAGE_PATH;
  return (
    <div className='post'>
      {post.photo && (
        <img
          src={PF+post.photo}
          alt=''
          className='postImg'
        />
      )}
      <div className='postInfo'>
        <div className='postCategories'>
          {
            post.category.map((c)=>(
              <span className='postCats'>{c}</span>
            ))
          }
        </div>
        <Link to={`/post/${post._id}`} className="link" style={{marginTop:"10px"}}>
        <span className='postTitle'>{post.title}</span>
        </Link>
        <hr />
        <p className='postDec'>{post.dec}</p>
        <span className='postDate'>
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
    </div>
  );
};

export default Post;
