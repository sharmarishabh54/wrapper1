const Payment = require('./payment');
const axios = require('axios');

module.exports = ({ baseURL, username, password}) => {
    const axiosInstance = axios.create({
        baseURL: baseURL,
        Headers:{
            'content-type':'application/json',
            Accept: 'application/json',

        },
        auth: {
            username: username,
            password: password,
        }
    });
    const payment = Payment({axiosInstance});
    return {payment};
};