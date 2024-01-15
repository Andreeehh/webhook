const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

const hubVerifyToken = 'test';
const accessToken = '';

app.use(bodyParser.json());

app.get('/', (req, res) => {
  const hubChallenge = req.query['hub_challenge'];
  const hubVerifyTokenReceived = req.query['hub_verify_token'];

  if (
    req.method === 'GET' &&
    hubChallenge &&
    hubVerifyTokenReceived === hubVerifyToken
  ) {
    res.status(200).send(hubChallenge);
  } else {
    res.status(403).send('Invalid request');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
