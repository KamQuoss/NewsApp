import React from 'react';
import { Container, Header, List } from 'semantic-ui-react';

const AboutPage = () => (
    <Container>
        <Header as='h1'>O stronie</Header>
        <p>
            Strona przygotowana podczas kursu fullstack developer. Wykorzystano do jej stworzenai takie biblioteki jak:
            </p>
            <List bulleted>
            <List.Item>React - dzięki temu w oóle działa</List.Item>
            <List.Item>Semantic UI React - stąd mamy wygląd</List.Item>
            <List.Item>node.js - pilnuje, zeby wszystkie bibilioteki były zgodne i mogły poprawnie pracować</List.Item>
            <List.Item>News API - stąd mamy wiadomości</List.Item>
            <List.Item>moment - pięnie obsługuje daty w js</List.Item>
            <List.Item>React Datepicker - obsługa kalendarza</List.Item>
            <List.Item>...</List.Item>
        </List>

    </Container>
)

export default AboutPage