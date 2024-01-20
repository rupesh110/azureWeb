import { getCricketTeam } from "../../database/cricketTeamList.js";

const getCricketTeamHandler = async (request, context) => {
    try {
        const response = await getCricketTeam();
        const data = await response;

        const teamNames = data.map((element) => ({ 
            teamName: element.teamName,
            status: element.status,
            teamId: element._id,
            teamSName: element.teamSName,
        }));

        console.log("🚀 ~ getCricketTeamHandler ~ response", teamNames);

        return {
            status: 200,
            jsonBody: teamNames,
        };
    } catch (error) {
        console.error("Error in getCricketTeamHandler:", error);

        return {
            status: 404, // Internal Server Error
            jsonBody: { error: "Bad Request" },
        };
    }
};


export default getCricketTeamHandler;
