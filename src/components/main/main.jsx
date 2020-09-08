import React from 'react';
import { Switch, Route } from "react-router-dom";
import './main.css'
import AboutPage from './AboutPage';
import HomePage from './HomePage';
import CoffePage from './CoffePage';

const Main = () => (
    <main>
        <Switch>
            <Route exact path="/about">
                <AboutPage />
            </Route>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route exact path="/kawa">
                <CoffePage />
            </Route>
        </Switch>
    </main>
)

export default Main