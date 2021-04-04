import React, { useState } from 'react';
import './Form.css';

export default function Form() {

    const [contact, setContact] = useState('');
    const [vehicleType, setVehicleType] = useState('Car');

    function handleContact(e) {
        e.preventDefault();
        setContact(e.target.value);
    }

    function handleVehicleType(e) {
        e.preventDefault();
        setVehicleType(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className='form'>
            
            <form onSubmit={handleSubmit}>
                <span id='head'>Book now</span>
                <input id='input' placeholder='Email or Mobile No' onChange={handleContact} value={contact}></input>
                <select id='select' placeholder='Vehicle type' onChange={handleVehicleType} value={vehicleType}>
                    <option id='vehicleType'>Car</option>
                    <option id='vehicleType'>Bike</option>
                </select>
                <button id='submit'>Submit</button>
            </form>
        </div>
    )
}
