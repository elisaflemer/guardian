const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}))
// app.use('/api/goals', goalsRouter)
// app.use('/api/users', usersRouter)
// app.use(errorHandler.errorHandler)

module.exports = app;