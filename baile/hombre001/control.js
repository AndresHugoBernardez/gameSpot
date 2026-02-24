

var caminando = false;

function caminar(element) {
  caminando=true;
  caminando(element);
}

function caminando(element) {


  if(caminando==true){
    
 setTimeout(() => {   element.style.class ="";
    element.style.class ="pasoDerecha";

     setTimeout(() => {
        element.style.class ="";
        element.style.class ="pasoIzquierda";
        caminando(element);
     }, 250);
    }, 250);


}   
}

function stop(element) {
    caminando=false;
    element.style.class ="parado";
}