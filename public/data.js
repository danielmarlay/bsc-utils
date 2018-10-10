/* This file defines the static data for the BSC courses and marks */
var bscdata = {
    marks: [
        {
            id: 1,
            name: "Mark 1",
            lat_d: -33,
            lat_m: -49.329,
            lon_d: 151,
            lon_m: 15.383,
            transits: [
                "Rotunda and mobile phone tower above RHS of island",
                "3 light pole on Naval jetty & lift well/flag pole in the centre of main naval building"
            ]
        }
    ]
}

for (var i = 0; i < bscdata.marks.length; i++) {
    bscdata.marks[i].lat = bscdata.marks[i].lat_d + (bscdata.marks[i].lat_m/60.0);
    bscdata.marks[i].lon = bscdata.marks[i].lon_d + (bscdata.marks[i].lon_m/60.0);
}