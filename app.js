window.onload = function () {
    // Variables
    const IMAGENES = [
        'img/asd.jpg',
        'img/ert.jpg',
        'img/tyu.jpg',
        'img/qwe.jpg',


    ];
    
    

    let botonRetroceder = document.querySelector('#retroceder');
    let botonAvanzar = document.querySelector('#avanzar');
    let imagen = document.querySelector('#imagen');


    // Funciones
    function* generador() {
     
    yield 1;
    yield 2;
    yield 3;
    yield 4;

        
      }

      function renderizarImagenInicial() {
        imagen.style.backgroundImage = `url(${IMAGENES[0]})`
      }

      function pasarFoto() {
    
        renderizarImagen()
      }

    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    // function pasarFoto() {
    //     if(posicionActual >= IMAGENES.length - 1) {
    //         posicionActual = 0;
    //     } else {
    //         posicionActual++;
    //     }
    //     renderizarImagen();
    // }

    /**
     * Funcion que cambia la foto en la anterior posicion
     */
    // function retrocederFoto() {
    //     if(posicionActual <= 0) {
    //         posicionActual = IMAGENES.length - 1;
    //     } else {
    //         posicionActual--;
    //     }
    //     renderizarImagen();
    // }

    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    let valor = generador()
    function renderizarImagen () {
       

      
    //    console.log(IMAGENES[0]);
        imagen.style.backgroundImage = `url(${IMAGENES[valor.next().value]})`;
    }

    
   renderizarImagenInicial()


    // Eventos
    botonAvanzar.addEventListener('click', pasarFoto);
    // botonRetroceder.addEventListener('click', retrocederFoto);

    // Iniciar
    // renderizarImagen();
}