function CoordMapType(tileSize) {
    this.tileSize = tileSize;
}

CoordMapType.prototype.getTile = function (coord, zoom, ownerDocument) {

    var distance = Math.pow(2, zoom);

    // Ignoring anything too high or too low.
    if (coord.y < 0 || coord.y >= distance) {
        return ownerDocument.createElement('div');
    }

    // Use modulus or the negative value to be normalized.
    var x = coord.x > 0 ? coord.x % distance : coord.x;

    // Normalize any negative values:
    while (x < 0) x += distance;

    // Populate the tile with the appropriate image.
    var image = ownerDocument.createElement('img');
    image.src = '/tiles/' + zoom + '/' + x + '-' + coord.y + '.png';
    image.style.width = this.tileSize.width + 'px';
    image.style.height = this.tileSize.height + 'px';

    // Setting alt to blank should avoid broken images/tiles.
    image.alt = '';

    return image;
};

function initMap() {

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 3,
        center: {lat: 41.850, lng: -87.650},
        mapTypeId: 'satellite'
    });

    map.overlayMapTypes.insertAt(0, new CoordMapType(new google.maps.Size(256, 256)));
}
