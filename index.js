const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', ejs);

let comments = [
  {
    username: 'Todd',
    comment: 'lol, that is so funny'
  },
  {
    username: 'Skyler',
    comment: 'I like to go birdwatching with my dog'
  },
  {
    id: uuid(),
    username: 'Sk8erBoi',
    comment: 'Please delete your account, Todd'
  },
  {
    username: 'onlysayswoof',
    comment: 'woof woof woof'
  }
];

app.get('/tacos', (req, res) => {
  res.send('GET /tacos response');
})

app.post('/tacos', (req, res) => {
  const { meat, qty } = req.body;
  res.send(`Order: ${qty} ${meat} tacos`);
})

app.listen(3000, () => {
  console.log('RUNNING ON PORT 3000!');
})