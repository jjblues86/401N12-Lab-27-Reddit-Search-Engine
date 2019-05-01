import React from 'react';

export default class SearchForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {};
        this.state.catsTitle = this.props.reddit.data.title;
        
    }

    handleChange = event => {
        this.setState({catsTitle: event.target.value})
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.handleNameChange(this.props.reddit.data.title, this.state.catsTitle)
    };

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input name="catsTitle"
                       value={this.state.catsTitle}
                       onChange={this.handleChange}
                       type="text"/>
                <button type="submit"> Update</button>
            </form>
        )
    }
}