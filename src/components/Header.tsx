import React from 'react';
import './header.css';



export function Header(){

    return(
        <div className='header'>
            <div className='header-name'><a className='a-header' href='#'>sendnews.com</a></div>
            <ul className='ul-header'>
                <li className='ul-main curent'><a className='a-header' href='#'>Main</a></li>
                <li className='ul-sport'><a className='a-header' href='#'>Sport</a></li>
                <li className='ul-politics'><a className='a-header' href='#'>Politics</a></li>
                <li className='ul-crypto'><a className='a-header' href='#'>Crypto</a></li>
            </ul>
        </div>
    )
}