import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

import parallaxBackground from 'static/images/parallax-background.jpg';
import arrow from 'static/images/icons/forward-arrow-outlined.svg';

export default function About() {
    return (
        <ParallaxBanner
            className="about-banner"
            style={{height: '100vh'}}
            layers={[
                {
                    image: parallaxBackground,
                    amount: 0.2
                }
            ]}
        >
            <div className="about">
                <h2>We <b className="about__red">A</b>re </h2>
                <div className="about__list">
                    <img className="about__list__image" src={arrow} alt="Arrow" />
                    <h3 className="about__list__content">Film<b className="about__red">a</b>kers</h3>
                </div>
            </div>
        </ParallaxBanner>
    )
}
