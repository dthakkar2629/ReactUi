import React from 'react';
import Youtube from './Header';
import Work from './Work';

const Home = () => {
    return (
        <div className="home">
            <Youtube youtubeId={'FG8BM2Ho0XM&t=0'} />
            <Work />
        </div>
    )
}

export default Home;