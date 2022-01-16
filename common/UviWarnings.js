
UviWarning = uvIndex => {
    // varoitustekstit UVI säteilyn intensiteetin mukaan
    if (uvIndex >= 10) {
        SetUviWarnings("PYSY POIS AURINGOSTA!", "rgb(153,140,255)", "Black");
    }
    if (uvIndex < 10 && uvIndex >= 9.0) {
        SetUviWarnings("PYSY POIS AURINGOSTA!", "rgb(181,76,255)", "Black");
    }
    if (uvIndex >= 8.0 && uvIndex < 9.0) {
        SetUviWarnings("PYSY POIS AURINGOSTA!", "rgb(255,0,153)", "Black");
    }
    if (uvIndex >= 7.0 && uvIndex < 8.0) {
        SetUviWarnings("MAX 5 min AURINGOSSA!", "rgb(216,0,29)", "Red");
    }
    if (uvIndex >= 6.0 && uvIndex < 7.0) {
        SetUviWarnings("MAX 15 min AURINGOSSA!", "rgb(232,44,14)", "Red");
    }
    if (uvIndex >= 5.0 && uvIndex < 6.0) {
        SetUviWarnings("Varo UV säteilyä!", "rgb(248,89,0)", "Black");
    }
    if (uvIndex >= 4.0 & uvIndex < 5.0) {
        SetUviWarnings("Suuri riski UV säteilystä", "rgb(248,135,0)", "Brown");
    }
    if (uvIndex >= 3.0 && uvIndex < 4.0) {
        SetUviWarnings("Riski UV säteilystä", "rgb(248,182,0)", "Black");
    }
    if (uvIndex >= 2.0 && uvIndex < 3.0) {
        SetUviWarnings("Pieni riski UV säteilystä", "rgb(160,206,0)", "Gold");
    }
    if (uvIndex >= 1.0 && uvIndex < 2.0) {
        SetUviWarnings("Vähäinen riski UV säteilystä", "rgb(78,180,0)", "Cyan");
    }
    if (uvIndex >= 0 && uvIndex < 1.0) {
        SetUviWarnings("Ei vaaraa UV säteilystä", "rgb(190,190,190)", "Blue");
    }
}

SetUviWarnings = (text, color, fontColor) => {
    document.getElementById("uviWarning").style.backgroundColor = color;
    document.getElementById("uviWarning").value = text;
    document.getElementById("uviWarning").style.color = fontColor;
}