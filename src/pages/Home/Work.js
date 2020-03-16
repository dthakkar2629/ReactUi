import React from 'react';
import {
    Grid,
    useMediaQuery,
    Button
} from '@material-ui/core';
import { Parallax } from 'react-scroll-parallax';

import arrow from 'static/images/icons/forward-arrow.svg';
import parallaxImage from 'static/images/parallax-foreground.jpg';
const Work = () => {
    return (
        <div className="work">
            <Grid
                container
                className="work__container"
                spacing={4}
                direction="row"
                justify="flex-end"
                alignItems="center"
            >
                <Parallax className="work__parallax__container" y={[0, -20]} tagOuter="figure">
                    <Grid className="work__parallax" item xs={12} md={6}>
                        <img style={{width: '100%'}} src={parallaxImage} alt="7Frames Work" />
                    </Grid>
                </Parallax>

                <Grid className="work__content" item xs={12} md={6}>
                    <div>
                        <h2 className="work__title">Our <b className="work__red">W</b>ork</h2>
                        <p className="work__content__text">Transforming stories into visually rich and relatable experiences in most effective content formats.</p>
                        <Button className="work__button">View workfolio <img className="work__arrow" src={arrow} alt="arrow" /></Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Work;

