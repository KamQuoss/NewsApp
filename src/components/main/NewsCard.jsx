import React from 'react';
import { Card } from 'semantic-ui-react'
import './card.css'

const NewsCard = (props) => (
<Card
    image={props.urlToImage}
    header={props.title}
    meta={props.source}
    description={props.description}
    extra={<a href={props.url} target='blank'>Zobacz więcej...</a>}
    color={props.color}
  />
)

export default NewsCard