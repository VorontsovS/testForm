var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* router.get('/',(req, res)=>{
  res.render('index',{})
});

router.all('/test',(req, res) =>{
  res.render('test',{});
  next();
})


router.post('/test', (req, res) =>{
	console.log(req.body.txt);
});*/


module.exports = router;
