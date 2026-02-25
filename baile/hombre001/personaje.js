






export default  class hombre001 {
  constructor(tagName) {
    this.Timeout=null;
    this.personaje = document.getElementById(tagName).querySelector("#personaje");;
    this.accion = HOMBRE001_PARADO; 
    this.cabeza           = this.personaje.querySelector("#cabeza");
    this.cuerpo           = this.personaje.querySelector("#cuerpo");
    this.brazoDerecho     = this.personaje.querySelector("#brazo-derecho");
    this.brazoIzquierdo   = this.personaje.querySelector("#brazo-izquierdo");
    this.piernaDerecha    = this.personaje.querySelector("#pierna-derecha");
    this.piernaIzquierda  = this.personaje.querySelector("#pierna-izquierda");

  }

caminar() {
    if (this.accion === HOMBRE001_CAMINANDO) return;
    clearTimeout(this.Timeout);
    this.stop();
    this.accion = HOMBRE001_CAMINANDO;
    this.personaje.classList.remove("parado");
    this.personaje.classList.add("pasoDerecho");
    this.caminando();
}
caminando() {
    if (this.accion !== HOMBRE001_CAMINANDO) {
        this.stop();
        return;
    }

    // Alternar
    if (this.personaje.classList.contains('pasoDerecho')) {
        this.personaje.classList.replace('pasoDerecho', 'pasoIzquierdo');
    } else {
        this.personaje.classList.replace('pasoIzquierdo', 'pasoDerecho');
    }

    this.Timeout = setTimeout(() => this.caminando(), 250);
}



bailar() {
    if (this.accion === HOMBRE001_BAILANDO1) return;
    clearTimeout(this.Timeout);
    this.stop();
    this.accion = HOMBRE001_BAILANDO1;
    this.personaje.classList.remove("parado");
    this.personaje.classList.add("pasoBaile6");
    this.bailando();
}
bailando() {
    if (this.accion !== HOMBRE001_BAILANDO1) {
        this.stop();
        return;
    }

    // Alternar
    if (this.personaje.classList.contains('pasoBaile1')) {
        this.personaje.classList.replace('pasoBaile1', 'pasoBaile2');
    } 
    else  if (this.personaje.classList.contains('pasoBaile2')) {
        this.personaje.classList.replace('pasoBaile2', 'pasoBaile3');
    } 
    else if (this.personaje.classList.contains('pasoBaile3')) {
        this.personaje.classList.replace('pasoBaile3', 'pasoBaile4');
    } 
    else  if (this.personaje.classList.contains('pasoBaile4')) {
        this.personaje.classList.replace('pasoBaile4', 'pasoBaile5');
    } 
    else if (this.personaje.classList.contains('pasoBaile5')) {
        this.personaje.classList.replace('pasoBaile5', 'pasoBaile6');
    } 
    else {
        this.personaje.classList.replace('pasoBaile6', 'pasoBaile1');
    }

    this.Timeout = setTimeout(() => this.bailando(), 500);
}






    stop(){
   
      this.accion=HOMBRE001_PARADO;
      
      this.personaje.classList.remove("pasoIzquierdo");
      this.personaje.classList.remove("pasoDerecho");
      this.personaje.classList.remove("pasoBaile1");
      this.personaje.classList.remove("pasoBaile2");
      this.personaje.classList.remove("pasoBaile3");
      this.personaje.classList.remove("pasoBaile4");
      this.personaje.classList.remove("pasoBaile5");
      this.personaje.classList.remove("pasoBaile6");
      this.personaje.classList.add("parado");


    }




  
}


