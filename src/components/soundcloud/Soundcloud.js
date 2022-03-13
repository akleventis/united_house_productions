import ReactPlayer from "react-player";
import "./Soundcloud.css";
import { getFeaturedSongs } from "../../api";
import { useState, useEffect, useCallback } from "react";

const Soundcloud = () => {
  const [featuredSongs, setFeaturedSongs] = useState([]);
  const hydrateFeaturedSongs = useCallback(() => {
    getFeaturedSongs().then((res) => setFeaturedSongs(res));
  }, [setFeaturedSongs]);

  useEffect(() => {
    hydrateFeaturedSongs();
  }, [hydrateFeaturedSongs]);

  return (
    <div>
      <div className="soundcloud-container">
        <div className="dj-title">Local Artists ❤️</div>
        {featuredSongs.map((song, i) => {
          return (
            <div className="soundcloud-inner-container" key={i}>
              <div className="soundcloud-name"> {song.artist.name} </div>
              <ReactPlayer width="200px" height="200px" url={song.url} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Soundcloud;
