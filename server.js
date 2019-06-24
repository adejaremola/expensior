const express = require('express');
const mongoose = require('mongoose');


const users = require('./routes/api/users');
const expenses = require('./routes/api/expenses');

const app = express();

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to mongoDB
mongoose
    .connect(db)
    .then(() => console.log('MongoBD connection success'))
    .catch((err) => console.log(err));

app.get('/', (req, res) => res.send('Hello World'));

// Use routes
app.use('/api/users', users);
app.use('/api/expenses', expenses);

const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`server running on port ${port}`));