import React from 'react';

export default class SearchForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {};
        // this.state.catsTitle = this.props.title.data;
        
    }

    render() {
        return(
            <form>
                <input name="catTopics"
                       type="text"/>
                <button type="submit"> Update</button>
            </form>
        )
    }
}