
import ReactPlayer from "react-player";
import { featuredSongs } from '../../../data/data.js'
import "./Soundcloud.css";

const Soundcloud = ({isOpen, toggleSideBar}) => {
  const sidebarClass = isOpen ? "soundcloud-outer-container open": "soundcloud-outer-container";
  const toggleButtonClass = isOpen ? "sidebar-toggle open" : "sidebar-toggle"
  return (
    <div className='sidebar-container'>
    <button onClick={toggleSideBar} className={toggleButtonClass}>👀</button>
    
    <div className={sidebarClass}>
      <div className="soundcloud-container">
        <div className="dj-title">Resident DJs ❤️</div>
        {featuredSongs.map((fs, i) => {
          return (
            <div className="soundcloud-inner-container" key={i}>
              <div className="soundcloud-name"> <a href={fs.dj.url}>{fs.dj.name}</a> </div>
              <ReactPlayer color="red" width="100%" height="100%" url={fs.url} />
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
};
export default Soundcloud;
