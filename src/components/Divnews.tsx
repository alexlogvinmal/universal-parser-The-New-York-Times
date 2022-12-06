import React, { useEffect, useState } from 'react';
import './divnews.css';
import { INews } from '../models';

interface NewsProps {
    news: INews
}


export function Divnews({ news }: NewsProps) {
    let Description = '...';
    if(Boolean(news[2].elements) == true){
        Description = news[2].elements[0].text
    }
    let Title = '...';
    if(Boolean(news[0].elements) == true){
        Title = news[0].elements[0].text
    }
    let Imgs = '#';
    if(Boolean(news[3]) == true){
        Imgs = news[3].attributes.url
    }
    let Link = '#';
    if(Boolean(news[1].elements) == true){
        Link = news[1].elements[0].text
    }
    

    return (
        <a className='news-flex' href={Link} target='_blank'>
            <img src={Imgs} width='151px' height='151px'/>
            <div className='news-description'>
                <div className='news-description1'>{Title}</div>
                <div className='news-description2'>{Description}</div>
            </div>
        </a>
    )
}