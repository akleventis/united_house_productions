
import ReactPlayer from "react-player";
import { featuredSongs } from '../../data/data.js'
import "./Soundcloud.css";

// const shuffle = (artists) => {
//   for (var i = artists.length - 1; i > 0; i--) {
//     var j = Math.floor(Math.random() * (i + 1));
//     var temp = artists[i];
//     artists[i] = artists[j];
//     artists[j] = temp;
// }
// }

const Soundcloud = ({isOpen, toggleSideBar}) => {
  const sidebarClass = isOpen ? "soundcloud-outer-container open": "soundcloud-outer-container";
  const toggleButtonClass = isOpen ? "sidebar-toggle open" : "sidebar-toggle"
  // shuffle(featuredSongs)
  const items = featuredSongs.map((fs, i) => {
    return (
      <div className="soundcloud-inner-container" key={i}>
        <div className="soundcloud-name"> <a target="_blank" rel='noreferrer' href={fs.dj.url}>{fs.dj.name}</a> </div>
        <ReactPlayer width="100%" height="100%" url={fs.url} />
      </div>
    );
  })
  
  return (
    <div className='sidebar-container'>
    <button onClick={toggleSideBar} className={toggleButtonClass} />

    <div className={sidebarClass}>
      <div className="soundcloud-container">
        <div className="dj-title">👀</div>
        {items}
      </div>
    </div>
    </div>
  );
};
export default Soundcloud;
