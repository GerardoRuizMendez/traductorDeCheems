var FPS = 50;
var area;
var palabras=[];
var boton;
var texto;
var mitad;
var etiqueta;
function inicio(){
    area=document.getElementById('area2').style.display="block";
}
function accion(){
    texto=document.getElementById('area').value;
    palabras=texto.split(" ");

    texto="";
    for(var i=0;i<palabras.length; i++){
        mitad=palabras[i].length/2;
        mitad=Math.trunc(mitad);
        for(var j=0; j<palabras[i].length; j++){
           texto=texto+palabras[i].charAt(j);
           if(j==mitad){
            texto=texto+'m';
           }
        }
        texto+=' ';
    }
    etiqueta=document.getElementById('etiqueta');
    etiqueta.innerHTML=texto;
    area.style.display="none";
    
}