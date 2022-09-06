import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { SocialIcon } from "react-social-icons";
// import axios from 'axios'
import "./Booking.css";

// Implement once server is live
// const server_url=process.env.REACT_APP_SERVER_URL
// const Booking = () => {
// const handleSendEmail = async (e) => {
//   e.preventDefault();
//   var [name, email, body] = [e.target[0].value, e.target[1].value, e.target[2].value]
//   try {
//     const resp = await axios.post(`${server_url}/mail`, {name: name, from: email, body: body})
//     if (resp.status === 202) {
//         toast("Your message has been delivered");
//         document.getElementById('email-form').reset();
//     }
//   } catch (error) {
//     toast.error("Network Error");
//     return;
//   }
// };

const Booking = () => {
  const [user_id, service_id, template_id] = [
    process.env.REACT_APP_EMAIL_USER,
    process.env.REACT_APP_EMAIL_SERVICE,
    process.env.REACT_APP_EMAIL_TEMPLATE,
  ];

  const handleSendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(service_id, template_id, e.target, user_id).then(
      (result) => {
        console.log(result.text);
        toast("Your message has been delivered");
        document.getElementById("email-form").reset();
      },
      (error) => {
        console.log(error.text);
        toast.error("error sending email");
      }
    );
    e.target.close();
  };

  return (
    <div className="contact-container">
      <h3 className="router-title">
        Booking via{" "}
        <SocialIcon
          className="inline-social"
          style={{ height: 20, width: 20 }}
          url=""
        />{" "}
        Website{" "}
        <SocialIcon
          style={{ height: 20, width: 20 }}
          className="inline-social"
          url="mailto:unitedhouseproductions@gmail.com"
        />{" "}
        Email or{" "}
        <SocialIcon
          className="inline-social"
          style={{ height: 20, width: 20 }}
          url="https://www.instagram.com/unitedhouseproductions/"
        />{" "}
        Instagram only{" "}
      </h3>
      <div className="contact-inner-container">
        <div className="booking-info">
          <div className="booking-sub-info">
            Please send inquiries to{" "}
            <a href="mailto:unitedhouseproductions@gmail.com">
              unitedhouseproductions@gmail.com
            </a>
          </div>
          <h5 className="booking-sub-title">
            Local Talent:
          </h5>
          <div className="booking-sub-info">
            <p><b>{"> "}</b>In an effort to support the local community, we'd love to give everyone a chance to perform.</p>
            <hr/>
            <p><b>{"> "}</b>If you're interested in headlining or opening for an upcoming event, shoot us an email!</p>
            <hr/>
            <p><b>{"> "}</b>Make sure to include your <em>name</em>, <em>email</em>, and any <em>links</em> showcasing personal songs or mixes.</p>
          </div>
        </div>
        <form id="email-form" onSubmit={handleSendEmail}>
          <input
            name="from_name"
            autoComplete="off"
            autoCorrect="off"
            required
            type="text"
            className="feedback-input"
            placeholder="Name"
          />
          <input
            name="from_email"
            autoComplete="off"
            autoCorrect="off"
            required
            type="text"
            className="feedback-input"
            placeholder="Email"
          />
          <textarea
            name="message"
            required
            className="feedback-input"
            placeholder="Message"
          ></textarea>
          <input type="submit" value="SEND" />
        </form>
      </div>
    </div>
  );
};

export default Booking;
