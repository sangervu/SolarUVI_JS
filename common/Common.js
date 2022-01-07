function common() {

    var MathNew = {
        deg2rad: function (deg) {
            return deg * (Math.PI) / 180;
        },

        rad2deg: function (rad) {
            return rad * 180 / (Math.PI);
        },

        minHour: function (hour) {
            while (hour >= 24) {
                hour = hour - 24;
            }
            while (hour < 0) {
                hour = hour + 24;
            }
            return hour;
        },

        minDegree: function (min) {
            while (min >= 360.) {
                min = min - 360.;
            }
            while (min < 0.) {
                min = min + 360.;
            }
            return min;
        },

        trueTan: function (y, x) {
            var alfa = y / x;
            alfa = Math.atan(alfa) * 180 / (Math.PI);
            //if (y >= 0 & x > 0)
            //alfa = y/x;
            if (y >= 0 & x < 0)
                alfa = alfa + 180;
            if (y < 0 & x > 0)
                alfa = alfa + 360;
            if (y < 0 & x < 0)
                alfa = alfa + 180;
            return alfa;
        },

        roundDesimal_1: function (rnd) {
            rnd = rnd * 10;
            rnd = Math.round(rnd);
            rnd = rnd / 10;
            return rnd;
        },
    };
}

// Set background color based on UVI index
function setUviColor(uvIndex) {
    if (uvIndex >= 10) {
        setBgColorById("rgb(153,140,255)");
        setFontColorById("PYSY POIS AURINGOSTA!", "Red");
    }
    if (uvIndex < 10 & uvIndex >= 9.0) {
        setBgColorById("rgb(181,76,255)");
        setFontColorById("PYSY POIS AURINGOSTA!", "Red");
    }
    if (uvIndex >= 8.0 & uvIndex < 9.0) {
        setBgColorById("rgb(255,0,153)");
        setFontColorById("PYSY POIS AURINGOSTA!", "Red");
    }
    if (uvIndex >= 7.0 & uvIndex < 8.0) {
        setBgColorById("rgb(216,0,29)");
        setFontColorById("5 min MAX AURINGOSSA!", "Red");
    }
    if (uvIndex >= 6.0 & uvIndex < 7.0) {
        setBgColorById("rgb(232,44,14)");
        setFontColorById("15 min MAX AURINGOSSA!", "Red");
    }
    if (uvIndex >= 5.0 & uvIndex < 6.0) {
        setBgColorById("rgb(248,89,0)");
        setFontColorById("Varo UV säteilyä!", "Red");
    }
    if (uvIndex >= 4.0 & uvIndex < 5.0) {
        setBgColorById("rgb(248,135,0)");
        setFontColorById("Suuri riski UV säteilystä", "Brown");
    }
    if (uvIndex >= 3.0 & uvIndex < 4.0) {
        setBgColorById("rgb(248,182,0)");
        setFontColorById("Riski UV säteilystä", "Orange");
    }
    if (uvIndex >= 2.0 & uvIndex < 3.0) {
        setBgColorById("rgb(160,206,0)");
        setFontColorById("Pieni riski UV säteilystä", "Gold");
    }
    if (uvIndex >= 1.0 & uvIndex < 2.0) {
        setBgColorById("rgb(78,180,0)");
        setFontColorById("Vähäinen riski UV säteilystä", "Cyan");
    }
    if (uvIndex >= 0 & uvIndex < 1.0) {
        setBgColorById("rgb(190,190,190)");
        setFontColorById("Ei vaaraa UV säteilystä", "blue");
    }
}

function timeHour(timeValue) {
    // hour value
    if (isNaN(timeValue)) {
        return "-";
    }
    var hourTime = Math.floor(timeValue);
    if (hourTime < 10) {
        return "0" + hourTime;
    } else {
        return hourTime;
    }
}

function timeMinute(timeValue) {
    // minute value
    if (isNaN(timeValue)) {
        return "-";
    }
    var minuteTime = Math.floor((timeValue - Math.floor(timeValue)) * 60);
    if (minuteTime < 10) {
        return "0" + minuteTime;
    } else {
        return minuteTime;
    }
}

/* (0-360 deg) Metodi*/
function minDegree(degree) {
    while (degree >= 360.)
        degree = degree - 360.;
    while (degree < 0.)
        degree = degree + 360.;
    return degree;
}

/* (0-24 h) Metodi*/
function minHour(hour) {
    while (hour >= 24)
        hour = hour - 24;
    while (hour < 0)
        hour = hour + 24;
    return hour;
}

function toRadians(degree) {

    var radian = degree * Math.PI / 180;
    return radian;
}

function toDegrees(radians) {

    var degrees = radians * 180 / Math.PI;
    return degrees;
}

function trueTan(y, x) {
    var alfa = Math.atan(y / x) * 180 / (Math.PI);
    //if (y >= 0 & x > 0)
    //alfa = y/x;
    if (y >= 0 && x < 0)
        alfa = alfa + 180;
    else if (y < 0 && x > 0)
        alfa = alfa + 360;
    else if (y < 0 && x < 0)
        alfa = alfa + 180;
    return alfa;
}

