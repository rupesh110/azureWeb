import { app } from '@azure/functions';

//import dataFromCrickbuzz from '../module/cricket/components/fetchFromCricbuzz.js';

import getCricketTeamHandler from '../module/cricket/team/cricketTeamData.js';


import getMatchScheduleHandler from '../module/cricket/respondToEndpoints/scheduledMatch.js';

import getLiveMatchData from '../module/cricket/respondToEndpoints/liveMatchData.js';


app.http('getTeam',{
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    route: 'cricket/getTeam',
    handler: getCricketTeamHandler
})


app.http('matchSchedule',{
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    route: 'cricket/allSchedules',
    handler: getMatchScheduleHandler
})

app.http('todayMatchSchedule',{
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    route: 'cricket/todayMatchSchedule',
    handler: getLiveMatchData
})

