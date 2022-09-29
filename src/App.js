import React from "react";
import "./App.css";
import { Playlists } from "./component/Playlists";
import { Video } from "./component/Video";
import { VideoLink } from "./component/VideoLink";

function App() {
  return (
    <div className="App">
      <Video />
      <div className="App__playlists">
        <Playlists />
        <VideoLink />
      </div>
    </div>
  );
}

export default App;
