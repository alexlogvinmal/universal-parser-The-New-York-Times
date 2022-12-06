import React from 'react';
import './footer.css';



export function Footer() {

    return (
        <div className='footer'>
            <div className='footer-main'>
                <ul className='ul-footer1'>
                <div className='text-footer1'>Other</div>
                    <li className='li-footer1'><a className='a-footer' href='#'>Main</a></li>
                    <li className='li-footer1'><a className='a-footer' href='#'>Sport</a></li>
                    <li className='li-footer1'><a className='a-footer' href='#'>Politics</a></li>
                    <li className='li-footer1'><a className='a-footer' href='#'>Crypto</a></li>
                </ul>
            <div className='footer2'>
                <div className='text-footer2'>SHARE WITH FRIENDS</div>
            </div>
            </div>
          
            <div className='copyright'>Copyright © 2022 </div>
        </div>
    )
}