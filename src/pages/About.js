import './about.css'
import {AboutImg} from '../assets/images/index.js'

const About = () => {
  return (
    <div className='about-container'>
      <h3 className='router-title'>About</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</p>
      <p> voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      <div>
        <img src={AboutImg} alt='uhp dj' />
       </div>
    </div>
  );
};

export default About;
