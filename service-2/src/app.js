const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const { reverseString } = require('./utils');

const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

//Code to handle /reverse call
router.post('/reverse',(req,res) => {
    //To access POST variable use req.body()methods.
    console.log(req.body);
    const str = req.body.message;
    res.json({ message: reverseString(str) });
});

app.use('/', router);

//Error Handling
app.use((req, res) => {
    res.status(404).json('Page Not Found');
});

app.use((error, req, res, next) => {
    res.status(500).json('Page Error');
    console.log(error);
});

module.exports = app;