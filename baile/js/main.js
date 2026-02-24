

var botonWalk;
var botonStop;
var botonDance;

var hombre001;

var hombre1;

class Personaje {
  constructor(Doc,Win) {
    this.Doc = Doc;
    this.Win = Win;

    this.personaje = this.Doc.getElementById('personaje');

    this.cabeza = this.Doc.getElementById('cabeza');
    this.cuerpo = this.Doc.getElementById('cuerpo');
    this.brazoDerecho = this.Doc.getElementById('brazo-derecho');
    this.brazoIzquierdo = this.Doc.getElementById('brazo-izquierdo');
    this.piernaDerecha = this.Doc.getElementById('pierna-derecha');
    this.piernaIzquierda = this.Doc.getElementById('pierna-izquierda');
  } 

    caminar() {
        this.Win.caminar(this.personaje);
    }
    stop() {
        this.Win.stop(this.personaje);
    } 





};

        


document.addEventListener('DOMContentLoaded', function() {
    botonWalk = document.getElementById('walk');
    botonStop = document.getElementById('stop');
    botonDance = document.getElementById('dance');
    hombre001 = document.getElementById('hombre001');
    if (!hombre001) return console.error('No se encontró el <object id="hombre001"> en el documento padre.');

    hombre001.addEventListener('load', () => {
        let innerDoc = null;
        let innerWin = null;
        try {
            innerDoc = hombre001.contentDocument || (hombre001.contentWindow && hombre001.contentWindow.document);
            innerWin = hombre001.contentWindow || (innerDoc && innerDoc.defaultView);
        } catch (e) {
            console.error('Error al acceder al contenido del <object> (posible cross-origin):', e);
        }

        if (!innerDoc || !innerWin) {
            return console.error('No se puede acceder al documento interno (posible cross-origin o bloqueo).');
        }

        hombre1 = new Personaje(innerDoc, innerWin);

        botonWalk.addEventListener('click', function() {
            hombre1.caminar();
        });

        botonStop.addEventListener('click', function() {
            hombre1.stop();
        });
    });

});