import { getDataFromDb } from "../../database/addCricketDataDb.js"

const getLiveMatchData = async (request, context) => {
    const response = await getDataFromDb("liveMatch");
    return {
        status: 200,
        jsonBody: response,
    };
};

export default getLiveMatchData;