import React from 'react';
import superagent from 'superagent';
import SearchForm from '../SearchForm/SearchForm';

export default class SearchResultList extends React.Component {
// Jerome - this part is where you get the new objects and use ... to get the old ones from App.js
    handleClick = () => {
        const { reddit } = this.props;

        if(!this.props.reddit.data.thumbnail) {
            return superagent.get(reddit.url)
                .then(response => {
                    this.props.handleRedditUpdate({
                        ...reddit,
                        imageURL : response.body.data.thumbnail,
                    });
                })
                .catch(console.error)
        }

    };

    render() {
        const { reddit } = this.props;

        return(

            // Jerome - this part is where the images and titles of cats from reddit api render on the browser
            <li onClick={this.handleClick}>
               <p>{reddit.data.title}</p>

                {
                   reddit.data.thumbnail ? <img src={reddit.data.thumbnail}/> : undefined

                }
                <SearchForm
                reddit = {reddit}
                    handleNameChange = {this.props.handleNameChange}
                />

            </li>

        )
    }

    }
