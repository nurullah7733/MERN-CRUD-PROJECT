const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./src/routes/api');

const app = express();

// security middleware

const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');
const xss = require('xss-clean');

// Implement Security Middleware

app.use(cors());
// app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());
app.use(xss());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Implement Rate Limiter
const limiter = rateLimit({ windowMs: 15 * 60 * 100, max: 3000 });
app.use(limiter);

// Database
const onlineDatabase =
    'mongodb+srv://nur:nur@cluster0.y610b.mongodb.net/CRUD?retryWrites=true&w=majority';
const offline = 'mongodb://127.0.0.1:27017/crud';
const option = { user: '', pass: '' }; //for atsal connect user: nur password: nur
mongoose.connect(
    offline,
    option,

    (err, success) => {
        if (err) {
            console.log('database connect fail');
        } else {
            console.log('database connect successfully');
        }
    }
);

app.use('/api/v1', router);

// ******************************************* Managing Front End Routing

// app.use(express.static('client/build'));
// app.get('/', function (req, res) {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
// });

module.exports = app;
