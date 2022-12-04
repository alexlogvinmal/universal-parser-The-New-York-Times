import React from 'react';
import './footer.css';



export function Footer(){

    return(
        <div className='footer'>
            <div className='footer-main'>
                <div className='footer-inf'>
                    <div className='footer1'>
                        <div className='text-footer1'>Рекомендуем</div>
                        <ul className='ul-footer1'>
                            <li className='li-footer11'>Эмма Уотсон бойфренды</li>
                            <li className='li-footer12'>Ненасытный 3 сезон</li>
                            <li className='li-footer13'>Oak Island Drake Tot</li>
                            <li className='li-footer14'>Sims freeplay зимняя страна чудес</li>
                            <li className='li-footer15'>Бронн игра престолов</li>
                        </ul>
                    </div>
                    <div className='footer2'>
                        <div className='text-footer2'>SHARE WITH FRIENDS</div>
                    </div>
                </div>
                <div className='copyright'>Copyright © 2022 Все права защищены</div>
            </div>
        </div>
    )
}