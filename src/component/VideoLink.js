import React, { useState } from "react";
import "./VideoLink.css";
import { useDispatch } from "react-redux";
import { addVideoLink } from "../features/videoSlice";
import { v4 as uuid } from "uuid";

export const VideoLink = () => {
  const [link, setLink] = useState("");
  const [alert, setAlert] = useState(false);

  const dispatch = useDispatch();

  const addVideoHandler = () => {
    var parser = document.createElement("a");
    parser.href = link;
    if (
      parser.hostname === "www.youtube.com" &&
      parser.protocol === "https:" &&
      parser.pathname === "/watch"
    ) {
      dispatch(addVideoLink({ link, id: uuid() }));
      setLink("");
      setAlert(false);
    } else {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 2000);
    }
  };

  const inputHandler = (e) => {
    setLink(e.target.value);
  };

  return (
    <div className="videolink">
      <input value={link} onChange={inputHandler} />
      {alert && (
        <div className="alert alert-danger">
          <p>Enter a valid youtube video link</p>
        </div>
      )}
      {link.length > 0 ? (
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


