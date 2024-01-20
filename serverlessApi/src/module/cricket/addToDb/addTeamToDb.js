import dataFromCrickbuzz from '../components/fetchFromCricbuzz.js';
import { addCricketTeam } from '../../database/cricketTeamList.js';

const addTeamHandler = async (request, context) => {
    const data = await dataFromCrickbuzz();
    const response = await addCricketTeam(data);

    return{
        status: 200,
        jsonBody: await response,
   }
};

export default addTeamHandler;