import "./writepage.css";

const WritePage = () => {
  return (
    <div className='write'>
      <img src="https://img.staticmb.com/mbcontent/images/crop/uploads/2024/5/Picture-of-Daisy-Flower_0_1200.jpg" alt="" className="writeImg" />
      <form className='writeForm'>
        <div className='writeFormGroup'>
          <label htmlFor="fileInput">
          <i className="uploadIcon fa-solid fa-circle-plus"></i>
          </label>
          <input type='file' id='fileInput' style={{display:"none"}}/>
          <input
            type='text'
            placeholder='Title'
            autoFocus={true}
            className='writeInput'
          />
        </div>
        <div className='writeFormGroup'>
          <textarea
            placeholder='Tell your Story.....'
            type='text'
            className='writeInput writeText'
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
};

export default WritePage;
