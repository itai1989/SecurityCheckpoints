const port = 5050;

const express = require('express');
const app = express();
app.use(express.json());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const path = require('path');
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {  
    console.log(`Now listening on port http://localhost:${port}`);
});

//-----------------------------------------------------------------
let points=[
    {id:0, name:"עמל", description:"בית ספר"   ,time:"7:00"}
]

app.post('/AddPoint', (req, res) => {
    let point={};
    point.id  = req.body.id;
    point.name = req.body.name;
    point.description = req.body.description;
    point.time = req.body.time;
    points.push(point);

    res.status(200).json("ok");
});
app.get('/pointsList', (req, res) => {
    res.status(200).json(points);
});
