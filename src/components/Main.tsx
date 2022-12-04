import React, { useEffect, useState } from 'react';
import './main.css';
import { useNews } from '../hooks/News';
import { Divnews } from './Divnews';




export function Main() {
    const {XmlData} = useNews()
    // console.log(XmlData)


    return (
        <div className='main'>
            {XmlData.map(e=> <Divnews news={e}/>)}
        </div>
    )
}