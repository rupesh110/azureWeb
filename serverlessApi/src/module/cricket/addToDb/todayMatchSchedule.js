import fetchData from "../components/fetchData.js";
import { addDataDb } from "../../database/addCricketDataDb.js";

const todayMatchSchedule = async (request, context) => {
    const apiPath = 'matches/v1/recent';  
    try{
        const response = await fetchData(apiPath);
        const data = await response.typeMatches;
        const result = await addDataDb(data, "liveMatch");
        return {
            status: 202,
            jsonBody: result,
        };
    }
    catch (error) {
        console.log(error);
        return {
            status: 404, // Internal Server Error
            jsonBody: { error: "Bad Request" },
        };
    }
};

export default todayMatchSchedule;
