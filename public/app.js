/* Application code goes here */

/* Create an object to use as a namespace */
var marktool = {};

marktool.initialiseMap = function (
    mapid,
    data
) {
    var mymap = L.map(mapid).setView(data.startview.latlon, data.startview.zoom);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'openstreetmap'
    }).addTo(mymap);

    marktool.addMarksToMap(
        mymap,
        data.marks
    );
}

marktool.addMarksToMap = function (
    map,
    marks
) {
    for (var i = 0; i < marks.length; i++) {
        var marker = L.marker([marks[i].lat, marks[i].lon]).addTo(map);
        marker.bindPopup(marks[i].name);
    }
}

$(document).ready(function () {
    marktool.initialiseMap("mapid",bscdata)
}
)

