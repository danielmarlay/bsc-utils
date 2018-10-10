/* Application code goes here */

$(document).ready(function () {
    var mymap = L.map('mapid').setView([-33.8155, 151.2649], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'openstreetmap'
    }).addTo(mymap);

    for (var i=0; i < bscdata.marks.length; i++) {
        var marker = L.marker([bscdata.marks[i].lat,bscdata.marks[i].lon]).addTo(mymap);
        marker.bindPopup(bscdata.marks[i].name);
    }
}
)
