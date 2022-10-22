import { py0, py1, py2 } from "../../assets";
import "./About.css";

const data = {
  first: "Paul Bibbo and Co-Founder Alex Mahar established United House Productions in 2022 in an effort to shine light on local artists, expand the community, and put Raleigh/Durham on the map.",
  second: "Our main venue emerses you in an experience like no other, providing a 1990's underground electronic music scene ambiance.",
  third: "Check out our events page for details on upcoming and past events. If you'd like to contact us for any reason, don't hesitate to do so on our booking page. Hope to see you soon 🤘🏼",
}

const About = () => {
  return (
    <>
      <h3 className="router-title">About</h3>
      <div className="about-container">
          <div className="box">
            <p className='p0'>{data.first}</p>
            {/* <img className='py-img' src={py0} alt="beebo yespeez" /> */}
          </div>
          <hr className="abt-break" />
          <div className="box">
            <p className='p0'>{data.second}</p>
            {/* <img className='py-img' src={py0} alt="beebo yespeez" /> */}
          </div>
          <hr className="abt-break"/>
          <div className="box">
            <p className='p0'>{data.third}</p>
            {/* <img className='py-img' src={py0} alt="beebo yespeez" /> */}
          </div>
      </div>
    </>
  );
};

export default About;
