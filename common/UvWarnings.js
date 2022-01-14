
// Set background color based on UVI index
setUviColor = uvIndex => {
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
UvWarning = uvIndex => {
    // varoitustekstit UVI säteilyn intensiteetin mukaan
    if (uvIndex >= 10) {
        //setBgColorById ("rgb(153,140,255)");
        return "PYSY POIS AURINGOSTA!";
    }
    if (uvIndex < 10 && uvIndex >= 9.0) {
        //setBgColorById ("rgb(181,76,255)");
        return "PYSY POIS AURINGOSTA!";
    }
    if (uvIndex >= 8.0 && uvIndex < 9.0) {
        //setBgColorById ("rgb(255,0,153)");
        return "PYSY POIS AURINGOSTA!";
    }
    if (uvIndex >= 7.0 && uvIndex < 8.0) {
        //setBgColorById ("rgb(216,0,29)");
        return "5 min MAX AURINGOSSA!";
    }
    if (uvIndex >= 6.0 && uvIndex < 7.0) {
        //setBgColorById ("rgb(232,44,14)");
        return "15 min MAX AURINGOSSA!";
    }
    if (uvIndex >= 5.0 && uvIndex < 6.0) {
        //setBgColorById ("rgb(248,89,0)");
        return "Varo UV säteilyä!";
    }
    if (uvIndex >= 4.0 & uvIndex < 5.0) {
        //setBgColorById ("rgb(248,135,0)");
        return "Suuri riski UV säteilystä";
    }
    if (uvIndex >= 3.0 && uvIndex < 4.0) {
        //setBgColorById ("rgb(248,182,0)");
        return "Riski UV säteilystä";
    }
    if (uvIndex >= 2.0 && uvIndex < 3.0) {
        //setBgColorById ("rgb(160,206,0)");
        return "Pieni riski UV säteilystä";
    }
    if (uvIndex >= 1.0 && uvIndex < 2.0) {
        //setBgColorById ("rgb(78,180,0)");
        return "Vähäinen riski UV säteilystä";
    }
    if (uvIndex >= 0 && uvIndex < 1.0) {
        //setBgColorById ("rgb(190,190,190)");
        return "Ei vaaraa UV säteilystä";
    }
}
