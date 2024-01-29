import { app } from '@azure/functions';

//import dataFromCrickbuzz from '../module/cricket/components/fetchFromCricbuzz.js';
import addTeamHandler from '../module/cricket/addToDb/addTeamToDb.js';
import getCricketTeamHandler from '../module/cricket/team/cricketTeamData.js';

import getMatchSchedule from '../module/cricket/addToDb/matchSchedule.js';
import getMatchScheduleHandler from '../module/cricket/respondToEndpoints/scheduledMatch.js';

// app.http('cricketData',{
//     methods: ['GET', 'POST'],
//     authLevel: 'anonymous',
//     handler: dataFromCrickbuzz
// })

app.http('addTeam',{
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: addTeamHandler
})

app.http('getTeam',{
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    route: 'cricket/getTeam',
    handler: getCricketTeamHandler
})

app.http('fetchData',{
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: getMatchScheduleHandler
})

app.http('matchSchedule',{
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    route: 'cricket/matchSchedule',
    handler: getMatchSchedule
})