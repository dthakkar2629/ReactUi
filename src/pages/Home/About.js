import React from 'react';

import {
    useMediaQuery
} from '@material-ui/core';

import { ParallaxBanner } from 'react-scroll-parallax';
import parallaxBackground from 'static/images/parallax-background.jpg';
import parallaxBackgroundMobile from 'static/images/parallax-background-mobile.jpg';

import arrow from 'static/images/icons/forward-arrow-outlined.svg';

export default function About() {

    const isMobile = useMediaQuery('(max-width: 600px)');
    return (
        <ParallaxBanner
            className="about-banner"
            style={isMobile?{height: '100vh'}:{height: '80vh'}}
            layers={[
                {
                    image: isMobile?parallaxBackgroundMobile:parallaxBackground,
                    amount: 0.2
                }
            ]}
        >
            <div className="about">
                <h2 className="about__title">We <b className="about__red">A</b>re </h2>
                <div className="about__list">
                    <img className="about__list__image" src={arrow} alt="Arrow" />
                    <h3 className="about__list__content">Film<b className="about__red">a</b>kers</h3>
                </div>
                <div className="about__list">
                    <img className="about__list__image" src={arrow} alt="Arrow" />
                    <h3 className="about__list__content">Gr<b className="about__red">a</b>phic Designers</h3>
                </div>
                <div className="about__list">
                    <img className="about__list__image" src={arrow} alt="Arrow" />
                    <h3 className="about__list__content">Br<b className="about__red">a</b>nd Marketers</h3>
                </div>
            </div>
        </ParallaxBanner>
    )
}
