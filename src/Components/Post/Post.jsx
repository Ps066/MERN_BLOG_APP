import './post.css'

const Post = () => {
  return (
    <div className="post">
        <img src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Mahindra-BE/6e/9263/1732689215786/front-left-side-47.jpg" alt="" className="postImg" />
        <div className="postInfo">
            <div className="postCategories">
                <span className="postCats">Sport</span>
                <span className="postCats">Tech</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor sit amet.</span>
            <hr />
            <p className="postDec">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate ducimus similique, tempore labore voluptatibus temporibus quaerat! Deserunt, quia error ducimus quas laborum expedita atque quidem placeat modi quod molestiae soluta.
            </p>
            <span className="postDate">1 hour ago</span>
        </div>   
    </div>
  )
}

export default Post