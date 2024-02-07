import { app } from '@azure/functions';

import addTeamHandler from '../module/cricket/addToDb/addTeamToDb.js';
import getMatchSchedule from '../module/cricket/addToDb/matchSchedule.js';
import todayMatchSchedule from '../module/cricket/addToDb/todayMatchSchedule.js';

app.http('addTeam',{
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: addTeamHandler
})

app.http('fetchData',{
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: getMatchSchedule
})

app.http('liveMatch',{
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    route: 'fetch/liveMatch',
    handler: todayMatchSchedule
})