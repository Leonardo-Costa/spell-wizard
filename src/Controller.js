import express from 'express';
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, ans) => {
  ans.send('My BE server is running...');
});

const port = process.env.PORT || 3000;

app.listen(port, (req, ans) => {
  console.log('Server Running');
});
