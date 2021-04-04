import React from 'react';
import './Nav.css';
import fb from '../../assets/facebook.svg';
import wa from '../../assets/whatsapp.svg';
import ig from '../../assets/instagram.svg';

export default function Nav(props) {
    return (
        <div>
            {<span id='banner'>
                <ul>
                    <li><span>About</span></li>
                    <li><img id='social' src={fb} alt='' /></li>
                    <li><img id='social' src={ig} alt='' /></li>
                    <li><img id='social' src={wa} alt='' /></li>

                </ul>
            </span>}
        </div>
    )
}
