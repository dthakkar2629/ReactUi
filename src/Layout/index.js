import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

import 'static/styles/main.scss';


const Layout = (props) => {
    return (
        <React.Fragment>
            <Navbar />
            {props.children}
            <Footer />
        </React.Fragment>
    );
}
export default Layout;