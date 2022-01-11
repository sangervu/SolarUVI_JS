
function calculations(pos) {
    //double uvIndexOverTwoRad = Math.toRadians(90.0 - 55.0); //degrees in Sun elevation, UV
    var a = 2.696056;
    var b = 5.474571;
    var c = -0.09888;
    var d = 0.040392;
    var currentSunElevation = toRadians(pos.solarPositionLocal.currentSunElevation);
    var maxSunElevation = toRadians(pos.solarPositionLocal.maxSunElevation);
    var maxSunElevationAnnual;
    var epsilon = toDegrees(pos.solarPositionTrue.epsilon);

    if (locations.latitude < epsilon && locations.latitude > -epsilon) {
        maxSunElevationAnnual = toRadians(90.);
    } else if (locations.latitude > epsilon) {
        maxSunElevationAnnual = toRadians(90. - locations.latitude + epsilon);
    } else {
        maxSunElevationAnnual = toRadians(90. + locations.latitude + epsilon);
    }
    var m = 1. / (Math.cos(Math.asin(6371. / 6393. * Math.sin((Math.PI / 2 - currentSunElevation)))));
    var uvIndexLimit = toRadians(90.0 - 48.0); //degrees in Sun elevation, UVI > 3
    var mMax = 1. / Math.cos(Math.asin(6371. / 6393. * Math.sin((Math.PI / 2 - maxSunElevation))));
    var mMaxAnnual = 1. / Math.cos(Math.asin(6371. / 6393. * Math.sin((Math.PI / 2 - maxSunElevationAnnual))));

    var latitude = toRadians(locations.latitude);
    var delta = toRadians(pos.solarPositionDeg.delta);

    /******** Solar UVI calculation**********/

    var uvIndex = Math.round(10 * Math.pow(Math.cos(Math.PI / 2 - currentSunElevation), a) * Math.exp(b + c * m + d * m * m) / 25.) / 10.;
    if (isNaN(uvIndex)) {
        uvIndex = 0;
    }

    var uvIndexMax = Math.round(10 * Math.pow(Math.cos(Math.PI / 2 - maxSunElevation), a) * Math.exp(b + c * mMax + d * mMax * mMax) / 25.) / 10.;
    if (isNaN(uvIndexMax)) {
        uvIndexMax = 0;
    }

    var uvIndexMaxAnnual = Math.round(10 * Math.pow(Math.cos(Math.PI / 2 - maxSunElevationAnnual), a) * Math.exp(b + c * mMaxAnnual + d * mMaxAnnual * mMaxAnnual) / 25.) / 10.;
    var uvIndexOverThree = Math.round(10 * 2 * Math.acos(-Math.tan(delta) * Math.tan(latitude) + Math.sin(uvIndexLimit) / (Math.cos(delta) * Math.cos(latitude))) / (2 * Math.PI) * 24.) / 10.;
    if (isNaN(uvIndexOverThree)) {
        uvIndexOverThree = 0;
    }
    else if (isNaN(uvIndex) || uvIndexOverThree === 0) {
        var uvIndexEnd = 0;
    }
    else {
        var uvIndexEnd = pos.solarPositionLocal.timeSunSouth + uvIndexOverThree / 2;
    }

    /******** Solar power calculation**********/
    // Current solar power
    var solarPower = Math.round(10 * 1350.0 * Math.sin(currentSunElevation) * Math.pow(0.78, (1 / Math.sin(currentSunElevation)))) / 10;
    if (solarPower < 0) {
        solarPower = 0;
    }

    // Maximun solar power per current day
    var solarPowerMax = Math.round(10 * 1350.0 * Math.sin(maxSunElevation) * Math.pow(0.78, (1 / Math.sin(maxSunElevation)))) / 10;
    if (solarPowerMax < 0 || isNaN(solarPowerMax)) {
        solarPowerMax = 0;
    }

    // Maximun solar power per year
    var solarPowerMaxAnnual = Math.round(10 * 1350.0 * Math.sin(maxSunElevationAnnual) * Math.pow(0.78, (1 / Math.sin(maxSunElevationAnnual)))) / 10.;

    let solarCalculations = {
        uvIndex: uvIndex,
        uvIndexMax: uvIndexMax,
        uvIndexOverThree: uvIndexOverThree,
        uvIndexEnd: uvIndexEnd,
        uvIndexMaxAnnual: uvIndexMaxAnnual,
        solarPower: solarPower,
        solarPowerMax: solarPowerMax,
        solarPowerMaxAnnual: solarPowerMaxAnnual
    }

    this.solarCalculations = solarCalculations;

}
