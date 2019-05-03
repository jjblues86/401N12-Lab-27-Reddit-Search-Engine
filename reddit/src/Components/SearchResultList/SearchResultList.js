import React from 'react';
import superagent from 'superagent';

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
                <br />
                <a href={`https://reddit.com/${reddit.data.permalink}`} target="_blank">{reddit.data.title}</a>
                <p>Ups: {reddit.data.ups}</p>
                <p>author: {reddit.data.author}</p>
            </li>

        )
    }

    }
