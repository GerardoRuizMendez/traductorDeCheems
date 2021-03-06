function accion() {
    //Tomamos el texto escrito en el textArea y lo pasamos a la funcion que lo traduce
    var resultado = cheems(document.getElementById('area').value);
    document.getElementById('resultado').value = resultado;
}

function cheems(palabras) {
    palabras = palabras.replace(".", "");
    palabras = palabras.replace(",", "");
    palabras = palabras.replace("\n", " "); //Quitamos puntos, comas y saltos de línea
    palabras = palabras.split(" "); //Dividimos la cadena palabra por palabra

    var texto = "";
    for (var i = 0; i < palabras.length; i++) {
        silabas = silabaJS.getSilabas(palabras[i]); //Obtenemos las silabas en objeto
        switch (silabas.numeroSilaba) {
            case 1: //Si es una palabra de una sola sílaba, se le agregará la "m" únicamente si es de una letra
                texto += silabas.silabas[0].silaba;
                if (silabas.silabas[0].silaba.length == 2) texto += "m";
                break;
            case 2: //Si es de dos sílabas, se le agregará una "m" intermedia y una al final
                texto += silabas.silabas[0].silaba;
                texto += "m";
                texto += silabas.silabas[1].silaba;
                texto += "m";
                break;
            case 3: //si es de tres sílabas se agregará una "m" en las últimas dos sílabas
                texto += silabas.silabas[0].silaba;
                texto += silabas.silabas[1].silaba;
                texto += "m";
                texto += silabas.silabas[2].silaba;
                texto += "m";
                break;
            default:
                //si es más de cuatro sílabas, se agregará una "m" en su segunda y última sílaba
                for (var j = 0; j < silabas.silabas.length; j++) {
                    texto += silabas.silabas[j].silaba;
                    if (j == 2 || j == silabas.silabas.length - 1) {
                        texto += "m";
                    }
                }
        }
        texto += ' ';
    }
    return texto; //El resultado se escribe en la etiqueta para el usuario
}

function otra() {
    document.getElementById('resultado').select();
    document.execCommand('copy');

    alert("Texto copiado");
}