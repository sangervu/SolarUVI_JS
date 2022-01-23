//alustetaan solaarinen aika-objekti pituuspiirin mukaan (asteet)

function positions() {

    let T = stellarCalendar.T;
    let stellarTimeDeg = {
        time: minDegree((24110.54841 + 8640184.812866 * T + 0.093104 * (T * T) - 0.0000062 * (T * T * T)) / 3600. * 15.),
        get noon() {
            return minDegree(this.time + 1.002737908 * (stellarCalendar.timeZone) * 15. + locations.longitude);
        },
        get local() {
            return minDegree(this.noon + (1.002737908 * (stellarCalendar.hour + stellarCalendar.minute / 60.) * 15.));
        }
    }

    //alustetaan maan epsilon ja auringon x, y, z koordinaatit

    let Lo = 280.46646 + 36000.76983 * T + 0.0003032 * T * T;
    let M = 357.52911 + 35999.05029 * T - 0.0001537 * T * T;

    const solarPositionTrue = {
        epsilon: toRadians(23 + 26. / 60. + 21.448 / 3600 - 46.815 / 3600 * T - 0.00059 / 3600 * T * T + 0.001813 * T * T * T),
        Lo: toRadians(minDegree(Lo)),
        M: toRadians(minDegree(M)),
        get C() {
            return toRadians((1.914602 - 0.004817 * T - 0.000014 * T * T) * Math.sin(this.M) + (0.019993 - 0.000101 * T) * Math.sin(2 * this.M) + 0.000289 * Math.sin(3 * this.M));
        },
        get x() {
            return Math.cos(this.Lo + this.C);
        },
        get y() {
            return Math.cos(this.epsilon) * Math.sin(this.Lo + this.C);
        }
    }
    this.solarPositionTrue = solarPositionTrue;

    const solarPositionDeg = {
        //Ohessa olevilla laskukaavoilla lasketaan auringon paikka taivaalla syötetyillä parametrin arvoilla. Lasku toimii kaikkialla maapallolla.
        // "alfa" ja "delta" ilmoittavat auringon paikan taivaalla asteina 
        alfa: trueTan(solarPositionTrue.y, solarPositionTrue.x),
        delta: toDegrees(Math.asin(Math.sin(solarPositionTrue.epsilon) * Math.sin(solarPositionTrue.Lo + solarPositionTrue.C)))
    }
    this.solarPositionDeg = solarPositionDeg;

    let alfa = toRadians(solarPositionDeg.alfa);
    let delta = toRadians(solarPositionDeg.delta);
    let latitude = toRadians(locations.latitude);

    let hourAzimuth = toRadians(stellarTimeDeg.local - solarPositionDeg.alfa);
    let solarPositionAzimuth = {
        //atsimuutti x ja y komponentit
        Ay: Math.sin(hourAzimuth) * Math.cos(delta),
        Ax: Math.cos(hourAzimuth) * Math.cos(delta) * Math.sin(latitude) - Math.sin(delta) * Math.cos(latitude)
    }

    let horizon = toRadians(-0.83); // Aurinko laskee horisonttiin
    let visible = toRadians(-6.); // Auringon lasku "porvarillinen hämärä"
    let nocturnal = toRadians(-12.); // Auringon lasku "nauttinen hämärä"
    let night = toRadians(-18.); // Auringonlasku astronominen hämärä (täydellinen pimeys)

    const solarPositionLocal = {
        currentSunAzimuth: Math.round(10 * minDegree(trueTan(solarPositionAzimuth.Ay, solarPositionAzimuth.Ax) + 180.)) / 10,
        currentSunElevation: Math.round(10 * toDegrees(Math.asin(Math.sin(delta) * Math.sin(latitude) + Math.cos(hourAzimuth) * Math.cos(delta) * Math.cos(latitude)))) / 10,
        maxSunElevation: Math.round(10 * trueElevation(90.0 + toDegrees(delta) - toDegrees(latitude))) / 10,
        //korkeimmillaan, eli etelässä
        timeSunSouth: minDegree(toDegrees(alfa) - stellarTimeDeg.noon) * 24. / 360.,
        //kaamoksen leveyspiiri
        latitudePolarNight: Math.round(10 * (90.0 + toDegrees(delta))) / 10.,

        //Auringon nousu
        get timeRize() {
            return minHour(this.timeSunSouth - toDegrees(Math.acos(Math.sin(horizon) / (Math.cos(delta) * Math.cos(latitude)) - Math.tan(delta) * Math.tan(latitude))) * 24. / 360.);
        },
        //Auringon lasku
        get timeSet() {
            return minHour(this.timeSunSouth + toDegrees(Math.acos(Math.sin(horizon) / (Math.cos(delta) * Math.cos(latitude)) - Math.tan(delta) * Math.tan(latitude))) * 24. / 360.);
        },
        //Set time for visible lumination
        get timeSetCivil() {
            return minHour(this.timeSunSouth + toDegrees(Math.acos(Math.sin(visible) / (Math.cos(delta) * Math.cos(latitude)) - Math.tan(delta) * Math.tan(latitude))) * 24. / 360.);
        },
        //Set time for nocturnal lumination
        get timeSetNautical() {
            return minHour(this.timeSunSouth + toDegrees(Math.acos(Math.sin(nocturnal) / (Math.cos(delta) * Math.cos(latitude)) - Math.tan(delta) * Math.tan(latitude))) * 24. / 360.);
        },
        //Set time for total darkness
        get timeSetAstronomical() {
            return minHour(this.timeSunSouth + toDegrees(Math.acos(Math.sin(night) / (Math.cos(delta) * Math.cos(latitude)) - Math.tan(delta) * Math.tan(latitude))) * 24. / 360.);
        },
        //Set time for visible lumination
        get timeRizeCivil() {
            return minHour(this.timeSunSouth - toDegrees(Math.acos(Math.sin(visible) / (Math.cos(delta) * Math.cos(latitude)) - Math.tan(delta) * Math.tan(latitude))) * 24. / 360.);
        },
        //Set time for nocturnal lumination
        get timeRizeNautical() {
            return minHour(this.timeSunSouth - toDegrees(Math.acos(Math.sin(nocturnal) / (Math.cos(delta) * Math.cos(latitude)) - Math.tan(delta) * Math.tan(latitude))) * 24. / 360.);
        },
        //Set time for total darkness
        get timeRizeAstronomical() {
            return minHour(this.timeSunSouth - toDegrees(Math.acos(Math.sin(night) / (Math.cos(delta) * Math.cos(latitude)) - Math.tan(delta) * Math.tan(latitude))) * 24. / 360.);
        },
        //Lenth of day
        get dayLength() {
            return this.timeSet - this.timeRize;
        }
    }
    this.solarPositionLocal = solarPositionLocal;

}