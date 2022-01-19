// alustetaan stellarCalendar -objekti pvm (pvm voi myös antaa käsin)
const date = new Date()

let stellarCalendar = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    date: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    timeZone: date.getTimezoneOffset() / 60, // in hours
    setYear(year) {
        this.year = year;
    },
    setMonth(month) {
        this.month = month;
    },
    setDate(date) {
        this.date = date;
    },
    setHour(hour) {
        this.hour = hour;
    },
    setMinute(minute) {
        this.minute = minute;
    },
    setTimeZone(tz) {
        this.timeZone = tz;
    },
    get julian() {
        return 367 * this.year - (7 * (this.year + (this.month + 9) / 12)) / 4 - (3 * ((this.year + (this.month - 9) / 7) / 100 + 1)) / 4 + 275 * this.month / 9 + this.date + 1721029;
    },
    get T() {
        return (this.julian - 2451545.) * 0.000027378507871321;
    },
    get T_current() {
        return (this.julian - 0.5 + this.hour / 24. + this.minute / 1440. - 2451545.) * 0.000027378507871321;
    },
    get currentDate() {
        return this.year + "-0" + this.month + "-" + this.date;
    },
    get startDate() {
        return this.year + "-01-01";
    },
    get endDate() {
        return this.year + "-12-31";
    }
}
function setDate() {
    var x = document.getElementById("cal");
    x.setAttribute("value", stellarCalendar.currentDate);
    x.setAttribute("min", stellarCalendar.startDate);
    x.setAttribute("max", stellarCalendar.endDate);
}

function newDate() {

    var cal = document.getElementById("cal").value;
    stellarCalendar.setYear(parseInt(cal.substr(0,4)));
    stellarCalendar.setMonth(parseInt(cal.substr(5,2)));
    stellarCalendar.setDate(parseInt(cal.substr(8,2)));

    myFunctions();
}
this.stellarCalendar = stellarCalendar;