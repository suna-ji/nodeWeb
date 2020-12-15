const express = require('express');
const router = express.Router();

function testMiddleWare(req, res, next){
    console.log('첫번째 미들웨어');
    next();
}

function testMiddleWare2(req, res, next){
    console.log('두번째 미들웨어');
    next();
}

router.get('/', testMiddleWare, testMiddleWare2, (req, res) => {
    res.send('admin 이후 url');
});

router.get('/products', (req, res) => {
    res.render('admin/products.html',{
        message:"hello!!!!!!!?????" 
    });
    // res.send('admin products');
});
// nunjucks configure에서 template라고 설정했으므로 template폴더 이후로 위치 설정하면 된다.

router.get('/products/write', (req, res)=>{
    res.render('admin/write.html');
});

router.post('/products/write', (req, res)=>{
    res.send(req.body);
})

module.exports = router;