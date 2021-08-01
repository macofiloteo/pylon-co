const express = require('express');
const bodyParser = require('body-parser');
const app = express().use(bodyParser.json());
const port = 3000

const endpoints = require('./endpoints')

app.use('', endpoints)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})