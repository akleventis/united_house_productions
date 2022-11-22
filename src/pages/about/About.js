import "./About.css";

const About = ({textFields, image}) => {

  let imageURL = image === undefined ? "" : image.url

  return (
    <>
      <h3 className="router-title">About</h3>
      <div className="about-container">
          <div className="box">
            <p className='p0'>{textFields.textField1}</p>
        
          </div>
          <hr className="abt-break" />
          <div className="box">
            <p className='p0'>{textFields.textField2}</p>
           
          </div>
          <hr className="abt-break"/>
          <div className="box">
            <p className='p0'>{textFields.textField3}</p>
          </div>
          
          <hr className="abt-break"/>
          <div className="box">
            <img src={imageURL} alt="" className="abt-image"/>
          </div>
      </div>
    </>
  );
};

export default About;
