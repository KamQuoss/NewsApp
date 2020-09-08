import React from 'react'
import { Dropdown } from 'semantic-ui-react'


const sortByOptions = [
  { key:'rel', value:'relevancy', text: 'trafność'},
  { key:'pop', value:'popularity', text:'popularność'},
  { key:'pub', value:'publishedAt', text: 'najnowsze' }
]

class SortByDropdownUI extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    onValueChange = (e, data) => {
      let value = data.value;
      this.setState({ value });
      this.props.onSortByChange(value)
      console.log(value)
    }

    render() {
        return (          
          <Dropdown
            placeholder='Sortuj'
            fluid
            search
            selection
            options={sortByOptions}
            onChange={this.onValueChange}
          />         
        );
    }
}

export default SortByDropdownUI