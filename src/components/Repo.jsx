import React from 'react';
import { Link } from 'react-router';
import PropTypes from "prop-types";

class Repo extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
      setInterval( () => {
        fetch(`https://api.github.com/repos/${this.props.username}/${this.props.reponame}`)
        .then(response => response.json())
        .then(
            user => {
                this.setState({
                    user: user
                });
            }
        );
    },1000)

    }

    renderStat(stat) {
        return (
            <li key={stat.name} className="user-info__stat">
                <Link to={stat.url}>
                    <p className="user-info__stat-value">{stat.value}</p>
                    <p className="user-info__stat-name">{stat.name}</p>
                </Link>
            </li>
        );
    }

    render() {
        // If the state doesn't have a user key, it means the AJAX didn't complete yet. Simply render a LOADING indicator.
        if (!this.state.user) {
            return (<div className="user-page">LOADING...</div>);
        }

        // If we get to this part of `render`, then the user is loaded
        const user = this.state.user;

        const stats = [
            {
                name: 'Watchers',
                value: user.watchers,
            },
            {
                name: 'Stars',
                value: user.stargazers_count,
            },
            {
                name: 'Forks',
                value: user.forks,
            }
        ];

        return (
            <div className="user-page">
                <div className="user-info">
                    <Link className="user-info__text" href={"https://github.com/" + this.props.username +"/"+ this.props.reponame}>
                        <img className="user-info__avatar" src={user.owner.avatar_url} alt={`${user.login} avatar`}/>
                        <h2 className="user-info__title">{user.login}{user.full_name}</h2>
                        <p className="user-info__bio">{user.bio}</p>
                    </Link>

                    <ul className="user-info__stats">
                        {stats.map(this.renderStat)}
                    </ul>
                </div>
            </div>
        );
    }
};


Repo.propTypes = {
  username: PropTypes.string.isRequired,
  reponame: PropTypes.string.isRequired,
}

export default Repo;
