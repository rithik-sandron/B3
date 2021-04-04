import React from 'react';
import './Footer.css';
export default function Footer() {
    return (
        <div className='footer'>
            <span> B3 Automotives <p style = {{color: '#666', fontSize: '12px', textTransform: 'capitalize'}}>Copyright © 2021 B3.</p></span>
            <div className='footer-contents'>
                <ul>
                    Channels
                    <li>facebook</li>
                    <li>instagram</li>
                </ul>
            </div>
            <div className='footer-contents'>
                <ul>
                    More
                    <li>About</li>
                    <li>privacy</li>
                </ul>
            </div>
        </div>
    )
}
