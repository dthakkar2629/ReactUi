import React, { useState, useEffect, useRef } from 'react';
import {
    Toolbar,
    AppBar,
    useScrollTrigger,
    Slide,
    Button,
    IconButton,
    useMediaQuery
} from '@material-ui/core';


import menu from 'static/images/icons/menu.svg';
import logo from 'static/images/7frames.svg';
import logoWhite from 'static/images/7frames.svg';
import { NavLink } from 'react-router-dom';


const HideonScroll = (props) => {
    const { children, window } = props;

    const trigger = useScrollTrigger({
        target: window ? window() : undefined
    });

    const trigger2 = useScrollTrigger({
        disableHysteresis: true,
        threshold: 2
    });


    return (
        <Slide appear={false} direction="down" in={!trigger} elevation={0}>
            {children}
        </Slide>
    )
}


export default function Navbar(props) {

    const [navBackground, setNavBackground] = useState(false);
    const [navMenu, setNavmenu] = useState(false);
    const isTabletOrMobile = useMediaQuery('(max-width: 600px)' );

    const navRef = useRef();
    navRef.current = navBackground;

    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 60
            if (navRef.current !== show) {
                setNavBackground(show)
            }
        }
        let bod= document.getElementsByTagName('BODY')[0];
        let htm= document.getElementsByTagName('html');
        
        if(navMenu){
            bod.style.overflow='hidden';
        }
        else{
            bod.style.overflow='unset';
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const openMenu = () =>{
        setNavmenu(true);
    }


    return (
        <React.Fragment>
            
        {navMenu!==true &&
            <HideonScroll {...props}>
            <AppBar
                position="fixed"
                style={{ backgroundColor: `${navBackground ? 'white' :isTabletOrMobile? 'white':'transparent'}`, transition: '1s ease' }}
                id="navbar"
            >
                <Toolbar>
                    <NavLink exact to="/"><Button className="logo-container"><img style={{ transition: '1s ease' }} className="logo" width="200" height="auto" src={navBackground  ? logo :isTabletOrMobile? logo:logoWhite} alt="Pinxitblue" /></Button></NavLink>
                    <div className="grow" />
                    <IconButton onClick={openMenu} edge="start" className="menu-button" color="inherit" aria-label="menu">
                        <img src={menu} width="25" alt="Menu Burger" />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </HideonScroll>
        }


        </React.Fragment>
    )
}
