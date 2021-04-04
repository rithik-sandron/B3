import React from 'react';
import './Grid.css';

export default function Grid() {
    return (
        <>
            <p style={{ textAlign: 'center', fontSize: '40px' }}>-Plans-</p>
            <div className='grid'>

                <div id='col'><span id = 'tenure'>99</span>per wash</div>
                <div id='col'><span id = 'tenure'>349 / Month</span>4 washes</div>
                <div id='col'><span id = 'tenure'>3999 / Year</span>50 washes</div>
            </div>
        </>
    )
}
