import React from 'react';
import 'react-dropdown/style.css'
import Repo from './Repo';

class Search extends React.Component {


    render() {
        return (
            <div className="search-page">
                <form onSubmit={this._handleSubmit}>
                    <Repo
                      username={'facebook'}
                      reponame={'react'}
                    />
                    <Repo
                      username={'angular'}
                      reponame={'angular.js'}
                    />
                    <Repo
                      username={'emberjs'}
                      reponame={'ember.js'}
                    />
                    <Repo
                      username={'vuejs'}
                      reponame={'vue'}
                    />
                </form>
            </div>
        );
    }
};

export default Search;
