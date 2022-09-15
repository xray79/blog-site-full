export {};
const cors = require("cors");

// cors middleware allows requests to be made to api from localhost
const localhostHandler = () => cors();

module.exports = { localhostHandler };
