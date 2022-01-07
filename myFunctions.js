function myFunctions() {

    // tämä funktio käynnistää ohjelman (html pääsivulla on onload="myFunctions()" event handler

    // alustetaan sijainti (sijainnin voi myös antaa käsin)
    //getLocation();

    //Auringon paikkaan liittyvät tulosteet
    document.getElementById("demo1").innerHTML = "current sun elevation = " + solarPositionLocal.currentSunElevation;
    document.getElementById("demo2").innerHTML = "max sun elevation = " + solarPositionLocal.maxSunElevation;
    document.getElementById("demo3").innerHTML = "current sun azimuth = " + solarPositionLocal.currentSunAzimuth;
    document.getElementById("demo4").innerHTML = "current sun azimuth = " + NorthSouthEastWest(solarPositionLocal.currentSunAzimuth);

    //UVI säteilyyn liittyvät tulosteet
    document.getElementById("demo5").innerHTML = "UVI current = " + solarCalculations.uvIndex;
    document.getElementById("demo6").innerHTML = "UVI max = " + solarCalculations.uvIndexMax;
    document.getElementById("demo7").innerHTML = "UVI warning period = " + solarCalculations.uvIndexOverThree;
    document.getElementById("demo8").innerHTML = "UVI warning period end = " + solarCalculations.uvIndexEnd;
    document.getElementById("demo9").innerHTML = "UVI max annual = " + solarCalculations.uvIndexMaxAnnual;

    //Auringon säteilytrehoon liittyvät tulosteet
    document.getElementById("demo10").innerHTML = "current solar power W/m2 = " + solarCalculations.solarPower;
    document.getElementById("demo11").innerHTML = "max solar power per diem W/m2 = " + solarCalculations.solarPowerMax;
    document.getElementById("demo12").innerHTML = "max solar power per annum W/m2 = " + solarCalculations.solarPowerMaxAnnual;

    //Auringon nousu- ja laskuaikoihin liittvät tulosteet
    document.getElementById("demo13").innerHTML = "sun rize = " + timeHour(solarPositionLocal.timeRize) + ":" + timeMinute(solarPositionLocal.timeRize);
    document.getElementById("demo14").innerHTML = "sun south = " + timeHour(solarPositionLocal.timeSunSouth) + ":" + timeMinute(solarPositionLocal.timeSunSouth);
    document.getElementById("demo15").innerHTML = "sun set = " + timeHour(solarPositionLocal.timeSet) + ":" + timeMinute(solarPositionLocal.timeSet);
    document.getElementById("demo16").innerHTML = "sun set civil = " + timeHour(solarPositionLocal.timeSetCivil) + ":" + timeMinute(solarPositionLocal.timeSetCivil);
    document.getElementById("demo17").innerHTML = "sun set nautical = " + timeHour(solarPositionLocal.timeSetNautical) + ":" + timeMinute(solarPositionLocal.timeSetNautical);
    document.getElementById("demo18").innerHTML = "sun set astronomical = " + timeHour(solarPositionLocal.timeSetAstronomical) + ":" + timeMinute(solarPositionLocal.timeSetAstronomical);
}