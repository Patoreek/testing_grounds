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

  return (
    <div>
      <VisibilitySensor onChange={onChange}>
        <div className={classes.testingContainer}>
          <ReactPlayer
            url="https://player.vimeo.com/video/330688169"
            playing={playVideo}
            muted
            onBuffer={() => bufferHandler()}
            config={{
              vimeo: {
                playerOptions: { autopause: true, controls: true },
              },
            }}
          />
        </div>
      </VisibilitySensor>
    </div>
  );
};

export default TestingGround;
