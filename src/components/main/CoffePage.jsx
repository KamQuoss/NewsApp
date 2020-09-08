import React, { useState, useEffect, useContext } from 'react';
import DatePicker from "react-datepicker";
import { setDefaultLocale } from "react-datepicker";
import pl from 'date-fns/locale/pl';
import langContext from '../../langContext'
import moment from 'moment'
import "react-datepicker/dist/react-datepicker.css";
import NewsCard from './NewsCard';
import SortByDropdownUI from './SortByDropdown';
import { Header, Container, Grid } from 'semantic-ui-react'
import './main.css';

setDefaultLocale('pl');

const CoffePage = () => {
    const [startDate, setStartDate] = useState(moment().subtract(12, 'months').toDate());
    const [endDate, setEndDate] = useState(moment().toDate());
    const [sortBy, setSortBy] = useState(null);
    const [results, setResults] = useState(null);
    const lang = useContext(langContext)

    const fetchArticles = () => {
        fetch(`http://localhost:4000/kawa?language=${lang}&from${startDate.toISOString()}&to=${endDate.toISOString()}&sortBy=${sortBy}`)
            .then((response) => response.json())
            .then((res) => setResults(res));
    }

    useEffect(() => { fetchArticles(); }, [startDate, endDate, sortBy, lang]);

    return (
        <Container>
            <Header as='h1' textAlign='center' color='brown'>Wiadomości na temat kawy</Header>
            <Grid columns={3}>
                <Grid.Row>
                    <Grid.Column>
                        Pokaż artykuły od <DatePicker
                            selected={startDate}
                            onChange={setStartDate}
                            locale={pl} />
                    </Grid.Column>
                    <Grid.Column>
                        do <DatePicker
                            selected={endDate}
                            onChange={setEndDate}
                            locale={pl}
                        />
                    </Grid.Column>
                    <Grid.Column>
                        <SortByDropdownUI onSortByChange={setSortBy} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>

            <div className='Coffe-news-page'>{results ? (results.articles.map((item) => (
                <NewsCard
                    urlToImage={item.urlToImage}
                    source={item.source.name}
                    author={item.author}
                    title={item.title}
                    description={item.description}
                    url={item.url}
                    key={item.publishedAt}
                    color={'red'}
                />
            ))
            ) :
                <div>Nie mam newsów</div>}
            </div>
        </Container>
    )
};

export default CoffePage