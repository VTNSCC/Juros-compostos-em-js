window.onload = begin;

var button

function begin() {
    button=document.getElementById("Pt"); 
    button.addEventListener('click', Calculo) 
}

function Calculo() {
    //Variáveis
    var Temp = document.getElementById("Tp").value; 
    var Ci = document.getElementById("capli").value; 
    var Jsa = document.getElementById("Ja").value; 
    var F,i;
    
    
    Jsa = Jsa / 100; //%

    for(i=1;i<=Temp;i++){ 
        console.log(12)
        F= Ci*(1+Jsa);
        document.getElementById("Final").innerHTML +='<div>'+ i  + "||"+'  '+"Inicial"+' '+ Ci + "||"+ '  ' +"Final"+'  '+ F +'</div>' + '<br>'; 
        Ci = F;

    }
}
