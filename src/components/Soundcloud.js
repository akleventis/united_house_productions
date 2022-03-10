import ReactPlayer from "react-player";
import "./soundcloud.css";
const Soundcloud = () => {
  return (
    <div className="soundcloud-container">
      <div className="soundcloud-inner-container">
        <div className="soundcloud-name">TYLR</div>
        <ReactPlayer
          width="200px"
          height="200px"
          url="https://soundcloud.com/musicbytylr/2022-showcase-mix?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        />
      </div>
      <div className="soundcloud-inner-container">
        <div className="soundcloud-name">TYLR</div>
        <ReactPlayer
          width="200px"
          height="200px"
          url="https://soundcloud.com/musicbytylr/2022-showcase-mix?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        />
      </div>
      <div className="soundcloud-inner-container">
        <div className="soundcloud-name">TYLR</div>
        <ReactPlayer
          width="200px"
          height="200px"
          url="https://soundcloud.com/musicbytylr/2022-showcase-mix?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        />
      </div>
    </div>
  );
};
export default Soundcloud;
