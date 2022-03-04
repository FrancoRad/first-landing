(function(){
    /*slider es un Array*/
    const sliders = [...document.querySelectorAll('.slider_body')]; //se obtiene todos los elementos de la clase slider_body
    //al encerrarlo entre corchetes y ponerle los 3 ptos se convierte en un array
    const arrowNext = document.querySelector('#next'); /*querySelector para que obtenga el id #next*/
    const arrowBefore = document.querySelector('#before');
    let valor;

    /*Cada vez que le haces click a cualquiera de estos 2 elementos va a llamar a la funcion changePosition*/
    arrowNext.addEventListener('click', ()=>changePosition(1));/*suma 1*/
    arrowBefore.addEventListener('click', ()=>changePosition(-1)); /*resta 1*/

    function changePosition(change){
        /*Convierte a un entero la primer imagen, que es 1 (data-id=1 en html)*/
        const elementoActual = Number(document.querySelector('.slider_body-show').dataset.id);
        
        valor = elementoActual;
        valor += change; /*suma positivo o negativo el valor de change que es 1 o -1*/
    
        if(valor === 0 || valor == sliders.length+1){ /*slider.length te devuelve el nro de elemento/*
            /*valor == sliders.length+1 quiere decir que si se pasa le reasigna un valor*/

            valor = valor === 0 ? sliders.length : 1;
        }
        sliders[elementoActual-1].classList.toggle('slider_body-show');
        /*Elemento al que queremos cambiar*/
        sliders[valor-1].classList.toggle('slider_body-show');/*se pone -1 para contar desde el 0 ya que en el data-id se puso = 1 como el primero*/
        /*classList es para tomar sus clases*/
        /*toggle hace que si el elemento tiene la clase slider_body-show se la quita pero si no tiene dicha clase se la agrega*/
    }
})()