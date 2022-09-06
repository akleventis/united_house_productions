import { py0, py1, py2 } from "../../assets";
import "./About.css";

const About = () => {
  return (
    <>
      <h3 className="router-title">About</h3>
      <div className="about-container">

          <div className="box">
            <p className='p0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dui ligula, posuere id suscipit sit amet, semper vel tellus. Quisque ultrices sapien</p>
            <img className='py-img' src={py0} alt="beebo yespeez" />
          </div>

          <div className="box">
            <img className='py-img' src={py1} alt="beebo yespeez" />
            <p className='p1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dui ligula, posuere id suscipit sit amet, semper vel tellus. Quisque ultrices sapien efficitur malesuada cursus. In eu odio augue. Sed a massa tincid</p>
          </div>

          <div className="box">
            <p className='p2'>Nulla in nisl nisl. Fusce nunc ligula, malesuada sit amet mattis ac, bibendum eu quam. Fusce iaculis diam quis egestas pulvinar. Nam ac libero ullamcorper massa consectetur tincidunt tempus quis est. </p>
            <img className='py-img'  src={py2} alt="beebo yespeez" />
          </div>
      </div>
    </>
  );
};

export default About;
