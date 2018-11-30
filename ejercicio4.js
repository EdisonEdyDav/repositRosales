
var fact=1;


function factorial(){
    
 num = Number(document.getElementById('valor').value);
 for( var i=1;i<=num;i++){
      fact=fact*i;
 }
 alert("El factorial de " + num + "  es : " + fact );
 document.getElementById("tabla").innerHTML = "<tr><td>   n   </td><td>   n!  </td></tr><tr><td>"+ num + "</td><td>"+ fact +"</td></tr>";
 x=1;
 }
