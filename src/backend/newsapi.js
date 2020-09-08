const superagent = require('superagent');

const NEW_API_URL = 'https://newsapi.org/v2'
const TOP_HEADKLINES = '/top-headlines';
const API_KEY = '530118884ceb495b845912be43eadbfd';

const EVERYTHING_ENDPIONT_PATH = '/everything';

// const getArticles = (query) => {
//     console.log('jestem w getArticles')
//     superagent
//     .get(`${NEW_API_URL}${TOP_HEADKLINES}`)
//     .query({ ...query, country: 'pl', apiKEY: API_KEY });
// }

const getArticles = (query) => superagent
    .get(`${NEW_API_URL}${TOP_HEADKLINES}`)
    .query({
        country: 'pl', 
        ...query,        
        apiKey: API_KEY
    });

const getCoffeNews = (query) => superagent
    .get(`${NEW_API_URL}${EVERYTHING_ENDPIONT_PATH}`)
    .query({
        language: 'pl',
        ...query,
        apiKey: API_KEY,
        q: 'kawa',
    });

module.exports = {
    getArticles,
    getCoffeNews,
}