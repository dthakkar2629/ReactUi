import React from 'react';
import Header from './Header';
import About from './About';
import Work from './Work';
import Divider from './Divider';
import { ParallaxProvider } from 'react-scroll-parallax';

import Layout from 'Layout';
const Home = () => {
    return (
        <Layout>
            <ParallaxProvider>
                <div className="home">
                    <Header youtubeId={'FG8BM2Ho0XM&t=0'} />
                    <About />
                    <Work />
                    <Divider />
                </div>
            </ParallaxProvider>
        </Layout>
    )
}

export default Home;