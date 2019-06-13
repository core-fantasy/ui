import React from 'react'
import UserLeagueItem from "./UserLeagueItem";

const UserLeagueList = ({leagues}) => (
    <div>
        Leagues:<br/>
        {leagues.map(league =>
            <UserLeagueItem leagueName={league.name} userTeamName={league.userTeamName}/>
        )}
        <br/>
    </div>
);

export default UserLeagueList;