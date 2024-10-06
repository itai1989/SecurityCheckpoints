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


