import React from 'react'
import UserLeagueItem from "./UserLeagueItem";

const UserLeagueList = ({leagues}) => (
    <div>
        Leagues:<br/>
        {leagues.map(league =>
            <UserLeagueItem key={league.name} leagueName={league.name} userTeamName={league.userTeamName}/>
        )}
        <br/>
    </div>
);

export default UserLeagueList;