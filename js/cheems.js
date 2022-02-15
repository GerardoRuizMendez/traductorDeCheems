function accion() {
    var mitad;

    var palabras = document.getElementById('area').value;
    palabras = palabras.split(" ");

    var texto = "";
    for (var i = 0; i < palabras.length; i++) {
        if (palabras[i].length % 2 == 0) {
            mitad = palabras[i].length / 2;
        }
        mitad = palabras[i].length / 2;
        mitad = Math.trunc(mitad);
        for (var j = 0; j < palabras[i].length; j++) {
            texto = texto + palabras[i].charAt(j);
            if (j == mitad) {
                texto = texto + 'm';
            }
        }
        texto += ' ';
    }
    document.getElementById('etiqueta').innerHTML = texto;
}