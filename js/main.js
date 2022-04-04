function fcirculo(){  //se le da la funcion para usar el boton del cambio a circulo
    var selector = document.getElementById("figura");  // se da la variable de selector y busca en el documento el id de la figura que va a modificar
    // toggle significa agregar o quitar, se usa para que cuando el usuario use se active y desactive
    selector.className ='';
    selector.classList.toggle("circulo");
}

function frectangulo(){  //se le da la funcion para usar el boton del cambio a circulo
    var selector = document.getElementById("figura");  // se da la variable de selector y busca en el documento el id de la figura que va a modificar
     // toggle significa agregar o quitar, se usa para que cuando el usuario use se active y desactive
    selector.className ='';
    selector.classList.toggle("rectangulo");
}

function frombo(){  //se le da la funcion para usar el boton del cambio a circulo
    var selector = document.getElementById("figura");  // se da la variable de selector y busca en el documento el id de la figura que va a modificar
     // toggle significa agregar o quitar, se usa para que cuando el usuario use se active y desactive
    selector.className ='';
    selector.classList.toggle("rombo");
}

function arriba(){  //se le da la funcion para usar el boton del cambio a circulo
    var selector = document.getElementById("figura");  // se da la variable de selector y busca en el documento el id de la figura que va a modificar
    selector.className ='';
    selector.classList.toggle("subir"); // toggle significa agregar o quitar, se usa para que cuando el usuario use se active y desactive
}

function diagonal(){  //se le da la funcion para usar el boton del cambio a circulo
    var selector = document.getElementById("figura");  // se da la variable de selector y busca en el documento el id de la figura que va a modificar
    selector.className ='';
    selector.classList.toggle("diagonal"); // toggle significa agregar o quitar, se usa para que cuando el usuario use se active y desactive
}
function abajo(){  //se le da la funcion para usar el boton del cambio a circulo
    var selector = document.getElementById("figura");  // se da la variable de selector y busca en el documento el id de la figura que va a modificar
    selector.className ='';
    selector.classList.toggle("abajo"); // toggle significa agregar o quitar, se usa para que cuando el usuario use se active y desactive
}
function izquierda(){  //se le da la funcion para usar el boton del cambio a circulo
    var selector = document.getElementById("figura");  // se da la variable de selector y busca en el documento el id de la figura que va a modificar
    selector.className ='';
    selector.classList.toggle("izquierda"); // toggle significa agregar o quitar, se usa para que cuando el usuario use se active y desactive
}

function derecha(){  //se le da la funcion para usar el boton del cambio a circulo
    var selector = document.getElementById("figura");  // se da la variable de selector y busca en el documento el id de la figura que va a modificar
    selector.className ='';
    selector.classList.toggle("derecha"); // toggle significa agregar o quitar, se usa para que cuando el usuario use se active y desactive
}

function diaderecha(){  //se le da la funcion para usar el boton del cambio a circulo
    var selector = document.getElementById("figura");  // se da la variable de selector y busca en el documento el id de la figura que va a modificar
    selector.className ='';
    selector.classList.toggle("derecha"); // toggle significa agregar o quitar, se usa para que cuando el usuario use se active y desactive
}

function derecha(){  //se le da la funcion para usar el boton del cambio a circulo
    var selector = document.getElementById("figura");  // se da la variable de selector y busca en el documento el id de la figura que va a modificar
    selector.className ='';
    selector.classList.toggle("derecha"); // toggle significa agregar o quitar, se usa para que cuando el usuario use se active y desactive
}
function operaciones(){
    var valor1 =Number(document.getElementById("valor1").value);
    var valor2 =Number(document.getElementById("valor2").value);
    var operacion=document.getElementById("operaciones").value;
   
    switch (operacion) {
        case "+": 
        resultado=valor1+valor2;
        document.getElementById("respuesta").value=resultado;
            break;
            case "-": 
            resultado=valor1-valor2;
        document.getElementById("respuesta").value=resultado;
            break;
            case "*": 
            resultado=valor1*valor2;
        document.getElementById("respuesta").value=resultado;
            break;
            case "/": 
            resultado=valor1/valor2;
        document.getElementById("respuesta").value=resultado;
            break;

    
       
    }


}

function chatactive(){
    var selector=document.getElementById("chat");
selector.classList.toggle("active");
var selector2=document.getElementById("bchar");
selector2.classList.toggle("active");
}