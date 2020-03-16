import React from 'react';
import Youtube from './Header';
import About from './About';
import { ParallaxProvider } from 'react-scroll-parallax';

import Layout from 'Layout';
const Home = () => {
    return (
        <Layout>
            <ParallaxProvider>
                <div className="home">
                    <Youtube youtubeId={'FG8BM2Ho0XM&t=0'} />
                    <About />
                </div>
            </ParallaxProvider>
        </Layout>
    )
}

export default Home;