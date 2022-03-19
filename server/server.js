const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const cors = require('cors');

mongoose.connect('mongodb+srv://michaelsnyder14:Family1957@cluster0.cipbc.mongodb.net/blogSoloProject?retryWrites=true&w=majority')
    .then(() => console.log('Connected to the database...'))
    .catch(error => console.log('Error occured: ', error));

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../client/public/index.html'));
});

app.post('/', (req, res) => {
    return res.send('haaaay');
})

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

