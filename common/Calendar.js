// alustetaan stellarCalendar -objekti pvm (pvm voi myös antaa käsin)
    const cal = new Date()

    let stellarCalendar = {
        year: cal.getFullYear(),
        month: cal.getMonth() + 1,
        date: cal.getDate(),
        hour: cal.getHours(),
        minute: cal.getMinutes(),
        timeZone: cal.getTimezoneOffset() / 60, // in hours
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
        }
    }
    // alustetaan julian ja T/T_current stellarCalendar -objektiin
    stellarCalendar.julian = 367 * stellarCalendar.year - (7 * (stellarCalendar.year + (stellarCalendar.month + 9) / 12)) / 4 - (3 * ((stellarCalendar.year + (stellarCalendar.month - 9) / 7) / 100 + 1)) / 4 + 275 * stellarCalendar.month / 9 + stellarCalendar.date + 1721029;
    stellarCalendar.T = (stellarCalendar.julian - 2451545.) * 0.000027378507871321;
    stellarCalendar.T_current = (stellarCalendar.julian - 0.5 + stellarCalendar.hour / 24. + stellarCalendar.minute / 1440. - 2451545.) * 0.000027378507871321;

    function setDate() {
        var x = document.getElementById("start");
        x.setAttribute("value", "2022-01-16");
        x.setAttribute("min", "2022-01-01");
        x.setAttribute("max", "2022-12-31");
      }