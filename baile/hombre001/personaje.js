






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
    this.personaje.classList.add("pasoBaile1");
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
    } else {
        this.personaje.classList.replace('pasoBaile2', 'pasoBaile1');
    }

    this.Timeout = setTimeout(() => this.bailando(), 250);
}






    stop(){
   
      this.accion=HOMBRE001_PARADO;
      
      this.personaje.classList.remove("pasoIzquierdo");
      this.personaje.classList.remove("pasoDerecho");
      this.personaje.classList.remove("pasoBaile1");
      this.personaje.classList.remove("pasoBaile2");
      this.personaje.classList.add("parado");


    }




  
}


