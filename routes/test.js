var express = require('express');
var router = express.Router();

router.all('/', (req, res, next) => {
    res.render('test', { title: 'Test'});
    next();
});

router.post('/test', (req, res) =>{
	console.log(req.body.txt);
});

module.exports = router;
