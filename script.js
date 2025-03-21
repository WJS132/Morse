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



let tekst = document.getElementById("tekst");
let pole = document.getElementById("pole");
let but = document.getElementById("guzik");
let tlumaczenie = "";

function tlumacz() {
    tlumaczenie = "";
    for (const litera of tekst.value) {
        if (!(litera.toLowerCase() in alfabet)){
            continue;
        }
        else{
            tlumaczenie += alfabet[litera.toLowerCase()];
        }
    }
    pole.textContent = tlumaczenie;

}
//but.addEventListener("click", tlumacz);
tekst.addEventListener("input", tlumacz);






