import "./About.css";
import Carousel from "react-bootstrap/Carousel";

const AboutImages = ({images}) => {
  return (
    <Carousel className="abt-image" controls={false} indicators={false}>
      {images.map((image, i) => (
        <Carousel.Item key={i}>
          <img className="d-block w-100" src={image.url} alt="First slide" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

const About = ({textFields, images}) => {

  // let imageURL = images === undefined ? "" : images.url

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
            {images === undefined ? <></> : <AboutImages images={images} />}
          </div>
      </div>
    </>
  );
};

export default About;
