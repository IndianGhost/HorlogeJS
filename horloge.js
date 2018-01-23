function horloge() {
    var date_actuelle, heure, minute, seconde, horloge_numerique;
    var color, font_color;
    var r, g, b;
    date_actuelle = new Date();
    heure = date_actuelle.getHours();
    minute = date_actuelle.getMinutes();
    seconde = date_actuelle.getSeconds();
    heure = verifier_temps(heure);
    minute = verifier_temps(minute);
    seconde = verifier_temps(seconde);
    color = '#'+heure+minute+seconde;
    r = seconde/2;
    g = minute/2;
    b = seconde/2;
    r = verifier_temps(r);
    g = verifier_temps(g);
    b = verifier_temps(b);
    font_color = '#'+r+g+b;
    horloge_numerique = heure+' : '+minute+' : '+seconde;
    document.body.style.backgroundColor = color;
    document.body.style.color = font_color;
    document.getElementById("hex").innerHTML = horloge_numerique;
    setTimeout(horloge, 1000);
}

function verifier_temps(i) {
    if(i<=9)
        i = '0'+i;
    return i;
}