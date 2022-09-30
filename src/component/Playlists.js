import React from "react";
import { useSelector } from "react-redux";
import "./Playlists.css";

export const Playlists = () => {
  const videoLists = useSelector((state) => state.videos.videoLinks);

  return (
    <div className="playlists">
      <p className="playlists__title">playlists</p>
      <div className="playlists__links">
        {videoLists.map(({link,id}) => {
          return <div className="playlists__link" key={id}>{link}</div>;
        })}
      </div>
    </div>
  );
};
