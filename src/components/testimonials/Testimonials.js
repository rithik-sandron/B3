import React from 'react';
import './Testimonials.css';
import ph from '../../assets/placeholder.webp'

export default function Testimonials() {
    return (

        <div className='testimonials'>
            <div id='content'>
                <img id='profile' src={ph} alt='' />
                <span>Customer testimonials have long been a staple of our marketing efforts. - 'stalin'</span>
            </div>
            <div id='content'>
                <img id='profile' src={ph} alt='' />
                <span>Customer testimonials have long been a staple of our marketing efforts. - 'stalin'</span>
            </div>
            <div id='content'>
                <img id='profile' src={ph} alt='' />
                <span>Customer testimonials have long been a staple of our marketing efforts. - 'stalin'</span>
            </div>
            <div id='content'>
                <img id='profile' src={ph} alt='' />
                <span>Customer testimonials have long been a staple of our marketing efforts. - 'stalin'</span>
            </div>
            <div id='content'>
                <img id='profile' src={ph} alt='' />
                <span>Customer testimonials have long been a staple of our marketing efforts. - 'stalin'</span>
            </div>
        </div>
    )
}
