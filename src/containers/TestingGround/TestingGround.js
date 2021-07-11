import React, { useRef, useState, useEffect } from "react";
import classes from "./TestingGround.module.scss";
import ReactPlayer from "react-player/lazy";

import VisibilitySensor from "react-visibility-sensor";

const TestingGround = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const bufferHandler = () => {
    console.log("buffering...");
  };

  function onChange(isVisible) {
    if (isVisible == true) {
      setPlayVideo(true);
    } else {
      setPlayVideo(false);
    }
  }

  const amount = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      <VisibilitySensor onChange={onChange}>
        <div className={classes.testingContainer}>
          <ReactPlayer
            url="https://player.vimeo.com/video/330688169"
            playing={playVideo}
            muted
            onBuffer={() => bufferHandler()}
          />
        </div>
      </VisibilitySensor>
    </div>
  );
};

export default TestingGround;
