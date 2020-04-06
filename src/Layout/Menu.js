import React from 'react'
import {
    Toolbar,
    AppBar,
    Button,
    IconButton,
    Grid,
    TextField
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';

import logo from 'static/images/7frames.svg';
import cancel from 'static/images/icons/cancel.svg';

export default function Menu(props) {
    return (
        <div className={props.navMenu ? "main-menu" : "hidden-menu"}>
            <AppBar
                position="fixed"
                id="navbar"
            >
                <Toolbar>
                    <NavLink exact to="/"><Button onClick={() => props.setNavmenu(false)} className="logo-container"><img style={{ transition: '1s ease' }} className="logo" width="200" height="auto" src={logo} alt="Pinxitblue" /></Button></NavLink>
                    <div className="grow" />
                    <IconButton onClick={() => props.setNavmenu(false)} edge="start" className="menu-button" color="inherit" aria-label="menu">
                        <img src={cancel} className="cancel-button" alt="Cancel button" />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <div className="nav-links">
                <NavLink exact to="/" className="Links"> 
                <Button onClick={() => props.setNavmenu(false)} className="title">
                    <h2>Home</h2>
                </Button>
                </NavLink>

                <NavLink exact to="/" className="Links">
                    <Button onClick={() => props.setNavmenu(false)} className="title">
                        <h2>Our Work</h2>
                    </Button>
                </NavLink>

                <NavLink exact to="/" className="Links">
                    <Button onClick={() => props.setNavmenu(false)} className="title">
                        <h2>Services</h2>
                    </Button>
                </NavLink>

                <NavLink exact to="/" className="Links">
                    <Button onClick={() => props.setNavmenu(false)} className="title">
                        <h2>Case Study</h2>
                    </Button>
                </NavLink>

                <NavLink exact to="/" className="Links">
                    <Button onClick={() => props.setNavmenu(false)} className="title">
                        <h2>Contact Us</h2>
                    </Button>
                </NavLink>

                
            </div>
            
        </div>
    )
}
