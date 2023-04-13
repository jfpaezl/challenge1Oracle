//diccionario para encriptar
const diccionario = {
    "e": "enter", 
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
}

//enlazar los botones y un textarea a una variable
var mostrarTextarea = document.getElementById("textarea2")

//crear funciones que se van a usar para encriptar y desencriptar los textos
//Encriptar
function encriptar(){

    texto = document.getElementById("textarea").value; 

    //texto, diccionario, mostrarTextarea
    let result = "";
    
    for (i = 0; i< texto.length; i++){
        letra = texto[i];
        if(diccionario[letra]){
            result += diccionario[letra];
        }else{
            result += letra;
        }
    }
    
    mostrarTextarea.value = result
}

//Desencriptar
function desencriptar(){
    texto = document.getElementById("textarea").value; 

    for(let letra in diccionario) {
        let expresionRegular = new RegExp(diccionario[letra], "g");
        texto = texto.replace(expresionRegular, letra)
    }
    
    mostrarTextarea.value = texto
}

document.getElementById("copiar").addEventListener("click", function(evento){
    evento.preventDefault();
    navigator.clipboard.writeText(mostrarTextarea.value);
})
