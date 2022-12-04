import React, { useEffect, useState } from 'react';
import './divnews.css';
import { INews } from '../models';

interface NewsProps {
    news: INews
}


export function Divnews({ news }: NewsProps) {
    let Description = 'soon';
    if(Boolean(news[2].elements) == true){
        Description = news[2].elements[0].text
    }
    

    return (
        <a className='news-flex' href={news[1].elements[0].text} target='_blank'>
            <a href={news[1].elements[0].text}></a>
            <img src={news[3].attributes.url} width='151px' height='151px'/>
            <div className='news-description'>
                <div className='news-description1'>{news[0].elements[0].text}</div>
                <div className='news-description2'>{Description}</div>
            </div>
        </a>
    )
}