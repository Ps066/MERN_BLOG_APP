import './singlepost.css'

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg" alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEditContainer">
          <i className="singlePostEditIcon fa-solid fa-pen-to-square"></i>
          <i className="singlePostEditIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author : <b>Prashant</b></span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDec">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis rem est, voluptates facere deleniti ad beatae corrupti consectetur aliquam quo eveniet illo earum, ullam perspiciatis doloribus voluptatum, accusantium officia provident vel. Ex, expedita ipsum quis odio repudiandae a deserunt quae eaque in quod provident, porro sint ducimus tempore facere quos minima obcaecati voluptatibus? Aliquam, sequi omnis velit odio aspernatur soluta quaerat dolores unde, eligendi eum error eius ducimus voluptate. Porro at id, quis atque magni sit delectus debitis rem alias veritatis molestiae odio consectetur, modi, neque earum excepturi laborum. Numquam ratione, maxime deserunt, in aliquam molestias tempore explicabo, pariatur ipsum debitis rem blanditiis dolore totam soluta autem nobis sit aut commodi doloremque quibusdam eum. Tempora provident eos ullam fugiat, sunt hic excepturi vitae ea itaque eius impedit at expedita omnis quasi dolorem reprehenderit corrupti aliquam quae? Tempore consequuntur a itaque eveniet laborum quisquam consectetur excepturi est, repellat, debitis commodi. Repellat, incidunt aspernatur dolore quibusdam minima, cum illum vitae placeat odit officia cupiditate. Pariatur ea quos iste officiis ipsum voluptas omnis? Placeat, cum dolorem. Maiores nisi delectus distinctio illum inventore perspiciatis corporis deleniti quibusdam fugiat asperiores officia vel ipsa quidem reprehenderit cum consectetur neque aliquid autem sed vero
        </p>
      </div>
    </div>
  )
}

export default SinglePost