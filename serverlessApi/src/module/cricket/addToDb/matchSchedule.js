import fetchData from "../components/fetchData.js";
import {addDataDb} from "../../database/addCricketDataDb.js";

const getMatchSchedule = async (request, context) => {
    try {
        const response = await fetchData();
        const data = await response.matchScheduleMap;

        const newData = data.filter((element) => !element.adDetail);

        const result = await addDataDb(newData);


        return {
            status: 200,
            jsonBody: newData,
        };
    } catch (error) {
        console.log(error);
        return {
            status: 404, // Internal Server Error
            jsonBody: { error: "Bad Request" },
        };
    }
}

export default getMatchSchedule;