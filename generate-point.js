const _ = require('lodash');
const steinmetz = require('steinmetz');
const path = require('path');

const instance = new steinmetz.Steinmetz({
    out: './public/tiles',
    zooms: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
});

instance.points.push(
    new steinmetz.PointModel(
        new steinmetz.CoordinateModel( // We divide by 1000 to simulate precision.
            _.random(-90000, 90000) / 1000, // Latitude is between 0 and (+/-)90 degrees.
            _.random(-180000, 180000) / 1000 // Longitude is between 0 and (+/-)180 degrees.
        ),
        new steinmetz.ImageModel(null, path.join(__dirname, 'square.png'))
    )
);

instance.render(error => console.log({error}));
