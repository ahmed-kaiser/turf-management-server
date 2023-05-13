const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

const turfInfo = require('./turfdata.json');

app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('/turfs', (req, res) => {
    res.send(turfInfo);
});

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});