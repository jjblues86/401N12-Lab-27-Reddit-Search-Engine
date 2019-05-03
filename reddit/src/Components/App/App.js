import React from 'react';
import superagent from 'superagent'
import SearchResultList from '../SearchResultList/SearchResultList';
import SearchForm from "../SearchForm/SearchForm";


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.redditTopics = [{name: 'cats', searchLimit: 10}];
    this.state.reddit = [];

  }

  loadRedditTopics = async () => {
    // Jerome - an async function always! returns a promise
    const REDDIT_API = `https://www.reddit.com/r/${this.state.redditTopics[0].name}.json?limit=${this.state.redditTopics[0].searchLimit}`;
    console.log(REDDIT_API);
    return superagent.get(REDDIT_API)
        .then(response => {
            console.log(response.body);
          this.setState({
              reddit: response.body.data.children
            });
        })
        .catch(console.error);
  };

  handleRedditUpdate =  async (oldName, newName) =>  {
      console.log(oldName);
      console.log(newName);
      await this.setState((previousState) => {
          console.log(previousState);
          return {
              redditTopics: previousState.redditTopics.map(current => {
                 return current.name === oldName ? {...current, name:newName} : current;
              }),
          }
      });
      await this.loadRedditTopics();
};

  render() {
    const { reddit } = this.props;

    return(

        <main>
            <h1>Search on Reddit</h1>
           {
             this.state.redditTopics.map((currentTopic, index) =>
                 // Jerome - this allows us to connect with the SearchResultList file
                 <SearchForm
                     reddit = {currentTopic}
                     handleRedditUpdate = {this.handleRedditUpdate}
                 />
             )
           }
           <ul>
               {
                   this.state.reddit.map((currentList, index) =>
                       <SearchResultList
                           reddit = {currentList}
                           handleNameChange = {this.handleNameChange}
                       />
                   )
               }
           </ul>
        </main>
    )
  }

};
