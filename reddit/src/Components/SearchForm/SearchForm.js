import React from 'react';

export default class SearchForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {};
        // this.state.catsTitle = [];
        // this.state.redditCount = [];
    }

    handleChange = event => {
        this.setState({catsTitle: event.target.value})
    };

    handleChanges = event => {
        this.setState({redditCount: event.target.value})
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.change(this.state)
        // this.props.handleNameChange(this.props.title, this.state.catsTitle)
    };

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input name="catsTitle"
                       value={this.state.catsTitle}
                       onChange={this.handleChange}
                       type="text"/>

                <input type="number" name="redditCount" value={this.state.redditCount} onChange={this.handleChanges}/>
                <button type="submit"> Update</button>
            </form>
        )
    }
}