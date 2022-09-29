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
  console.log(`https://www.youtube.com/embed/${extractVideoId()}`);
  return (
    <div className="video">
      <ReactPlayer
        url={`https://www.youtube.com/embed/${extractVideoId()}`}
        ref={videoRef}
        onEnded={videoHandler}
      />
    </div>
  );
};

// https://www.youtube.com/embed/tgbNymZ7vqY
// lTTajzrSkCw
// rUWxSEwctFU
// iQTZTioSeKA
// i9ozuTlKqNo;

// const checkElapsedTime = (e) => {
//   const duration = e.target.getDuration();
//   const currentTime = e.target.getCurrentTime();

//   // console.log("without parse", duration, currentTime);

//   const parsedDuration = parseInt(duration);
//   const parsedCurrentTime = parseInt(currentTime);
//   // console.log("parsed values", parsedDuration, parsedCurrentTime);

//   if (parsedDuration === parsedCurrentTime)
//     console.log("true", "when time is equal");

//   if (parsedDuration - 1 === parsedCurrentTime)
//     console.log("true", "when current time is bigger");
// };
