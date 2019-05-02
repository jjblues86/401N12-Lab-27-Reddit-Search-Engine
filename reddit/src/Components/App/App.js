import React from 'react';
import superagent from 'superagent'
import SearchResultList from '../SearchResultList/SearchResultList';
import SearchForm from "../SearchForm/SearchForm";


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.SearchForm = [];
    // this.state.SearchResultList = [];
  }

  loadRedditTopics =  (red) => {
      console.log(red);
    const REDDIT_API = `https://www.reddit.com/r/${red.catsTitle}.json?limit=${red.redditCount}`;

    return superagent.get(REDDIT_API)
        .then(response => {

          this.setState({
              reddit: response.body.data.children
            });
        })
        .catch(console.error);
  };

  // handleRedditUpdate = (updatedCats) => {
  //   this.setState((previousState) => {
  //     return {
  //       reddit: previousState.reddit.map(current =>
  //           current.title === updatedCats.title ? updatedCats : current
  //       )
  //     }
  //   });
  //
  // };

  render() {
    const { reddit } = this.props;

    return(
        <main>
          <SearchForm change={this.loadRedditTopics}/>
         <ul>
           {
             this.state.SearchForm.map((currentTitle, index) =>
                 // Jerome - this allows us to connect with the SearchResultList file
                 <SearchResultList
                     // reddit = {currentTitle}
                     // handleRedditUpdate = {this.handleRedditUpdate}
                     // handleNameChange = {this.handleNameChange}
                 />

               // <li>{currentTitle.data.title}</li>
             )
           }
         </ul>

        </main>
    )
  }

};
