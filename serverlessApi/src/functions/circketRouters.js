import { app } from '@azure/functions';

//import dataFromCrickbuzz from '../module/cricket/components/fetchFromCricbuzz.js';
import addTeamHandler from '../module/cricket/addToDb/addTeamToDb.js';
import getCricketTeamHandler from '../module/cricket/team/cricketTeamData.js';
import fetchData from '../module/cricket/components/fetchData.js';

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
    handler: getCricketTeamHandler
})

app.http('fetchData',{
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: fetchData
})