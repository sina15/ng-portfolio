const express = require('express');
const path = require('path');
const app = express();
const yelp = require('yelp-fusion');
const cors = require('cors')

app.use(express.static(__dirname + '/dist/AngularDemo'));
app.use(cors())

app.get("/search", (req, res) => {
    let query = req.query;

    // Place holder for Yelp Fusion's API Key. Grab them
    // from https://www.yelp.com/developers/v3/manage_app
    const apiKey = process.env.clientId;

    const searchRequest = {
        term: 'Four Barrel Coffee',
        location: 'san francisco, ca'
    };
    const client = yelp.client(apiKey);

    client.search(query).then(response => {
        const firstResult = response.jsonBody;
        const prettyJson = JSON.stringify(firstResult, null, 4);
        res.status(200).send(firstResult)
    }).catch(e => {
        res.status(401).send({message:"not authorized"})
    });

})

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/AngularDemo/index.html'));
});



app.listen(process.env.PORT || 9090, ()=>console.log("server started"));
