const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/hello', (req, res) => {
    res.send({message: 'Hello Express!!!!!!!!!!!!'});
});

app.get('/api/customers', (req, res) => {
    res.send([
        {
          'id':1,
          'image':'https://placeimg.com/64/64/1',
          'name': '탁규환',
          'birthday':'961222',
          'gender':'남자',
          'job':'대학생'
        },
        {
          'id':2,
          'image':'https://placeimg.com/64/64/2',
          'name': '탁구공',
          'birthday':'860829',
          'gender':'남자',
          'job':'프로그램'
        },
        {
          'id':3,
          'image':'https://placeimg.com/64/64/3',
          'name': '김탁구',
          'birthday':'890511',
          'gender':'남자',
          'job':'가정부'
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port t ${port}`));
