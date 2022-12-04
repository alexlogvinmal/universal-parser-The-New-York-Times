import React from 'react';
import './header.css';



export function Header(){

    return(
        <div className='header'>
            <div className='header-name'>sendnews.com</div>
            <ul className='ul-header'>
                <li className='ul-main'>Main</li>
                <li className='ul-sport'>Sport</li>
                <li className='ul-politics'>Politics</li>
                <li className='ul-crypto'>Crypto</li>
            </ul>
        </div>
    )
}