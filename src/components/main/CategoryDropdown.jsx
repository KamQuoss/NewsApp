import React from 'react';

class CategoryDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    onValueChange = (e) => {
        const value = e.target.value;
        this.setState({ value });
        this.props.onCategoryChange(value) // to bierze z propsa przekazwanego podczas wywołania?
    }

    render() {
        const { value } = this.state;

        return (
            <form>
                <label>
                    <select value={value} onChange={this.onValueChange}>
                        <option value="business">biznes</option>
                        <option value="entertainment">rozrywka</option>
                        <option value="general">wszystko</option>
                        <option value="health">zdrowie</option>
                        <option value="science">nauka</option>
                        <option value="sports">sport</option>
                        <option value="technology">technologia</option>
                    </select>
                </label>
            </form>
        );
    }
}


export default CategoryDropdown