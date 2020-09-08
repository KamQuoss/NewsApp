import React from 'react';
import NewsCard from './NewsCard';
import CategoryDropdownUI from './CategoryDropdownUI';
import SearchPraseInput from './PhraseSearchInput';
import './main.css';
import LangContext from '../../langContext'
import { Pagination, Header, Container, Grid } from 'semantic-ui-react'

class HomePage extends React.Component {
    static contextType = LangContext;
    constructor(props) {
        super(props);

        this.state = {
            results: null,
            category: '',
            color: '',
            seerchQuerry: '',
            lang: 'pl',
            sortBy: '',
            searchPrase: '',
            activePage: 1,
        }
    }

    componentDidMount() {
        this.getArticles();
        this.setState({ lang: this.context });
    }

    componentDidUpdate(prevProps, prevState, snapshot) { // tu można dodać kolejną zmianę
        if (prevState.category !== this.state.category ||
            prevState.lang !== this.state.lang ||
            prevState.sortBy !== this.state.sortBy) {
            this.getArticles()
        }
        if (prevState.searchPrase !== this.state.searchPrase) {
            this.getArticles()
        }
        if (prevState.activePage !== this.state.activePage) {
            this.getArticles()
        }
        if (prevState.lang !== this.context) this.setState({ lang: this.context })
    }

    getArticles() {
        const { category, lang, searchPrase, activePage } = this.state;
        const categoryQuery = category ? `&category=${category}` : '';
        const searchPhraseQuerry = searchPrase ? `&q=${searchPrase}` : '';
        const pageSize = '&pageSize=9';
        const activePageQuerry = `&page=${activePage}`

        fetch(`http://localhost:4000/articles?country=${lang}${categoryQuery}${searchPhraseQuerry}${pageSize}${activePageQuerry}`)
            .then((response) => response.json())
            .then((results) => this.setState({ results }));
        console.log(`http://localhost:4000/articles?country=${lang}${categoryQuery}${searchPhraseQuerry}${pageSize}${activePageQuerry}`)
    }

    setCategory = (category) => {
        this.setState({ category });
        switch (category) {
            case 'business':
                this.state.color = 'teal';
                break;
            case 'entertainment':
                this.state.color = 'pink';
                break;
            case 'general':
                this.state.color = 'grey';
                break;
            case 'health':
                this.state.color = 'violet';
                break;
            case 'science':
                this.state.color = 'green';
                break;
            case 'sports':
                this.state.color = 'blue';
                break;
            case 'technology':
                this.state.color = 'red';
                break;
            default:
                this.state.color = 'grey';
        }
    };
    setSortBy = (sortBy) => this.setState({ sortBy });
    setSearchPrase = (searchPrase) => this.setState({ searchPrase });
    onPageChange = (e, { activePage }) => this.setState({ activePage });

    render() {
        const { results } = this.state;

        if (!results) return (<div>Nie znalazłam tego co cię interesuje</div>);
        return (
            <Container>
                <Header as='h1' textAlign='center' color={this.state.color}>Najświeższe newsy</Header>
                <Grid columns={2} divided>
                    <Grid.Row>
                        <Grid.Column>
                            <SearchPraseInput onSearchValueChange={this.setSearchPrase} />
                        </Grid.Column>
                        <Grid.Column>
                            <CategoryDropdownUI onCategoryChange={this.setCategory} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <div id="home-page">
                    {results.articles.map((item) => (
                        <NewsCard
                            urlToImage={item.urlToImage}
                            source={item.source.name}
                            author={item.author}
                            title={item.title}
                            description={item.description}
                            url={item.url}
                            key={item.publishedAt}
                            color={this.state.color}
                        />
                    ))
                    }
                </div>
                {results && results.totalResults >= 9 ?
                    <Pagination
                        defaultActivePage={1}
                        totalPages={Math.ceil(results.totalResults / 9)}
                        onPageChange={this.onPageChange}
                    />
                    : null}
            </Container>
        )
    }
}

export default HomePage