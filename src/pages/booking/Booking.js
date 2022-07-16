import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { SocialIcon } from "react-social-icons";
import "./Booking.css";

// TODO: Move to backend server to implement email rate limits
const Booking = () => {
  const [user_id, service_id, template_id] = [process.env.REACT_APP_EMAIL_USER, process.env.REACT_APP_EMAIL_SERVICE, process.env.REACT_APP_EMAIL_TEMPLATE]
  
  const handleSendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(service_id, template_id, e.target, user_id).then(
      (result) => {
        console.log(result.text);
        toast("Your message has been delivered");
        document.getElementById('email-form').reset();
      },
      (error) => {
        console.log(error.text);
        toast.error("error sending email");
      }
    );
    e.target.close();
  };
  return (
    <div className='contact-container'>
    <h3 className='router-title'>Booking Info</h3>
    <div className='booking-info'>Booking via Email <SocialIcon style={{ height: 20, width: 20 }} url="mailto:unitedhouseproductions@gmail.com" /> or  Instagram <SocialIcon style={{ height: 20, width: 20 }} url="https://www.instagram.com/unitedhouseproductions/" />{" "}
       only. Please send inquiries to <a href="mailto:unitedhouseproductions@gmail.com">unitedhouseproductions@gmail.com</a></div>
    {/* <p className='booking-info'>Any other booking details will be laid out here</p>
    <h4>If you are interested in opening for an act already headlining:</h4>
    <p className='booking-sub-info'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    <h4>If you are interested in headlining your own show: </h4>
    <p className='booking-sub-info'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p> */}
    <h2>Contact Us</h2>
    <form  id='email-form' onSubmit={handleSendEmail}>      
      <input name="from_name" autoComplete="off" autoCorrect="off" required type="text" className="feedback-input" placeholder="Name" />   
      <input name="from_email" autoComplete="off" autoCorrect="off"  required type="text" className="feedback-input" placeholder="Email" />
      <textarea name="message" required className="feedback-input" placeholder="Message"></textarea>
        <input type="submit" value="SEND"/>
    </form>
    </div>
    
  );
};

export default Booking;
