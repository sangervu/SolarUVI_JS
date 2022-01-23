function myFunctions() {

    // tämä funktio käynnistää ohjelman (html pääsivulla on onload="myFunctions()" event handler
    
    document.querySelector('#find-me').addEventListener('click', getLocation);
    document.querySelector('#new-location').addEventListener('click', newLocation);
    document.querySelector('#get-date').addEventListener('click', newDate);

    setDate();
    let pos = new positions();
    let sol = new calculations(pos);

    //Auringon paikkaan liittyvät tulosteet
    document.getElementById("demo1").innerHTML = "current sun elevation = " + pos.solarPositionLocal.currentSunElevation;
    document.getElementById("demo2").innerHTML = "max sun elevation (true) = " + pos.solarPositionLocal.maxSunElevation;
    document.getElementById("demo3").innerHTML = "current sun azimuth = " + pos.solarPositionLocal.currentSunAzimuth;
    document.getElementById("demo4").innerHTML = "current sun azimuth = " + NorthSouthEastWest(pos.solarPositionLocal.currentSunAzimuth);

    //UVI säteilyyn liittyvät tulosteet
    document.getElementById("demo5").innerHTML = "UVI current = " + sol.solarCalculations.uvIndex;
    document.getElementById("demo6").innerHTML = "UVI max = " + sol.solarCalculations.uvIndexMax;
    document.getElementById("demo7").innerHTML = "UVI warning period length (UVI > 3) = " + timeHour(sol.solarCalculations.uvIndexOverThree) + " hours " + timeMinute(sol.solarCalculations.uvIndexOverThree) + " minutes";
    document.getElementById("demo8").innerHTML = "UVI warning period end = " + timeHour(sol.solarCalculations.uvIndexEnd) + ":" + timeMinute(sol.solarCalculations.uvIndexEnd);
    document.getElementById("demo9").innerHTML = "UVI max annual = " + sol.solarCalculations.uvIndexMaxAnnual;
    document.getElementById("uviWarning").innerHTML = UviWarning(sol.solarCalculations.uvIndex);

    //Auringon säteilytrehoon liittyvät tulosteet
    document.getElementById("demo10").innerHTML = "current solar power W/m2 = " + sol.solarCalculations.solarPower;
    document.getElementById("demo11").innerHTML = "max solar power (daily) W/m2 = " + sol.solarCalculations.solarPowerMax;
    document.getElementById("demo12").innerHTML = "max solar power (yearly) W/m2 = " + sol.solarCalculations.solarPowerMaxAnnual;
    document.getElementById("demo13").innerHTML = "estimate on acquired solar panel energy per day (optimized fixed panel)  W/m2 = " + sol.solarCalculations.solarPowerMaxAnnual;

    //Auringon nousu- ja laskuaikoihin liittvät tulosteet
    document.getElementById("demo14").innerHTML = "sun rize = " + timeHour(pos.solarPositionLocal.timeRize) + ":" + timeMinute(pos.solarPositionLocal.timeRize);
    document.getElementById("demo15").innerHTML = "sun south = " + timeHour(pos.solarPositionLocal.timeSunSouth) + ":" + timeMinute(pos.solarPositionLocal.timeSunSouth);
    document.getElementById("demo16").innerHTML = "sun set = " + timeHour(pos.solarPositionLocal.timeSet) + ":" + timeMinute(pos.solarPositionLocal.timeSet);
    document.getElementById("demo17").innerHTML = "sun set civil = " + timeHour(pos.solarPositionLocal.timeSetCivil) + ":" + timeMinute(pos.solarPositionLocal.timeSetCivil);
    document.getElementById("demo18").innerHTML = "sun set nautical = " + timeHour(pos.solarPositionLocal.timeSetNautical) + ":" + timeMinute(pos.solarPositionLocal.timeSetNautical);
    document.getElementById("demo19").innerHTML = "sun set astronomical = " + timeHour(pos.solarPositionLocal.timeSetAstronomical) + ":" + timeMinute(pos.solarPositionLocal.timeSetAstronomical);
    document.getElementById("demo20").innerHTML = "sun rize civil = " + timeHour(pos.solarPositionLocal.timeRizeCivil) + ":" + timeMinute(pos.solarPositionLocal.timeRizeCivil);
    document.getElementById("demo21").innerHTML = "sun rize nautical = " + timeHour(pos.solarPositionLocal.timeRizeNautical) + ":" + timeMinute(pos.solarPositionLocal.timeRizeNautical);
    document.getElementById("demo22").innerHTML = "sun rize astronomical = " + timeHour(pos.solarPositionLocal.timeRizeAstronomical) + ":" + timeMinute(pos.solarPositionLocal.timeRizeAstronomical);
    document.getElementById("demo23").innerHTML = "latitude of polar night (north) = " + pos.solarPositionLocal.latitudePolarNight;
    document.getElementById("demo24").innerHTML = "length of day = " + timeHour(pos.solarPositionLocal.dayLength)  + " hours " + timeMinute(pos.solarPositionLocal.dayLength) + " minutes";
}