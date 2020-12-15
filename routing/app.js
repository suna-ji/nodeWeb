const express = require('express');
const nunjucks = require('nunjucks');
const logger = require('morgan');
const bodyParser = require('body-parser'); // express 내장모듈 -> npm install 없이 바로 가져올 수 있음

const admin = require('./routes/admin');
const contacts = require('./routes/contacts');

const app = express();
const port = 3000;

nunjucks.configure('template', {
    autoescape: true,
    express: app,
});

app.get('/', (req,res) => {
    res.send('express start');
});

// 미들웨어 셋팅
app.use('/admin', admin);
app.use('/contacts', contacts);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));
app.use((req, res, next) => {
    req.body = {

    }
});

app.listen( port, () => {
    console.log('Express listening on port', port);
});