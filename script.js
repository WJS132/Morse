let alfabet = {
    "a": " •- ", "ą": " •-•- ", "b": " -••• ", "c": " -•-• ", "ć": " -•-•• ",
    "d": " -•• ", "e": " • ", "ę": " ••-•• ", "f": " ••-• ", "g": " --• ",
    "h": " •••• ", "i": " •• ", "j": " •--- ", "k": " -•- ", "l": " •-•• ",
    "ł": " -•-••- ", "m": " -- ", "n": " -• ", "ń": " --•-- ", "o": " --- ",
    "ó": " ---• ", "p": " •--• ", "q": " --•- ", "r": " •-• ", "s": " ••• ",
    "ś": " •••-••• ", "t": " - ", "u": " ••- ", "v": " •••- ", "w": " •-- ",
    "x": " -••- ", "y": " -•-- ", "z": " --•• ", "ź": " --••- ", "ż": " --••-• ",
    "1": " •---- ", "2": " ••--- ", "3": " •••-- ", "4": " ••••- ", "5": " ••••• ",
    "6": " -•••• ", "7": " --••• ", "8": " ---•• ", "9": " ----• ", "0": " ----- ", " ": "/"
};



tekst = document.getElementById("tekst");
pole = document.getElementById("pole");
but = document.getElementById("guzik");

function tlumacz() {
    tlumaczenie = "";
    if (!())
    for (const litera of tekst.value) {
        if (!(litera in alfabet)){
            continue;
        }
        else{
            tlumaczenie += alfabet[litera];
            pole.textContent = tlumaczenie;
        }
    }

}
//but.addEventListener("click", tlumacz);
tekst.addEventListener("input", tlumacz);






