var express = require('express');
var router = express.Router();

const messages = [ 
  {
    text: "She might be the one",
    user: "Ted",
    added: new Date().toISOString().
    replace(/T/, ' ').
    replace(/\..+/, '') 
  }, 
  {
    text: "Legend...wait for it",
    user: "Barney",
    added: new Date().toISOString().
    replace(/T/, ' ').  
    replace(/\..+/, '') 
  }
]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Messages', messages:messages });
});

// new page
router.get('/new', function(req,res,next) {
  res.render('newform', {title: 'What u wana say'});
})

router.post('/new', function(req,res,next){
  const text = req.body.content;
  const user = req.body.name;
  const date = new Date().toISOString().
  replace(/T/, ' ').
  replace(/\..+/, '');
  console.log(date)
  const message = {
    text: text,
    user: user,
    added: date
  }
  messages.push(message);
  res.redirect('/');
  return
})

module.exports = router;
