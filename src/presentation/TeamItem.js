import React from 'react'

const TeamItem = ({name, owner, icon}) => (
    <div>
        <img src={icon} alt={name}/>{name} ({owner})
    </div>
);

export default TeamItem