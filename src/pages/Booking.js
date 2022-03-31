import emailjs from "emailjs-com";
import { SocialIcon } from "react-social-icons";
import "./booking.css";

// .move to .env
const user_id = "y4Yb4OMVHxzJk8qsj";
const service_id = "service_4i3ufxi";
const template_id = "template_xcpc83z";

const Booking = () => {
  const handleSendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(service_id, template_id, e.target, user_id).then(
      (result) => {
        console.log(result.text);
        alert("Message sent successfully");
      },
      (error) => {
        console.log(error.text);
        alert("error sending email");
      }
    );
    e.target.close();
  };
  return (
    <div className='contact-container'>
    <h3 className='router-title'>Booking Info</h3>
    <p className='booking-info'>Booking via Email <SocialIcon style={{ height: 20, width: 20 }} url="mailto:unitedhouseproductions@gmail.com" /> or  Instagram <SocialIcon style={{ height: 20, width: 20 }} url="https://www.instagram.com/unitedhouseproductions/" />{" "}
       only. Please send inquiries to <a href="mailto:unitedhouseproductions@gmail.com">unitedhouseproductions@gmail.com</a></p>
    {/* <p className='booking-info'>Any other booking details will be laid out here</p>
    <h4>If you are interested in opening for an act already headlining:</h4>
    <p className='booking-sub-info'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    <h4>If you are interested in headlining your own show: </h4>
    <p className='booking-sub-info'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p> */}
    <h2>Contact Us</h2>
    <form  onSubmit={handleSendEmail}>      
      <input name="from_name" required type="text" className="feedback-input" placeholder="Name" />   
      <input name="from_email" required type="text" className="feedback-input" placeholder="Email" />
      <textarea name="message" required className="feedback-input" placeholder="Message"></textarea>
      <input type="submit" value="SEND"/>
    </form>
    </div>
    
  );
};
//https://javascript.plainenglish.io/how-to-build-a-contact-form-in-react-that-sends-emails-using-emailjs-70011d2563a3
export default Booking;
