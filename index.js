const express = require('express');
const app = express();

// Find the steps here to obtain a map API key:
// https://developers.google.com/maps/documentation/javascript/get-api-key
const GOOGLE_API_KEY = 'Use your key here.';
const PORT = 8080;

app.get('/', (req, res) => {
    res.send(`<!doctype html>
<html>
<head>
    <title>Example</title>
    <link rel="stylesheet" href="/style.css"/>
</head>
<body>
    <div id="map"></div>
    <script src="/script.js"></script>
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&callback=initMap"></script>
</body>
</html>`);
});

app.use(express.static('public'));

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
