import React from 'react';
import {Link} from "react-router-dom";
import './header.css'
import LanguageDropdown from '../main/LanguageDropdown';

const Header = ({onLanguageChange}) => (
    <header>
       <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/kawa">Co nowego o kawie?</Link>
            </li>
          </ul>
        </nav>
        <LanguageDropdown onLanguageChange={onLanguageChange}/>
    </header>
)

export default Header