const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('express start ');
});

app.get('/fastcampus', (req, res)=> {
    res.send('fastcampus');
});

app.listen(port, ()=>{
    console.log('Express listening on port', port);
});