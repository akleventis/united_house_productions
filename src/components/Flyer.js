import { Domii } from "../assets/images/index";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import "./flyer.css";

const Flyer = () => {
  return (
    <div>
      <div className="flyer-container">
        <div className="item">
          <Zoom>
            <div>
              <div className="flyer-date">
                <div></div>
                <p>Sat, Apr. 16</p>
              </div>
              <img alt="dj" src={Domii} width="100%" height="100%" />
            </div>
          </Zoom>
        </div>
        <div className="item-center">
          <ul class="list-group">
            <li class="list-group-item headliner">DOMii</li>
            <li class="list-group-item support">
              DUPLEX | YESPEEZ | VLADISLOVE | WARRIORS
            </li>
            <li class="list-group-item time">
              <svg
                className="clock"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                style={{ fill: "white" }}
              >
                <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 6 L 11 12.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13 11.585938 L 13 6 L 11 6 z"></path>
              </svg>
              9pm - 2:30am
            </li>

            <li class="list-group-item location">
              <a
                href="https://www.google.com/maps/place/The+Fruit/@35.9906289,-78.8987875,17z/data=!3m1!4b1!4m5!3m4!1s0x89ace46f3381f42d:0x42006ab88a52e967!8m2!3d35.9906823!4d-78.8966525"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAACCklEQVQ4jYWQv08TcRjGn7vDg7uj0F5NE7QhkLAYaa2JPxIHg4bAQoQwOOvgogkLE5MuRiZm9T8wKWlITYpDxcREJzFQRLrYllJ69Nqzvev9FPw6lDak7eEzffO8z/P5vnkpdNHW1JTADAw8oTkuBAB/TTNl2fbbG/G40Z6lOsrz8w88gcDLwOjoOMOyAIATx0Epk9lRy+WlSDT63hWQmp29I46NvRODwWC3zSr7+wdKNvswHIt9bXr02UCvz/e8WdZ1HSXQkCkautHY3D88HOwbHHxxttMCfJmeFgVRDAOAY9swr4bge7YA79MFmFfG8ce2AQD9ohjamJjwdgAIIZdYnvcDQN004bk32frFc38SdcMEAFzg+YsCRV3uAJwwzNGx46gAwLEsjNR2C2Bsb4HrbRz02HFqhKal5qyn+bibSMi/RkYK3qEhP8fzsD4l8Tv9EwDASkX0CTwAwNK0g9vJZKUDAACOrn8DIWFQFHz9AqDVGoPTMgiBWa9vdj0iAGiatqKWSjJcVJOkslOtrrgCbsZiO0qh8NkNUC0WNyLx+A9XAABYsrxYyeVy7X45k8mpqrrY7ncArq+vZ5V8/rWt61YLqut29fDwza21tfx/AQAQXl1dltLpD4QQEEJwtLeXCEWjr7ple7qZACArymNmd/cjRVFM3bYfueXO1fe5ucjmzMy18zL/AN320eTh4osMAAAAAElFTkSuQmCC"
                  alt="location"
                />
              </a>
              The Fruit
            </li>
          </ul>
        </div>
        <div className="item">
          <button type="button" class="btn btn-info tickets">
            Buy Tickets
          </button>
        </div>
      </div>
    </div>
  );
};

export default Flyer;
