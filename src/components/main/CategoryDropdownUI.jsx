import React from 'react'
import { Dropdown } from 'semantic-ui-react'


const categoryOptions = [
  { key:'b', value:'business', text: 'gospodarka'},
  { key:'e', value:'entertainment', text:'rozrywka'},
  { key:'g', value:'general', text: 'ogólna' },
  { key:'h', value:'health', text:'zdrowie' },
  { key:'c', value:'science', text:'nauka' },
  { key:'s', value:'sports', text:'sport' },
  { key:'t', value:'technology', text:'technologia' }
]

class CategoryDropdownUI extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    onValueChange = (e, data) => {
      let value = data.value;
      console.log(value)
        this.setState({ value });
        this.props.onCategoryChange(value) // to bierze z propsa przekazwanego podczas wywołania
    }

    render() {
        return (          
          <Dropdown
            placeholder='Wybierz kategorię'
            fluid
            search
            selection
            options={categoryOptions}
            onChange={this.onValueChange}
          />         
        );
    }
}

export default CategoryDropdownUI