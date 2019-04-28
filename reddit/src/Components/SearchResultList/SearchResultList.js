import React from 'react';
import superagent from 'superagent';
import SearchForm from '../SearchForm/SearchForm';

export default class SearchResultList extends React.Component {

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
            <li onClick={this.handleClick}>
               <p>{reddit.data.title}</p>
                {
                   reddit.data.thumbnail ? <img src={reddit.data.thumbnail}/> : undefined

                }
            </li>
        )
    }

    }
