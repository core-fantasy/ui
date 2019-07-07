import React from 'react'
import { Route, Switch } from "react-router-dom";
import LandingController from '../containers/LandingController';
import NotFound from "../NotFound";
//import UserLeagueList from "./UserLeageList";
//import League from "./League";

// TODO:
//  https://www.npmjs.com/package/react-cookie
//  https://codeburst.io/theming-react-components-e0be23465946
//  https://stackoverflow.com/questions/52261260/react-dynamic-themes
/*
let userLeagues = [
    {name: "Core.Fantasy", userTeamName: "3rd String Stars"},
    {name: "4th & 99", userTeamName: "Watch Me Hit A Touchdown"},
];

let teams = [
    {name: "3rd String Stars", owner: "Some User Id", icon: "pic.jpg"},
    {name: "Luke Nukem", owner: "KyleUserId", icon: "pic.jpg"}
];

<UserLeagueList leagues={userLeagues}/>
<League teams={teams}/>
*/
const App = () => {

    return (
        <Switch>
            <Route exact path="/" component={LandingController}/>
            <Route component={NotFound} />
        </Switch>
    );
};

export default App
