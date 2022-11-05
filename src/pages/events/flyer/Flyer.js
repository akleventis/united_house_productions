/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { loading } from "../../../assets";
import "./Flyer.css";
import moment from "moment";
import { useState, useEffect } from "react";

const Flyer = ({ event, isCurrentEvent }) => {
  // ignore utc offset
  const startTime = event.startTime.substring(0, event.startTime.length - 6)
  const endTime = event.endTime.substring(0, event.endTime.length - 6)

  const image_url = "https://" + event.image.fields.file.url
  const [imgSrc, setImgSrc] = useState(loading || image_url)
  useEffect(() => {
    const img = new Image();
    img.src = image_url;
    img.onload = () => {
        setImgSrc(image_url)        
    }
  }, [image_url])

  let tickets = event.ticket !== "" ? <a href={event.ticket}><button type="button" className="tickets">Tickets</button></a>:<button className="tickets">Free</button>
  const flyerClass = isCurrentEvent ? "" : "past-flyer"
  return (
    <div>
      <div className="flyer-container">
        <div className={flyerClass}>
          <Zoom  overlayBgColorEnd="rgba(0, 0, 0, 0.8)" zoomMargin={50}>
            <div className="flyer" style={{textAlign: "center"}}>
              <div className="flyer-date">
                <div></div>
                <p>{moment(startTime).format("ddd, MMM. DD")}</p>
              </div>
              <img
                {...{ src: imgSrc}}
                alt="event-flyer"
                className="flyer-image"
              />
            </div>
          </Zoom>
        </div>
        <div className="item-center">
          <ul className="list-group">

            {/* HEADLINER */}
            <li className="list-group-item headliner">
              {event.headliner.url==="" ? 
              <a>{event.headliner.name}</a> : 
              <a href={event.headliner.fields.url} rel="noreferrer">{event.headliner.fields.name}</a>
              }
            </li>

            {/* SUPPORT */}
            <li className="list-group-item support">
              {event.openers.map(dj => (
                dj.url === "" ? 
                <a key={dj.fields.name} className='support-a'>{dj.fields.name}</a> :
                <a href={dj.fields.url} key={dj.fields.name} className='support-a' rel='noreferrer'>{dj.fields.name}</a> 
              ))}
            </li>

            {/* TIME */}
            <li className="list-group-item time">
              <svg className="clock" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0 0 24 24" style={{ fill: "white" }} >
                <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 6 L 11 12.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13 11.585938 L 13 6 L 11 6 z"></path>
              </svg>
              {moment(startTime).format("h:mma") === "Invalid date" ? "???" : moment(startTime).format("h:mma")} -{" "}
              {moment(endTime).format("h:mma") === "Invalid date" ? "???" : moment(endTime).format("h:mma")}
            </li>

            {/* LOCATION  */}
            <li className="list-group-item location" >
              <a href={event.location.fields.url} rel="noreferrer">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAACCklEQVQ4jYWQv08TcRjGn7vDg7uj0F5NE7QhkLAYaa2JPxIHg4bAQoQwOOvgogkLE5MuRiZm9T8wKWlITYpDxcREJzFQRLrYllJ69Nqzvev9FPw6lDak7eEzffO8z/P5vnkpdNHW1JTADAw8oTkuBAB/TTNl2fbbG/G40Z6lOsrz8w88gcDLwOjoOMOyAIATx0Epk9lRy+WlSDT63hWQmp29I46NvRODwWC3zSr7+wdKNvswHIt9bXr02UCvz/e8WdZ1HSXQkCkautHY3D88HOwbHHxxttMCfJmeFgVRDAOAY9swr4bge7YA79MFmFfG8ce2AQD9ohjamJjwdgAIIZdYnvcDQN004bk32frFc38SdcMEAFzg+YsCRV3uAJwwzNGx46gAwLEsjNR2C2Bsb4HrbRz02HFqhKal5qyn+bibSMi/RkYK3qEhP8fzsD4l8Tv9EwDASkX0CTwAwNK0g9vJZKUDAACOrn8DIWFQFHz9AqDVGoPTMgiBWa9vdj0iAGiatqKWSjJcVJOkslOtrrgCbsZiO0qh8NkNUC0WNyLx+A9XAABYsrxYyeVy7X45k8mpqrrY7ncArq+vZ5V8/rWt61YLqut29fDwza21tfx/AQAQXl1dltLpD4QQEEJwtLeXCEWjr7ple7qZACArymNmd/cjRVFM3bYfueXO1fe5ucjmzMy18zL/AN320eTh4osMAAAAAElFTkSuQmCC"
                  alt="location"
                />
              {event.location.fields.name}
              </a>
            </li>
          </ul>
        </div>
        
        {/* TICKETS */}
        {isCurrentEvent ? 
              <div className="item">
                {tickets}
              </div>
              :
              <></>
        }
      </div>
    </div>
  );
};

export default Flyer;
