import "./About.css";
import Carousel from "react-bootstrap/Carousel";
import loading from "../../assets/images/loading.gif"

const AboutImages = ({ images }) => {
  console.log("length: ", images.length)
  return (
    <Carousel className="abt-image">
      {images.length > 0 ? (
        images.map((image, i) => (
          <Carousel.Item key={i}>
            <img className="d-block w-100" src={image.url} alt="First slide" />
          </Carousel.Item>
        ))
      ) : (
        <img className="d-block w-100" src={loading} alt="First slide" />
      )}
    </Carousel>
  );
};

const About = ({ textArr, images }) => {
  return (
    <>
      <h3 className="router-title">About</h3>
      <div className="about-container">
        {textArr.length !== 0 &&
          textArr.textField.map((text, i) => (
            <div key={i}>
              <div className="box">
                <p className="p0">{text}</p>
              </div>
              <hr className="abt-break" />
            </div>
          ))}
        <div className="box">
          {images.length > 0 && <AboutImages images={images} />}
        </div>
      </div>
    </>
  );
};

export default About;
