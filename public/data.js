/* This file defines the static data for the BSC courses and marks */
var bscdata = {
    startview: {
        latlon: [-33.820, 151.2649],
        zoom: 14
    },
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
            ],
            depth: 6
        },
        {
            id: 2,
            name: "Mark 2",
            lat_d: -33,
            lat_m: -49.206,
            lon_d: 151,
            lon_m: 15.908,
            transits: [
                "Balmoral beach club (White 2 story building on beach) and block of units on skyline at AWABA ST",
                "Base of Middle Head and Macquarie Lighthouse(southern skyline )"
            ],
            depth: 10
        },
        {
            id: 3,
            name: "Mark 3",
            lat_d: -33,
            lat_m: -48.971,
            lon_d: 151,
            lon_m: 15.294,
            transits: [
                "Hornby light on Sth Head and the edge of Middle Head",
                "Castle Rock LHS beach and sparse pine tree on skyline",
                "Mobile phone tower on skyline and LHS Edwards beach",
                "Base Wyargine Pt. & lift well on single flats on skyline"
            ],
            depth: 4
        },
        {
            id: 4,
            name: "Mark 4",
            lat_d: -33,
            lat_m: -49.154,
            lon_d: 151,
            lon_m: 15.554,
            transits: [
                "3 light pole on Naval jetty and stone/brick chimney",
                "Centre of white block of flats on Manly point (beige high rise behind) and Grotto Pt. base"
            ],
            depth: 6
        },
        {
            id: 5,
            name: "Mark 5",
            lat_d: -33,
            lat_m: -49.196,
            lon_d: 151,
            lon_m: 15.313,
            transits: [
                "LHS of large red brick block of flats on water front and lift well on centre of unit block at top of Awaba street.",
                "3 light pole on Naval jetty & lift well/flag pole in the centre of the main naval building"
            ],
            depth: 6
        },
        {
            id: 6,
            name: "Mark 6",
            lat_d: -33,
            lat_m: -49.065,
            lon_d: 151,
            lon_m: 16.499,
            transits: [
                "Line of West and South cardinal marks of Bombora",
                "Cannae point flagstaff & water tower on skyline above quarantine station "
            ],
            depth: 14
        },
        {
            id: 7,
            name: "Mark 7",
            lat_d: -33,
            lat_m: -48.660,
            lon_d: 151,
            lon_m: 15.119,
            transits: [
                "Rosherville light tower at RHS of Chinaman’s Beach & LHS of brown 3 story house below",
                "White chapel (spire) HMAS Watson (Sth Hd.) & cliff face of Middle Hd.",
                "Single Pine tree on hill above Spit Bridge control tower"
            ],
            note: "Caution, adjacent to a deeper hole, check location carefully",
            depth: 22
        },
        {
            id: 8,
            name: "Mark 8",
            lat_d: -33,
            lat_m: -49.484,
            lon_d: 151,
            lon_m: 16.380,
            transits: [
                "Line of Awaba Street at Spit Road & cliff face of Middle Hd.",
                "Green Stbd. lateral (West channel closest to Middle Hd.) & communications tower on the skyline above Rose Bay"
            ],
            depth: 14
        },
        {
            id: 9,
            name: "Mark 9",
            lat_d: -33,
            lat_m: -48.713,
            lon_d: 151,
            lon_m: 16.890,
            transits: [
                "LHS of Quarantine hospital (yellow building at rhs) and pine tree (the RHS one) on the skyline and sheds on wharf.",
                "4 knot Sign on rock face Manly Pt and centre line of large white unit block on Manly point (West side Little Many cove)"
            ],
            depth: 15
        },
        {
            id: 10,
            name: "Mark 10",
            lat_d: -33,
            lat_m: -49.842,
            lon_d: 151,
            lon_m: 16.674,
            transits: [
                "\"Wedding cake\" (White structure) & LHS Neilson Park beach",
                "Obelisks in line and lined up with black junction buoy",
                "Dobroyd Head extended base &LH block of units on skyline"
            ],
            depth: 15
        },
        {
            id: 11,
            name: "Mark 11",
            lat_d: -33,
            lat_m: -49.991,
            lon_d: 151,
            lon_m: 16.385,
            transits: [
                "Red Channel mark off Georges Hd. & Centre Pt. tower",
                "Red channel mark (lateral) at Sth Hd. & Hornby light"
            ],
            note: "This mark should be at least 50 metres from the junction buoy and away from both channels",
            depth: 12
        },
        {
            id: 12,
            name: "Mark 12",
            lat_d: -33,
            lat_m: -49.175,
            lon_d: 151,
            lon_m: 16.41,
            transits: [
                "Grotto Pt. Light & TV tower on skyline (4th block from left)",
                "Flagstaff on Cannae Point and the square tower of St Patricks (looking North)"
            ],
            depth: 17
        },
        {
            id: 13,
            name: "Mark 13",
            lat_d: -33,
            lat_m: -49.178,
            lon_d: 151,
            lon_m: 16.087,
            transits: [
                "Wedding cake (white navigational structure towards Vaucluse point) and water tower on Southern Skyline",
                "Mobile phone tower above Balmoral (on spit road) and RHS of the Island."
            ],
            depth: 11
        },
        {
            id: 14,
            name: "Mark 14",
            lat_d: -33,
            lat_m: -49.380,
            lon_d: 151,
            lon_m: 16.62,
            transits: [
                "Flagpole on Cannae point and lift well of unit block up the hill from little manly beach (must be near #14 position to see lift well above Cannae Pt) [Hint, units clearly seen from #9]",
                "Mobile phone tower above Balmoral and base of inner middle head."
            ],
            depth: null
        }

    ],
    courses: [
        {
            id: 11,
            name: "Mirror course 1",
            classes: [
                "Mirror"
            ],
            winds: [
                "NE"
            ],
            startnear: 1,
            finishnear: 2,
            marks:     [  2,   3,   1,   2,   1,   2,   3,   1],
            roundings: ["P", "P", "P", "P", "P", "P", "P", "P"]
        },
        {
            id: 12,
            name: "Mirror course 2",
            classes: [
                "Mirror"
            ],
            winds: [
                "NW"
            ],
            startnear: 2,
            finishnear: 4,
            marks:     [  3,   1,   2,   3,   2,   3,   1,   2],
            roundings: ["P", "P", "P", "P", "P", "P", "P", "P"]
        },
        {
            id: 13,
            name: "Mirror course 3",
            classes: [
                "Mirror"
            ],
            winds: [
                "S",
                "SW"
            ],
            startnear: 3,
            finishnear: 5,
            marks:     [  1,   4,   3,   1,   3,   1,   4,   3,   1,   3],
            roundings: ["P", "P", "P", "P", "P", "P", "P", "P", "P", "P"]
        },
        {
            id: 14,
            name: "Mirror course 4",
            classes: [
                "Mirror"
            ],
            winds: [
                "SE"
            ],
            startnear: 3,
            finishnear: 1,
            marks:     [  2,   1,   3,   2,   3,   2,   1,   3],
            roundings: ["S", "S", "S", "S", "S", "S", "S", "S"]
        },
        {
            id: 15,
            name: "Mirror course 5",
            classes: [
                "Mirror"
            ],
            winds: [
                "W",
                "SW"
            ],
            startnear: 2,
            finishnear: 1,
            marks:     [  1,   3,   2,   1,   2,   1,   3,   2],
            roundings: ["S", "S", "S", "S", "S", "S", "S", "S"]
        },
        {
            id: 16,
            name: "Mirror course 6",
            classes: [
                "Mirror"
            ],
            winds: [
                "N"
            ],
            startnear: 1,
            finishnear: 5,
            marks:     [  3,   2,   1,   3,   1,   3,   2,   1],
            roundings: ["S", "S", "S", "S", "S", "S", "S", "S"]
        },
        {
            id: 17,
            name: "Mirror course 7",
            classes: [
                "Mirror"
            ],
            winds: [
                "E"
            ],
            startnear: 5,
            finishnear: 2,
            marks:     [  2,   1,   3,   2,   3,   2,   1,   3],
            roundings: ["S", "S", "S", "S", "S", "S", "S", "S"]
        }
    ]
}

for (var i = 0; i < bscdata.marks.length; i++) {
    bscdata.marks[i].lat = bscdata.marks[i].lat_d + (bscdata.marks[i].lat_m/60.0);
    bscdata.marks[i].lon = bscdata.marks[i].lon_d + (bscdata.marks[i].lon_m/60.0);
}

bscdata.classes = new Array();
bscdata.winds = new Array();
for (var i=0; i < bscdata.courses.length; i++) {
    var course = bscdata.courses[i];
    for (var j=0; j < course.classes.length; j++) {
        var boatclass = course.classes[j];
        var found = false;
        for (var k=0; k < bscdata.classes.length; k++) {
            if (boatclass == bscdata.classes[k]) {
                found = true;
            }
        }
        if (!found) {
            bscdata.classes = bscdata.classes.concat(boatclass);
        }
    }
    for (var j=0; j < course.winds.length; j++) {
        var wind = course.winds[j];
        var found = false;
        for (var k=0; k < bscdata.winds.length; k++) {
            if (wind == bscdata.winds[k]) {
                found = true;
            }
        }
        if (!found) {
            bscdata.winds = bscdata.winds.concat(wind);
        }
    }
}