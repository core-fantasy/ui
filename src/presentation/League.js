import React from 'react'
import TeamItem from "./TeamItem";

const League = ({teams}) => (
    <div>
        <div>
            <span>Settings</span> <span>Commissioner</span> <span>Draft</span>
        </div>
        {teams.map(team =>
            <TeamItem key={team.name} name={team.name} owner={team.owner} icon={team.icon}/>
        )}
    </div>
);

export default League
