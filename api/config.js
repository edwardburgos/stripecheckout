const dotenv = require('dotenv');

dotenv.config();

const config = {
    privateApiKey: process.env.PRIVATE_API_KEY,
};

module.exports = config;
