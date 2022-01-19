
function calculations(pos) {
    
    //double uvIndexOverTwoRad = Math.toRadians(90.0 - 55.0); //degrees in Sun elevation, UV
    const a = 2.696056;
    const b = 5.474571;
    const c = -0.09888;
    const d = 0.040392;
    let currentSunElevation = toRadians(pos.solarPositionLocal.currentSunElevation);
    let maxSunElevation = toRadians(pos.solarPositionLocal.maxSunElevation);
    let maxSunElevationAnnual;
    let epsilon = toDegrees(pos.solarPositionTrue.epsilon);

    if (locations.latitude < epsilon && locations.latitude > -epsilon) {
        maxSunElevationAnnual = toRadians(90.);
    } else if (locations.latitude > epsilon) {
        maxSunElevationAnnual = toRadians(90. - locations.latitude + epsilon);
    } else {
        maxSunElevationAnnual = toRadians(90. + locations.latitude + epsilon);
    }
    let m = 1. / (Math.cos(Math.asin(6371. / 6393. * Math.sin((Math.PI / 2 - currentSunElevation)))));
    let uvIndexLimit = toRadians(90.0 - 48.0); //degrees in Sun elevation, UVI > 3
    let mMax = 1. / Math.cos(Math.asin(6371. / 6393. * Math.sin((Math.PI / 2 - maxSunElevation))));
    let mMaxAnnual = 1. / Math.cos(Math.asin(6371. / 6393. * Math.sin((Math.PI / 2 - maxSunElevationAnnual))));

    let latitude = toRadians(locations.latitude);
    let delta = toRadians(pos.solarPositionDeg.delta);

    /******** Solar UVI calculation**********/

    let uvIndex = Math.round(10 * Math.pow(Math.cos(Math.PI / 2 - currentSunElevation), a) * Math.exp(b + c * m + d * m * m) / 25.) / 10.;
    let uvIndexEnd;
    if (isNaN(uvIndex)) {
        uvIndex = 0;
    }

    let uvIndexMax = Math.round(10 * Math.pow(Math.cos(Math.PI / 2 - maxSunElevation), a) * Math.exp(b + c * mMax + d * mMax * mMax) / 25.) / 10.;
    if (isNaN(uvIndexMax)) {
        uvIndexMax = 0;
    }

    let uvIndexMaxAnnual = Math.round(10 * Math.pow(Math.cos(Math.PI / 2 - maxSunElevationAnnual), a) * Math.exp(b + c * mMaxAnnual + d * mMaxAnnual * mMaxAnnual) / 25.) / 10.;
    let uvIndexOverThree = Math.round(10 * 2 * Math.acos(-Math.tan(delta) * Math.tan(latitude) + Math.sin(uvIndexLimit) / (Math.cos(delta) * Math.cos(latitude))) / (2 * Math.PI) * 24.) / 10.;
    if (isNaN(uvIndexOverThree)) {
        uvIndexOverThree = 0;
    }
    else if (isNaN(uvIndex) || uvIndexOverThree === 0) {
        uvIndexEnd = 0;
    }
    else {
        uvIndexEnd = pos.solarPositionLocal.timeSunSouth + uvIndexOverThree / 2;
    }

    /******** Solar power calculation**********/
    // Current solar power
    let solarPower = Math.round(10 * 1350.0 * Math.sin(currentSunElevation) * Math.pow(0.78, (1 / Math.sin(currentSunElevation)))) / 10;
    if (solarPower < 0) {
        solarPower = 0;
    }

    // Maximun solar power per current day
    let solarPowerMax = Math.round(10 * 1350.0 * Math.sin(maxSunElevation) * Math.pow(0.78, (1 / Math.sin(maxSunElevation)))) / 10;
    if (solarPowerMax < 0 || isNaN(solarPowerMax)) {
        solarPowerMax = 0;
    }

    // Maximun solar power per year
    let solarPowerMaxAnnual = Math.round(10 * 1350.0 * Math.sin(maxSunElevationAnnual) * Math.pow(0.78, (1 / Math.sin(maxSunElevationAnnual)))) / 10.;

    const solarCalculations = {
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
