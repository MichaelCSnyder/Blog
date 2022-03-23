const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');

dotenv.config({path: path.resolve(__dirname, './.env')});
const app = express();
const authenticationRouter = require('./routers/authentication');
const usersRouter = require('./routers/users');
const postsRouter = require('./routers/posts');

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Connected to the database...'))
    .catch(error => console.log('Error occured: ', error));

app.use(cors());
app.use(express.json());

// send requests to appropriate router
app.use('/authentication', authenticationRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);

// statically serve everything in the build folder on the route '/build' when using production build
app.use('/build', express.static(path.join(__dirname, '../build')));

// serve homepage
app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../client/public/index.html'));
});

// catch bad paths
app.use((req, res) => {
    return res.status(404).send('The page you are trying to find does not exist!')
});

// global error handler
app.use((error, req, res, next) => {
    const defaultMessage = {
        log: 'An unknown error occured in the backend',
        message: 'An unknown error occured in the backend'
    };
    const errorMessage = Object.assign({}, defaultMessage, error);
    console.log(errorMessage.log);
    return res.status(500).json(errorMessage.message);
})

// start server
app.listen(3000, () => console.log('Listening on port 3000...')); //listens on port 3000 -> http://localhost:3000/

