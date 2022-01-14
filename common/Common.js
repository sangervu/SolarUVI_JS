timeHour = timeValue => {
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

timeMinute = timeValue => {
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
minDegree = degree => {
    while (degree >= 360.)
        degree = degree - 360.;
    while (degree < 0.)
        degree = degree + 360.;
    return degree;
}

/* (0-24 h) Metodi*/
minHour = hour => {
    while (hour >= 24)
        hour = hour - 24;
    while (hour < 0)
        hour = hour + 24;
    return hour;
}

toRadians = degree => radian = degree * Math.PI / 180;
toDegrees = radians => degrees = radians * 180 / Math.PI;

// ES6 mukainen Arrow Functions korvaa tämän !
// function toDegrees(radians) {

//     let degrees = radians * 180 / Math.PI;
//     return degrees;
// }

trueTan = (y, x) => {
    let alfa = Math.atan(y / x) * 180 / (Math.PI);
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
trueElevation = trueDeg => {
    while (trueDeg > 90)
        trueDeg = 180 - trueDeg;
    while (trueDeg < -90)
        trueDeg = 180 + trueDeg;
    return trueDeg;
}

//ei käytössä, mutta voidaan otta käyttöön esim. MathNew.deg2rad()
const MathNew = {
    deg2rad: (deg) => deg * (Math.PI) / 180,
    rad2deg: (rad) => rad * 180 / (Math.PI),
    minHour: (hour) => {
        while (hour >= 24) {
            hour = hour - 24;
        }
        while (hour < 0) {
            hour = hour + 24;
        }
        return hour;
    },
    minDegree: (min) => {
        while (min >= 360.) {
            min = min - 360.;
        }
        while (min < 0.) {
            min = min + 360.;
        }
        return min;
    },
    trueTan: (y, x) => {
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
    roundDesimal_1: (rnd) => {
        rnd = rnd * 10;
        rnd = Math.round(rnd);
        rnd = rnd / 10;
        return rnd;
    },
};
