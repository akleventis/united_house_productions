import ReactPlayer from "react-player";
import "./soundcloud.css";
const Soundcloud = () => {
  const artists = [
    {
      name: "TYLR",
      url: "https://soundcloud.com/musicbytylr/2022-showcase-mix?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    },
    {
      name: "yespeez",
      url: "https://soundcloud.com/alex-mahar-189115224/nobody?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    },
    {
      name: "DeBaldo",
      url: "https://soundcloud.com/dabaldo/dabaldo-the-club-house-live?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    },
  ];

  return (
    <div>
      <div className="soundcloud-container">
        <div className="dj-title">Local Artists ❤️</div>
        {artists.map((artist) => {
          return (
            <div className="soundcloud-inner-container">
              <div className="soundcloud-name"> {artist.name} </div>
              <ReactPlayer width="200px" height="200px" url={artist.url} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Soundcloud;
