import React, { useState } from 'react';
import ReactPlayer from 'react-player'

export default ({ youtubeId }) => {

    const [play, setPlay] = useState(false);
    return (
        <div
            className="player-wrapper"
            style={{
                position: "relative",
                paddingBottom: "56.25%" /* 16:9 */,
                paddingTop: 25,
                height: 0
            }}
        >
            <ReactPlayer
                onReady={() => setPlay(true)}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }}
                height="100%"
                width="100%"
                url={`https://www.youtube.com/watch?v=${youtubeId}`}
                controls={false}
                playIcon={null}
                playing={play}
            />

            <h1 className="title">7 Frames</h1>

        </div>
    );
};