const { getUsersFullname } = require('../database/validateUsers.js');
const { verifyToken } = require('../utils/usersValidate.js');


const getUserFullNameHandler = async (request, context) => {
        try {
            context.log("Endpoint triggered");

            const result = await request.json();
            context.log("Received data:", result);

            if (!result || !result.token) {
                throw new Error("Invalid request. Token is missing.");
            }

            context.log("Token:", result.token);
            const tokenOfUsers = result.token.usersToken || result.token;
            const userDetail = await verifyToken(tokenOfUsers);
            context.log("User details:", userDetail);
            const userFullname = await getUsersFullname(userDetail.userid);
        
            return context.res = {
                body: JSON.stringify({ message: userFullname }),
                status: 200,
            };
        } catch (error) {
            context.log("Error:", error.message);
            return {
                status: 500,
                body: 'Internal Server Error',
            };
        }
    }

module.exports = getUserFullNameHandler;
