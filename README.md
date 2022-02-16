# traductorDeCheems
Proyecto que cree hace unos años para un amigo. Convierte cualquier texto en "lenguaje Cheems" (Ejemplo: "Hola soy Gerardo" => "Homlam soy Gerarmdom")


Para utilizar el algoritmo que transforma tu texto en Cheems en tus propios proyectos, solo es necesaria la carpeta *js*. es necesario importar el archivo *"silabas.js"* de [NicoFrem](https://github.com/nicofrem/silabajs):
```html
<script src="js/silabajs.js"></script>
```

Además de importar el archivo con el algotitmo *(cheems.js)*:
```html
<script src="js/cheems.js"></script>
```

La función que tiene el código es la funcion *cheems(texto)*, siento *"texto"* el String a transformar. La puedes usar de la siguiente forma:
```javascript
var resultado = cheems("Texto de ejemplo");
```

Ahora la variable *resultado* tiene el texto transformado (texmtom dem ejemmplom).
_____________
MIT License

Copyright (c) 2022 Ruiz Méndez Gerardo.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
