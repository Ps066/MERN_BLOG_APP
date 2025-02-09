import { useContext, useState } from "react";
import "./writepage.css";
import { AuthContext } from "../../Context/Context";
import axios from "axios";

const WritePage = () => {
    // useState methods to fetch the data
    const [title, setTitle] = useState("")
    const [dec, setDesc] = useState("")
    const [file, setFile] = useState(null)

    // importing currently active user 
    const {user} = useContext(AuthContext)


    // function to handel post submit
    const handelPostSubmit = async (e)=>{
      e.preventDefault();
      const newPost ={
        title,
        dec,
        username:user.username,
      }
      if(file){
        const data = new FormData();    // created a blank formData
        const filename = Date.now()+file.name;  // created a filename
        data.append("name",filename);   // added name 
        data.append("file",file);      // added file
        newPost.photo = filename;   // given the same filename to the newPost element 
        try {           // now trying to send just our blank form to the /upload url with name and file as params
          await axios.post('/upload',data);
        } catch (error) {
          console.log(error);
        }
      }
      try {
        const res = await axios.post("/post", newPost);
        window.location.replace("/post/"+res.data._id);
      } catch (error) {
        console.log(error);
      }
    }



  return (
    <div className='write'>
      {
        file && (
          <img src={URL.createObjectURL(file)} alt="" className="writeImg" />
        )
      }
      <form className='writeForm' onSubmit={handelPostSubmit}>
        <div className='writeFormGroup'>
          <label htmlFor="fileInput">
          <i className="uploadIcon fa-solid fa-circle-plus"></i>
          </label>
          <input type='file' id='fileInput' style={{display:"none"}} onChange={(e)=> setFile(e.target.files[0])}/>
          <input
            type='text'
            placeholder='Title'
            autoFocus={true}
            className='writeInput'
            onChange={(e)=> setTitle(e.target.value)}
          />
        </div>
        <div className='writeFormGroup'>
          <textarea
            placeholder='Tell your Story.....'
            type='text'
            className='writeInput writeText'
            onChange={(e)=> setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">Publish</button>
      </form>
    </div>
  );
};

export default WritePage;
