import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPlayer from "react-player";
import { deleteVideoLink } from "../features/videoSlice";
import "./Video.css";

export const Video = () => {
  const videoLists = useSelector((state) => state.videos.videoLinks);
  const videoRef = useRef();
  const dispatch = useDispatch();

  function extractVideoId() {
    if (videoLists.length > 0) {
      return videoLists[0]?.link.split("v=")?.[1];
    }
  }

  function videoHandler() {
    const parsedDuration = parseInt(videoRef.current.getDuration());
    const parsedCurrentTime = parseInt(videoRef.current.getCurrentTime());

    if (
      parsedDuration === parsedCurrentTime ||
      parsedDuration - 1 === parsedCurrentTime
    ) {
      dispatch(deleteVideoLink(videoLists[0].id));
    }
  }

  return (
    <div className="video">
      {videoLists.length > 0 ? (
        <ReactPlayer
          url={`https://www.youtube.com/embed/${extractVideoId()}`}
          ref={videoRef}
          onEnded={videoHandler}
          playing={true}
        />
      ) : (
        <h1 className="video__heading">
          add a youtube video link to get started
        </h1>
      )}
    </div>
  );
};
