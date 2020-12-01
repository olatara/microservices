const express = require('express');
const router = express.Router();
const request = require('request');
const bodyParser = require('body-parser');
const axios = require('axios');
const { SERVICE_2 , SERVICE_2_PORT } = process.env;

const service_2 = `http://${SERVICE_2}:${SERVICE_2_PORT}`;

const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
    
//code to perform call to /api path
router.post('/api', async(req, res) => {
    //To access POST variable use req.body()methods.
    try {
        const reverse = await axios.post(service_2 + '/reverse', req.body)
        reverse.data["rand"] = Math.random()
        res.json(reverse.data)

    } catch (error) {
        res.json({"Message": error.message})
    }
});

app.use('/', router);

//Error Handling
app.use((req, res) => {
    res.status(404).json('Page Not Found');
});

app.use((error, req, res, next) => {
    res.status(500).json('Page Error');
});

module.exports = app;