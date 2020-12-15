const express = require('express');
const nunjucks = require('nunjucks');
const logger = require('morgan');
const bodyParser = require('body-parser'); // express 내장모듈 -> npm install 없이 바로 가져올 수 있음

const admin = require('./routes/admin');

const app = express();
const port = 3000;

nunjucks.configure('template', {
    autoescape: true,
    express: app,
});

// 미들웨어 셋팅
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));

app.use('/uploads', express.static('uploads'));
// 정적파일 보관할 폴더위치 지정
// 앞에가 url 뒤에가 폴더명
app.use((req, res, next) => {
    app.locals.isLogin = true;
    next();
});

app.get('/', (req,res) => {
    res.send('express start');
});
app.use((req, res, _) => {
    res.status(400).render('common/404.html');
})// 404 페이지만 보여주고 끝나기 때문에 next 필요없음 -> _ 써줌
app.use((req, res, _) => {
    res.status(500).render('common/500.html');
})
// Routing
app.use('/admin', admin);

// 어디서든 isLogin이라는 변수에 접근 가능
app.listen( port, () => {
    console.log('Express listening on port', port);
});