/* (-90 to 90) degrees Metodi*/
function trueElevation(trueDeg) {
    while (trueDeg > 90)
        trueDeg = 180 - trueDeg;
    while (trueDeg < -90)
        trueDeg = 180 + trueDeg;
    return trueDeg;
}

// Metodi deg => ESNW, eli atsimuutti asteet muutetaan "selkokielelle"
function NorthSouthEastWest(atsimuutti) {
    suunta = " ";
    if ((atsimuutti >= (180. - 11.25)) && (atsimuutti < (180. + 11.25))) {
        suunta = suunta + "S";
    }
    else if ((atsimuutti >= (157.5 - 11.25)) && (atsimuutti < (157.5 + 11.25))) {
        suunta = suunta + "SSE";
    }
    else if ((atsimuutti >= (135 - 11.25)) && (atsimuutti < (135 + 11.25))) {
        suunta = suunta + "SE";
    }
    else if ((atsimuutti >= (112.5 - 11.25)) && (atsimuutti < (112.5 + 11.25))) {
        suunta = suunta + "ESE";
    }
    else if ((atsimuutti >= (90 - 11.25)) && (atsimuutti < (90 + 11.25))) {
        suunta = suunta + "E";
    }
    else if ((atsimuutti >= (67.5 - 11.25)) && (atsimuutti < (67.5 + 11.25))) {
        suunta = suunta + "ENE";
    }
    else if ((atsimuutti >= (45 - 11.25)) && (atsimuutti < (45 + 11.25))) {
        suunta = suunta + "NE";
    }
    else if ((atsimuutti >= (22.5 - 11.25)) && (atsimuutti < (22.5 + 11.25))) {
        suunta = suunta + "NNE";
    }
    else if ((atsimuutti >= (360 - 11.25)) || (atsimuutti < 11.25)) {
        suunta = suunta + "N";
    }
    else if ((atsimuutti >= (337.5 - 11.25)) && (atsimuutti < (337.5 + 11.25))) {
        suunta = suunta + "NNW";
    }
    else if ((atsimuutti >= (315 - 11.25)) && (atsimuutti < (315 + 11.25))) {
        suunta = suunta + "NW";
    }
    else if ((atsimuutti >= (292.5 - 11.25)) && (atsimuutti < (292.5 + 11.25))) {
        suunta = suunta + "WNW";
    }
    else if ((atsimuutti >= (270 - 11.25)) && (atsimuutti < (270 + 11.25))) {
        suunta = suunta + "W";
    }
    else if ((atsimuutti >= (247.5 - 11.25)) && (atsimuutti < (247.5 + 11.25))) {
        suunta = suunta + "WSW";
    }
    else if ((atsimuutti >= (225 - 11.25)) && (atsimuutti < (225 + 11.25))) {
        suunta = suunta + "SW";
    }
    else if ((atsimuutti >= (202.5 - 11.25)) && (atsimuutti < (202.5 + 11.25))) {
        suunta = suunta + "SSW";
    }
    return suunta;
}

function UvWarning(uvIndex) {
    // varoitustekstit UVI säteilyn intensiteetin mukaan
    if (uvIndex >= 10) {
        //setBgColorById ("rgb(153,140,255)");
        return  "PYSY POIS AURINGOSTA!";
    }
    if (uvIndex < 10 && uvIndex >= 9.0) {
        //setBgColorById ("rgb(181,76,255)");
        return  "PYSY POIS AURINGOSTA!";
    }
    if (uvIndex >= 8.0 && uvIndex < 9.0) {
        //setBgColorById ("rgb(255,0,153)");
        return  "PYSY POIS AURINGOSTA!";
    }
    if (uvIndex >= 7.0 && uvIndex < 8.0) {
        //setBgColorById ("rgb(216,0,29)");
        return  "5 min MAX AURINGOSSA!";
    }
    if (uvIndex >= 6.0 && uvIndex < 7.0) {
        //setBgColorById ("rgb(232,44,14)");
        return  "15 min MAX AURINGOSSA!";
    }
    if (uvIndex >= 5.0 && uvIndex < 6.0) {
        //setBgColorById ("rgb(248,89,0)");
        return  "Varo UV säteilyä!";
    }
    if (uvIndex >= 4.0 & uvIndex < 5.0) {
        //setBgColorById ("rgb(248,135,0)");
        return  "Suuri riski UV säteilystä";
    }
    if (uvIndex >= 3.0 && uvIndex < 4.0) {
        //setBgColorById ("rgb(248,182,0)");
        return  "Riski UV säteilystä";
    }
    if (uvIndex >= 2.0 && uvIndex < 3.0) {
        //setBgColorById ("rgb(160,206,0)");
        return  "Pieni riski UV säteilystä";
    }
    if (uvIndex >= 1.0 && uvIndex < 2.0) {
        //setBgColorById ("rgb(78,180,0)");
        return  "Vähäinen riski UV säteilystä";
    }
    if (uvIndex >= 0 && uvIndex < 1.0) {
        //setBgColorById ("rgb(190,190,190)");
        return  "Ei vaaraa UV säteilystä";
    }
}