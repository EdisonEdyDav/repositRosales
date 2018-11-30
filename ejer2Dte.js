
var fecha = new Date();

var dia = fecha.getDate();
var mes = fecha.getMonth();
var any = fecha.getFullYear();
var hora = fecha.getHours();
var minuto = fecha.getMinutes();
var segundo =fecha.getSeconds();

document.write("<h2>Fecha: "+Date()+"</h2>");
document.write("<h3>Fecha : "+ dia +" / "+(mes+1)+" / "+ any +"</h3>");
document.write("<h3>Hora : "+ hora +" : "+ minuto +" : "+ segundo +"</h3>");
