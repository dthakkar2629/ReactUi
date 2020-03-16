import React from 'react';

import divider from 'static/images/divider.svg';


export default function Divider() {
    return (
        <div className="divider">
            <img className="divider__image" src={divider} alt="Divider" />
            <h2 className="divider__title">Capture 
            <br />Creativity</h2>
        </div>
    )
}
