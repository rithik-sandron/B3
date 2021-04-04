import React, { useState } from 'react';
import './Plans.css';

export default function Plans() {

    const individualPrices = [
        { vehicle: 'Bike', price: 149 },
        { vehicle: 'Hatchback', price: 299 },
        { vehicle: 'Sedan', price: 349 },
        { vehicle: 'SUV', price: 399 }]


    const subscriptionPrices = [
        { vehicle: 'Bike', price: 399 },
        { vehicle: 'Hatchback', price: 999 },
        { vehicle: 'Sedan', price: 1199 },
        { vehicle: 'SUV', price: 1399 }]

    const [plan, setPlan] = useState('Individual');

    const services = (<ul id='services'>
        <li>Foam wash</li>
         <li>Tyre polishing</li>
        {/*<li>Interior cleaning</li>
        <li>Interior detailing</li>
        <li>Carper shampooing</li>
        <li>Type polishing</li>
        <li>General service</li> */}
    </ul>);

    function handleClick(e) {
        setPlan(plan === 'Individual' ? 'Subscription' : 'Individual');
    }
    function handleActiceSlide(e) {
        console.log(e)
    }
    return (
        <div id='plan-box'>
            <ul id='tab-switch'>
                <li onFocus ={handleActiceSlide} onClick={handleClick} style={{ marginRight: '8px' }}>Individual wash</li>
                <li onClick={handleClick}>Monthly packs</li>
            </ul>
            <div className='plans'>
                {plan === 'Individual' ?
                    individualPrices.map((x, i) => {
                        return (<div key={i} id='individual-section'>
                            <span id='type'>{x.vehicle}</span>
                            <br />
                            <span id='price'>&#x20b9; {x.price}</span>
                            {services}
                        </div>);
                    }) : subscriptionPrices.map((x, i) => {
                        return (<div key={i} id='individual-section'>
                            <span id='type'>{x.vehicle}</span>
                            <br />
                            <span id='price'>&#x20b9; {x.price}</span>
                            {services}
                        </div>);
                    })
                }
            </div>
        </div>
    )
}
