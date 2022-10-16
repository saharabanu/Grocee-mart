const express  = require('express');
const cookieParser = require('cookie-parser');

const middleware = [express.json(),cookieParser()]

module.exports = middleware



