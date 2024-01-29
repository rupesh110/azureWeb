import { getDataFromDb} from "../../database/addCricketDataDb.js";

const getMatchScheduleHandler = async (request, context) => {
    try {
        const response = await getDataFromDb("schedule");
        const data = await response;

        console.log("🚀 ~ getMatchScheduleHandler ~ response", data);

        return {
            status: 200,
            jsonBody: data,
        };
    } catch (error) {
        console.error("Error in getMatchScheduleHandler:", error);

        return {
            status: 404, // Internal Server Error
            jsonBody: { error: "Bad Request" },
        };
    }
}

export default getMatchScheduleHandler;