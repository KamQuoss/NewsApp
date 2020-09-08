import React, { useState, useEffect, useContext } from 'react';
import DatePicker from "react-datepicker";
import { setDefaultLocale } from "react-datepicker";
import pl from 'date-fns/locale/pl';
import langContext from '../../langContext'
import moment from 'moment'
import "react-datepicker/dist/react-datepicker.css";
import NewsCard from './NewsCard';
import './main.css';

setDefaultLocale('pl');

const CoffePage = () => {
    const [startDate, setStartDate] = useState(moment().subtract(12, 'months').toDate());
    const [endDate, setEndDate] = useState(moment().toDate());
    const [results, setResults] = useState(null);
    const lang = useContext(langContext)

    const fetchArticles = () => {
        fetch(`http://localhost:4000/kawa?language=${lang}&from${startDate.toISOString()}&to=${endDate.toISOString()}`)
            .then((response) => response.json())
            .then((res) => setResults(res));
        console.log(`http://localhost:4000/kawa?language=${lang}&from${startDate.toISOString()}&to=${endDate.toISOString()}`)
    }

    useEffect(() => { fetchArticles(); }, [startDate, endDate, lang]);

    return (
        <div>
            <div>
                Pokaż artykuły od <DatePicker
                    selected={startDate}
                    onChange={setStartDate}
                    locale={pl} /> do <DatePicker
                    selected={endDate}
                    onChange={setEndDate}
                    locale={pl}
                />
            </div>
            <div className='Coffe-news-page'>{results ? (results.articles.map((item) => (
                <NewsCard
                    urlToImage={item.urlToImage}
                    // source={item.source.name}
                    source={item.publishedAt}
                    author={item.author}
                    title={item.title}
                    description={item.description}
                    url={item.url}
                    key={item.publishedAt}
                />
            ))
            ) :
                <div>Nie mam newsów</div>}
            </div>
        </div>
    )
};

export default CoffePage