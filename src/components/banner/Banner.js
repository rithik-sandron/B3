import React from 'react';
import './Banner.css';
import Form from '../form/Form';
import downArrow from '../../assets/downArrow.svg';
import cp from '../../assets/cp.png';

export default function Banner() {
    return (
        <>
            <div className='banner'>
                <img src={cp} alt='' />
                <Form />
            </div>
            <img id='arrow' src={downArrow} alt='' />
        </>
    )
}
