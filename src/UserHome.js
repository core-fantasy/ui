import React from 'react';
import { Link } from "react-router-dom";
import Copyright from "./Copyright.js"

class UserHome extends React.Component {
    constructor(props) {
        super(props);
        /* TODO: eventually get this from back-end */
        this.state = {
            leagues: [
                {
                    "name": "Core OG",
                    "id": "abc123",
                    "teamName": "Gonna Win",
                    "teamId": "ffff"
                },
                {
                    "name": "Test League",
                    "id": "xyz789",
                    "teamName": "Gonna Lose",
                    "teamId": "ffff"
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <LeagueList leagues={this.state.leagues}/>
                <Copyright/>
            </div>
        )
    }
}

const LeagueList = (props) => {
    return (
        <div>
            <h1>Leagues</h1>
                {props.leagues.map((leagueData) =>
                    <League key={leagueData.id} league={leagueData} />
                )}
        </div>
    )
};

const League = (props) => {
    return (
        <tr>
            <td>
                <Link to={`/football/${props.league.id}`}>{props.league.name}</Link>
            </td>
            <td>
                <Link to={`/football/${props.league.id}/${props.league.teamId}`}>{props.league.teamName}</Link>
            </td>
        </tr>
    )
};

export default UserHome;