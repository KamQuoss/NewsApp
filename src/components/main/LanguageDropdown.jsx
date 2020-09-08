import React from "react";
import { Dropdown } from 'semantic-ui-react';
import './LanguageDropdown.css'

const lang = [
    {
        key: "ae",
        value: "ae",
        flag: "ae",
        text: "Zjednoczone Emiraty Arabskie",
    },
    {
        key: "ar",
        value: "ar",
        flag: "ar",
        text: "Argentyna",
    },
    {
        key: "at",
        value: "at",
        flag: "at",
        text: "Austria",
    },
    {
        key: "au",
        value: "au",
        flag: "au",
        text: "Australia",
    },
    {
        key: "be",
        value: "be",
        flag: "be",
        text: "Belgia",
    },
    {
        key: "bg",
        value: "bg",
        flag: "bg",
        text: "Bułgaria",
    },
    {
        key: "br",
        value: "br",
        flag: "br",
        text: "Brazylia",
    },
    {
        key: "ca",
        value: "ca",
        flag: "ca",
        text: "Kanada",
    },
    {
        key: "ch",
        value: "ch",
        flag: "ch",
        text: "Szwajcaria",
    },
    {
        key: "cn",
        value: "cn",
        flag: "cn",
        text: "Chiny",
    },
    {
        key: "co",
        value: "co",
        flag: "co",
        text: "Demokratyczna Republika Konga",
    },
    {
        key: "cu",
        value: "cu",
        flag: "cu",
        text: "Kuba",
    },
    {
        key: "cz",
        value: "cz",
        flag: "cz",
        text: "Czechy",
    },
    {
        key: "de",
        value: "de",
        flag: "de",
        text: "Niemcy",
    },
    {
        key: "eg",
        value: "eg",
        flag: "eg",
        text: "Egipt",
    },
    {
        key: "fr",
        value: "fr",
        flag: "fr",
        text: "Francja",
    },
    {
        key: "gb",
        value: "gb",
        flag: "gb",
        text: "Wielka Brytania",
    },
    {
        key: "gr",
        value: "gr",
        flag: "gr",
        text: "Grecja",
    },
    {
        key: "hk",
        value: "hk",
        flag: "hk",
        text: "Hongkong",
    },
    {
        key: "hu",
        value: "hu",
        flag: "hu",
        text: "Węgry",
    },
    {
        key: "id",
        value: "id",
        flag: "id",
        text: "Indonezja",
    },
    {
        key: "ie",
        value: "ie",
        flag: "ie",
        text: "Irlandia",
    },
    {
        key: "il",
        value: "il",
        flag: "il",
        text: "Izrael",
    },
    {
        key: "in",
        value: "in",
        flag: "in",
        text: "Indie",
    },
    {
        key: "it",
        value: "it",
        flag: "it",
        text: "Włochy",
    },
    {
        key: "jp",
        value: "jp",
        flag: "jp",
        text: "Japonia",
    },
    {
        key: "kr",
        value: "kr",
        flag: "kr",
        text: "Korea Południowa",
    },
    {
        key: "lt",
        value: "lt",
        flag: "lt",
        text: "Litwa",
    },
    {
        key: "lv",
        value: "lv",
        flag: "lv",
        text: "Łotwa",
    },
    {
        key: "ma",
        value: "ma",
        flag: "ma",
        text: "Maroko",
    },
    {
        key: "mx",
        value: "mx",
        flag: "mx",
        text: "Meksyk",
    },
    {
        key: "my",
        value: "my",
        flag: "my",
        text: "Malezja",
    },
    {
        key: "ng",
        value: "ng",
        flag: "ng",
        text: "Nigeria",
    },
    {
        key: "nl",
        value: "nl",
        flag: "nl",
        text: "Holandia",
    },
    {
        key: "no",
        value: "no",
        flag: "no",
        text: "Norwegia",
    },
    {
        key: "nz",
        value: "nz",
        flag: "nz",
        text: "Nowa Zelandia",
    },
    {
        key: "ph",
        value: "ph",
        flag: "ph",
        text: "Filipiny",
    },
    {
        key: "pl",
        value: "pl",
        flag: "pl",
        text: "Polska",
    },
    {
        key: "pt",
        value: "pt",
        flag: "pt",
        text: "Portugalia",
    },
    {
        key: "ro",
        value: "ro",
        flag: "ro",
        text: "Rumunia",
    },
    {
        key: "rs",
        value: "rs",
        flag: "rs",
        text: "Serbia",
    },
    {
        key: "ru",
        value: "ru",
        flag: "ru",
        text: "Rosja",
    },
    {
        key: "sa",
        value: "sa",
        flag: "sa",
        text: "Arabia Saudyjska",
    },
    {
        key: "se",
        value: "se",
        flag: "se",
        text: "Szwecja",
    },
    {
        key: "sg",
        value: "sg",
        flag: "sg",
        text: "Singapur",
    },
    {
        key: "si",
        value: "si",
        flag: "si",
        text: "Słowenia",
    },
    {
        key: "sk",
        value: "sk",
        flag: "sk",
        text: "Słowacja",
    },
    {
        key: "th",
        value: "th",
        flag: "th",
        text: "Tajlandia",
    },
    {
        key: "tr",
        value: "tr",
        flag: "tr",
        text: "Turcja",
    },
    {
        key: "tw",
        value: "tw",
        flag: "tw",
        text: "Tajwan",
    },
    {
        key: "ua",
        value: "ua",
        flag: "ua",
        text: "Ukraina",
    },
    {
        key: "us",
        value: "us",
        flag: "us",
        text: "Stany Zjednoczone",
    },
    {
        key: "ve",
        value: "ve",
        flag: "ve",
        text: "Wenezuela",
    },
    {
        key: "za",
        value: "za",
        flag: "za",
        text: "Południowa Afryka",
    },
];

class LanguageDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
        };
    }

    onValueChange = (e, data) => {
        let value = data.value;
        this.setState({ value });
        this.props.onLanguageChange(value);
    };

    render() {
        return (
            <Dropdown
                placeholder='Wybierz kraj'
                fluid
                search
                selection
                options={lang}
                onChange={this.onValueChange}
                className={'fixedWidth'}
            />
        );
    }
}

export default LanguageDropdown;
