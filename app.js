const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json({strict: false}));

app.get('/', (req, res) => res.send("Function server is up!"));

app.post('/adder', (req, res) => {
    if (req.body instanceof Array) {
        let sum = 0;
        let isOk = true;
        req.body.forEach(item => {
            if (typeof(item) !== 'number') {
                isOk = false;
            } else {
                sum += item;
            }
        });

        if (isOk) {
            res.json(sum);
        } else {
            res.status(400).send('Request must contain array of numbers');            
        }
    } else {
        res.status(400).send('Request must contain array of numbers');
    }
});

app.post('/multiplier', (req, res) =>  {
    if (req.body instanceof Array) {
        let mult = 1;
        let isOk = true;
        req.body.forEach(item => {
            if (typeof(item) !== 'number') {
                isOk = false;
            } else {
                mult *= item;
            }
        });

        if (isOk) {
            res.json(mult);
        } else {
            res.status(400).send('Request must contain array of numbers');            
        }
    } else {
        res.status(400).send('Request must contain array of numbers');
    }
});

app.post('/echo', (req, res) =>  {
    console.log("Got body ", req.body);
    res.status(200).send(req.body);
 });

app.listen(8080, () => console.log('Node functions listening on port 8080'))