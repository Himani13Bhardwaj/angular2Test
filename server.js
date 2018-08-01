var express = require('express');
var app = express();

app.get('/admin', (req, res) => {
    res.render('index', { res, req });
});

app.listen(4200, () => {
    console.log('Listening');
});