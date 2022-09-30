import React, { useState } from "react";
import "./VideoLink.css";
import { useDispatch } from "react-redux";
import { addVideoLink } from "../features/videoSlice";
import { v4 as uuid } from "uuid";

export const VideoLink = () => {
  const [link, setLink] = useState("");

  const dispatch = useDispatch();

  const addVideoHandler = () => {
    dispatch(addVideoLink({ link, id: uuid() }));
    setLink("");
  };

  const inputHandler = (e) => {
    setLink(e.target.value);
  };

  return (
    <div className="videolink">
      <input value={link} onChange={inputHandler} />

      {link.length > 0  ? (
        <button className="videolink__button" onClick={addVideoHandler}>
          add video
        </button>
      ) : (
        <button className="videolink__button videolink__button--disable">
          add video
        </button>
      )}
    </div>
  );
};
