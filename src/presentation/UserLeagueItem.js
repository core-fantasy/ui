import React from 'react'

// TODO: league icon?
// TODO: list team ranking (i.e., x/y)?
const UserLeagueItem = ({leagueName, userTeamName}) => (
    <div>
        {leagueName} ({userTeamName})
    </div>
);

export default UserLeagueItem;
