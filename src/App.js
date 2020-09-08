import React, {useState} from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";
import langContext from './langContext';
import MenuExampleBasic from './components/header/HeaderMenu';
import Main from './components/main/main';
import Footer from './components/footer/Footer'

const App = () => {
  const [lang, setLang] = useState('pl');

  return (
    <Router>
    <langContext.Provider value = {lang}>
      <MenuExampleBasic onLanguageChange = {setLang}/>
      <Main />
      <Footer />
    </langContext.Provider>
    </Router>
  )
}

export default App;
