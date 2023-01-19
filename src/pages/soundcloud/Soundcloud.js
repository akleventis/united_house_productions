import ReactPlayer from "react-player";
import "./Soundcloud.css";

const Soundcloud = ({isOpen, toggleSideBar, featuredArtists}) => {
  const sidebarClass = isOpen ? "soundcloud-outer-container open": "soundcloud-outer-container";
  const toggleButtonClass = isOpen ? "sidebar-toggle open" : "sidebar-toggle"
  const items = featuredArtists.map((fa, i) => {
    return (
      <div className="soundcloud-inner-container" key={i}>
        <div className="soundcloud-name"> <a rel='noreferrer' href={fa.url}>{fa.name}</a> </div>
        <ReactPlayer width="100%" height="100%" url={fa.featuredSong} />
      </div>
    );
  })
  
  return (
    <div className='sidebar-container'>
    <button title="Spotlight" onClick={toggleSideBar} className={toggleButtonClass} />

    <div className={sidebarClass}>
      <div className="soundcloud-container">
        <div className="dj-title">Spotlight</div>
        {items}
      </div>
    </div>
    </div>
  );
};
export default Soundcloud;
