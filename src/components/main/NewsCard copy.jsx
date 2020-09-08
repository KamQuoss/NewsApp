import React from 'react';
import './main.css'

const NewsCard = (props) => (

<div className='news-card'>
    <div className='news-card-img'>
        <img src={props.urlToImage} alt=''/>
    </div>
    <div className='news-card-source'>{props.source}</div>
    <div className='news-card-text'>
        <h2>
            {props.title}
        </h2>
        <p>{props.description}</p>
        <a href={props.url} target='blank'>Zobacz więcej...</a>
    </div>
</div>
)

export default NewsCard