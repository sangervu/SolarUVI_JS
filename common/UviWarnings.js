
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
UviWarning = uvIndex => {
    // varoitustekstit UVI säteilyn intensiteetin mukaan
    if (uvIndex >= 10) {
        SetUviWarnings("PYSY POIS AURINGOSTA!", "rgb(153,140,255)");
    }
    if (uvIndex < 10 && uvIndex >= 9.0) {
        SetUviWarnings("PYSY POIS AURINGOSTA!", "rgb(181,76,255)");
    }
    if (uvIndex >= 8.0 && uvIndex < 9.0) {
        SetUviWarnings("PYSY POIS AURINGOSTA!", "rgb(255,0,153)");
    }
    if (uvIndex >= 7.0 && uvIndex < 8.0) {
        SetUviWarnings("MAX 5 min AURINGOSSA!", "rgb(216,0,29)");
    }
    if (uvIndex >= 6.0 && uvIndex < 7.0) {
        SetUviWarnings("MAX 15 min AURINGOSSA!", "rgb(232,44,14)");
    }
    if (uvIndex >= 5.0 && uvIndex < 6.0) {
        SetUviWarnings("Varo UV säteilyä!", "rgb(248,89,0)");
    }
    if (uvIndex >= 4.0 & uvIndex < 5.0) {
        SetUviWarnings("Suuri riski UV säteilystä", "rgb(248,135,0)");
    }
    if (uvIndex >= 3.0 && uvIndex < 4.0) {
        SetUviWarnings("Riski UV säteilystä", "rgb(248,182,0)");
    }
    if (uvIndex >= 2.0 && uvIndex < 3.0) {
        SetUviWarnings("Pieni riski UV säteilystä", "rgb(160,206,0)");
    }
    if (uvIndex >= 1.0 && uvIndex < 2.0) {
        SetUviWarnings("Vähäinen riski UV säteilystä", "rgb(78,180,0)");
    }
    if (uvIndex >= 0 && uvIndex < 1.0) {
        SetUviWarnings("Ei vaaraa UV säteilystä", "rgb(190,190,190)");
    }
}

function SetUviWarnings(text, color) {
    document.getElementById("uviWarning").style.backgroundColor = color;
    document.getElementById("uviWarning").value = text;
}