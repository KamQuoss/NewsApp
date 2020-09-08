import React from 'react'
import { Input } from 'semantic-ui-react'

class SearchPraseInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
        };
    }

    onSearchChange = (e, data) => {
        let value = data.value;
        if (value.length >= 3) this.setState({ value });
        this.props.onSearchValueChange(value);
    };

    render () {
        return (
            <Input 
            icon='search' 
            placeholder='Szukaj...' 
            onChange={this.onSearchChange}    
            />
        )
    }
}

export default SearchPraseInput