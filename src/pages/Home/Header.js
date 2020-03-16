import React, { useState } from 'react';
import ReactPlayer from 'react-player'
import bottomArrow from 'static/images/icons/bottom-arrow.svg';
export default ({ youtubeId }) => {

    const [play, setPlay] = useState({
        start: false,
        visible: false
    });
    return (
        <div className="header">
            <div
                className={play.visible?"player-wrapper":"player-wrapper-hidden"}
                style={{
                    position: "relative",
                    paddingBottom: "56.25%" /* 16:9 */,
                    height: 0
                }}
            >
                <ReactPlayer
                    onReady={() => setPlay({...play,start:true})}
                    onProgress={(played)=>{
                        if(played.playedSeconds>1 && play.visible!==true){
                            setPlay({...play, visible: true})
                        }
                    }}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    }}
                    height="100%"
                    width="100%"
                    url={`https://vimeo.com/142721601`}
                    // url={`https://vimeo.com/144952248`}
                    controls={false}
                    playIcon={null}
                    playing={play.start}
                    loop={true}
                    vimeoConfig={{ 
                        controls: false, 
                        responsive: true, 
                        title: false, 
                        // width: 540,
                        // height: 960
                    }}
                />
            </div>
            <img src={bottomArrow} className="arrow" alt="7 Frames" />

        </div>
    );
};