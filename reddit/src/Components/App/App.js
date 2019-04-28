import React from 'react';
import superagent from 'superagent'
import SearchResultList from '../SearchResultList/SearchResultList';



export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.reddit = [];
  }

  // Jerome - this function call allows the api to return your request
  async componentDidMount() {
    await this.loadRedditTopics();
  }

  loadRedditTopics = async () => {
    const REDDIT_API = 'https://www.reddit.com/r/cats.json?limit=100';

    return superagent.get(REDDIT_API)
        .then(response => {
            this.setState({
              reddit: response.body.data.children
            });
        })
        .catch(console.error);
  };

  handleRedditUpdate = (updatedCats) => {
    this.setState((previousState) => {
      return {
        reddit: previousState.reddit.map(current =>
            current.url === updatedCats.url ? updatedCats : current
        )
      }
    });

  };

  render() {
    return(
        <main>
         <ul>
           {
             this.state.reddit.map((currentTitle, index) =>
                 // Jerome - this allows use to connect with the SearchResultList file
                 <SearchResultList
                     reddit = {currentTitle}
                     handleRedditUpdate = {this.handleRedditUpdate}
                 />
               // <li>{currentTitle.data.title}</li>
             )
           }
         </ul>
        </main>
    )
  }

};
