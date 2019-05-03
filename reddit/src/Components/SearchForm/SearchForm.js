import React from 'react';

export default class SearchForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {};
        this.state.searchResult = this.props.redditTopics;
        this.state.redditCount = [];
    }

    handleChange = event => {
        // Jerome - this is tied to the state
        this.setState({searchResult: event.target.value})
    };

    handleChanges = event => {
        this.setState({redditCount: event.target.value})
    };

    handleSubmit = event => {
        event.preventDefault();
        // this.props.change(this.state)
        this.props.handleRedditUpdate(this.props.redditTopics, this.state.searchResult)
    };

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input name="searchResult"
                       value={this.state.searchResult}
                       onChange={this.handleChange}
                       type="text"/>
                <input type="number" name="redditCount" value={this.state.redditCount} onChange={this.handleChanges}/>
                <button
                 value="Submit"> Update
                </button>
            </form>
        )
    }
}