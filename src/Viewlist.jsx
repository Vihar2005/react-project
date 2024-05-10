import React from 'react';
import './customCss.css';

const Viewlist = () => {
    const arr = [
        'Use Array.map',
        'Not a for loop',
        'Give each item a unique key',
        'Avoid Using array index as the key',
    ];
    return (
        <div className='Viewlist'>
            <h3>The "React Way" to Render a List</h3>
            <ul>
                {
                    arr.map((i) => {
                        // return (<li key={i.toString()} className='customCss'>{i}</li>)
                    })
                }
            </ul>
        </div>
    )
}

export default Viewlist
