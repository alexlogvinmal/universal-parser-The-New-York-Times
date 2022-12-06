import React, { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios'
import { xml2json } from 'xml-js';
import { INews } from '../models';

export function useNews() {

    const [XmlData, setXmlData] = useState<INews[]>([])


    async function fetchNews() {
        const response = await axios.get('https://rss.nytimes.com/services/xml/rss/nyt/World.xml')
        const json = JSON.parse(xml2json(response.data,));
        setXmlData(json.elements[0].elements[0].elements.filter(function (e: any) { return e.name == 'item'; }).map(function (e: any) { return e.elements.filter(function (e: any) { return e.name == 'title' || e.name == 'link' || e.name == 'description' || e.name == 'media:content'; }) }));

    }

    // console.log(XmlData)

    useEffect(() => {
        fetchNews()
    }, [])




    return {XmlData}

}

