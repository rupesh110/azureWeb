// const { getUsersFullname } = require('../database/validateUsers.js');
// const { verifyToken } = require('../utils/usersValidate.js');

const getUserFullNameHandler = async (context, request) => {
    try {
        const requestData = await request.json();

        if (!requestData || !requestData.token) {
            throw new Error("Invalid request. Token is missing.");
        }

        const tokenOfUsers = requestData.token.usersToken || requestData.token;
        // const userDetail = await verifyToken(tokenOfUsers);
        // const userFullname = await getUsersFullname(userDetail.userid);

        const userDetail = "userDetail"
        const userFullname = "userFullname"

        context.log("User details:", userDetail);

        return {
            body: JSON.stringify({ message: userFullname }),
            status: 200,
        };
    } catch (error) {
        if (context && context.log && typeof context.log.error === 'function') {
            context.log.error("Error:", error.message);
        }

        return {
            body: JSON.stringify({ error: 'Internal Server Error' }),
            status: 502,
        };
    }
};

module.exports = getUserFullNameHandler;
