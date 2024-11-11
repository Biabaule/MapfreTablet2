let pregunta, boton1, boton2;

let modal, modalImg, body, span;

let numPregunta = 1;

let temporizador;

const tiempoReinicio = 60000;

let listaConsejos = new Array(10).fill(false);

/* function responder(id){  // Se encarga de realizar el marcado de las respuestas

    boton1.style.pointerEvents = 'none';
    boton2.style.pointerEvents = 'none';

    document.getElementById(id).classList.add("btnShake");

    switch(numPregunta){
        case 1:
            boton1.src = "img/PREGUNTA_1/respuesta1_correcta.png";
            boton2.src = "img/PREGUNTA_1/respuesta2_incorrecta.png";
            break;
        case 2:
            boton1.src = "img/PREGUNTA_2/respuesta1_correcto.png";
            boton2.src = "img/PREGUNTA_2/respuesta2_incorrecta.png";
            break;
        case 3:
            boton1.src = "img/PREGUNTA_3/respuesta1_correcta.png";
            boton2.src = "img/PREGUNTA_3/respuesta2_correcta.png";
            break;
        case 4:
            boton1.src = "img/PREGUNTA_4/respuesta1_correcta.png";
            boton2.src = "img/PREGUNTA_4/respuesta2_incorrecta.png";
            break;
        case 5:
            boton1.src = "img/PREGUNTA_5/respuesta1_correcta.png";
            boton2.src = "img/PREGUNTA_5/respuesta2_incorrecta.png";
            break;
        case 6:
            boton1.src = "img/PREGUNTA_6/respuesta1_incorrecta.png";
            boton2.src = "img/PREGUNTA_6/respuesta2_correcta.png";
            break;
        case 7:
            boton1.src = "img/PREGUNTA_7/respuesta1_incorrecta.png";
            boton2.src = "img/PREGUNTA_7/respuesta2_correcta.png";
            break;
    }

    numPregunta++;



    setTimeout(function(){
        next(numPregunta);
        document.getElementById(id).classList.remove("btnShake");
    }, 1500);
} */

/* function next(numPregunta){ // Cambia la pantalla mostrada
    document.getElementById('preguntas').style.opacity = 0;

    setTimeout(function(){
        switch(numPregunta){
            case 0:
                break;
            case 1:

                intro();
                
                document.getElementById('consejos').style.display = 'none';
                document.getElementById('preguntas').style.display = 'block';

                pregunta.src = "img/PREGUNTA_1/pregunta_1.png";
                boton1.src = "img/PREGUNTA_1/respuesta1.png";
                boton2.src = "img/PREGUNTA_1/respuesta2.png";
                break;
            case 2:
                pregunta.src = "img/PREGUNTA_2/pregunta_2.png";
                boton1.src = "img/PREGUNTA_2/respuesta1.png";
                boton2.src = "img/PREGUNTA_2/respuesta2.png";
                document.getElementById('preguntas').style.opacity = 1;
                break;
            case 3:
                pregunta.src = "img/PREGUNTA_3/pregunta_3.png";
                boton1.src = "img/PREGUNTA_3/respuesta1.png";
                boton2.src = "img/PREGUNTA_3/respuesta2.png";
                document.getElementById('preguntas').style.opacity = 1;
                break;
            case 4:
                pregunta.src = "img/PREGUNTA_4/pregunta_4.png";
                boton1.src = "img/PREGUNTA_4/respuesta1.png";
                boton2.src = "img/PREGUNTA_4/respuesta2.png";
                document.getElementById('preguntas').style.opacity = 1;
                break;
            case 5:
                pregunta.src = "img/PREGUNTA_5/pregunta_5.png";
                boton1.src = "img/PREGUNTA_5/respuesta1.png";
                boton2.src = "img/PREGUNTA_5/respuesta2.png";
                document.getElementById('preguntas').style.opacity = 1;
                break;
            case 6:
                pregunta.src = "img/PREGUNTA_6/pregunta_6.png";
                boton1.src = "img/PREGUNTA_6/respuesta1.png";
                boton2.src = "img/PREGUNTA_6/respuesta2.png";
                document.getElementById('preguntas').style.opacity = 1;
                break;
            case 7:
                pregunta.src = "img/PREGUNTA_7/pregunta_7.png";
                boton1.src = "img/PREGUNTA_7/respuesta1.png";
                boton2.src = "img/PREGUNTA_7/respuesta2.png";
                document.getElementById('preguntas').style.opacity = 1;
                break;
            case 8:
                document.getElementById('preguntas').style.opacity = 0;
                document.getElementById('preguntas').style.display = 'none';
                document.getElementById('consejos').style.display = 'block';
                setTimeout(function(){
                    document.getElementById('consejos').style.opacity = 1;    
                }, 1000);
                
                break;
        }
        
    
        boton1.style.pointerEvents = 'auto';
        boton2.style.pointerEvents = 'auto';    
    }, 500);
    
} */

