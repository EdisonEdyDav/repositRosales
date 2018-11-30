var comp=function (ingresos,egresos){
    var numero1=parseInt(document.getElementById("ingresos").value);
    var numero2=parseInt(document.getElementById("egresos").value);

 resultado=numero1-numero2
return ("Su valor disponible para el mes  es de : "+resultado) ;
}