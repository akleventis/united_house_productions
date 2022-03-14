import ReactPlayer from "react-player";
import { featuredSongs } from '../../../data/data.js'
import "./Soundcloud.css";

const Soundcloud = () => {
  return (
    <div>
      <div className="soundcloud-container">
        <div className="dj-title">Local Artists ❤️</div>
        {featuredSongs.map((fs, i) => {
          return (
            <div className="soundcloud-inner-container" key={i}>
              <div className="soundcloud-name"> {fs.dj.name} </div>
              <ReactPlayer width="200px" height="200px" url={fs.url} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Soundcloud;