function comprobar(){  // Comprueba que las opciones marcadas sean las correctas para mostrar el botón "Continuar"


    if(!listaConsejos[0] && !listaConsejos[1] && listaConsejos[2] && !listaConsejos[3] && listaConsejos[4] && listaConsejos[5] && !listaConsejos[6] && !listaConsejos[7] && listaConsejos[8] && listaConsejos[9]){
        document.getElementById('consejos').style.opacity = 0;
        abrirModal();
        clearTimeout(temporizador);
        volverPrincipio();
    }else{
        document.getElementById('boton').style.bottom = '-70px';
    }
}

function marcar(img){  // Marca las opciones de los consejos
    clearTimeout(temporizador);
    volverPrincipio();
    let imagen = document.getElementById('opcion' + img);

    var url = imagen.src;

    if(!listaConsejos[img]){
        url = 'img/CONSEJOS/pregunta' + img + '_on.png';
    }else{
        url = 'img/CONSEJOS/pregunta' + img + '.png';
    }
    
    imagen.src = url;

    listaConsejos[img]= !listaConsejos[img];
    comprobar();
}

function reiniciar(){  // Vuelve al principio del cuestionario

    document.getElementById("intro").style.display = "block";
    setTimeout(function(){
        document.getElementById("intro").style.opacity = 1;
        
    }, 200);
    document.getElementById('boton').style.bottom = '-70px';
  
    modal.style.opacity = 0;

    setTimeout(function(){
        modal.style.display = "none";
    }, 1000);

    
    var i;
    for(i = 0;i <= 9;i++){
        document.getElementById('opcion'+ i).src = 'img/CONSEJOS/pregunta' + i +'.png';
    }
    listaConsejos.fill(false);

}

function intro(){
    setTimeout(function(){
        document.getElementById('intro').style.opacity = 0;
        document.getElementById('consejos').style.opacity = 1;
        setTimeout(function(){
            document.getElementById('intro').style.display = "none";
            volverPrincipio();
        },500);
    },500);
}

window.onload = () => {
    pregunta = document.getElementById('pregunta');
    boton1 = document.getElementById('respuesta1');
    boton2 = document.getElementById('respuesta2');   

    modal = document.getElementById("myModal");
    modalImg = document.getElementById("myContent");
    span = document.getElementsByClassName("close")[0];
    body = document.getElementsByTagName("body")[0];    
}


function volverPrincipio(){
    temporizador = window.setTimeout(function(){
        location.reload();
    }, tiempoReinicio)
}

// MODAL FINAL
 

    function abrirModal() {
        modal.style.display = "block";

        body.style.position = "static";
        body.style.height = "100%";

        setTimeout(function(){
            modal.style.opacity = 1;
           /*  modalImg.style.top = "350px"; */
        }, 250);

        setTimeout(function(){
            document.getElementById('boton').style.bottom = '75px';
        },500)
        
/* 
        body.style.overflow = "hidden"; */
    }

   /*  function cerrarModal() {
        modal.style.opacity = 0;
        modal.style.display = "none";
        modalImg.style.top = "-350px";
        

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
        
    } */

/*     window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.opacity = 0;
            modalImg.style.top = "-350px";
            modal.style.display = "none";
            document.getElementById('boton').style.bottom = '75px';
            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
    } */
