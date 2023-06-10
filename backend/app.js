const express = require('express');
const cors = require('cors');
const app = express();
const reportsRouter = require('./routes/reports');

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use('/api/reports', reportsRouter)

module.exports = app;