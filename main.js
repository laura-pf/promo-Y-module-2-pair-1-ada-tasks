'use strict';

'use strict';

/*Cuando la usuaria hace click en el botón:
se recogen los datos del input que ha escrito la usuaria

si el valor del input es mayor que el numero aleatorio: demasiado alto
si es menor: demasiado bajo
si es igual: has ganado campeona!
si no introduce un numero valido: el numero debe de estar entre 1 y 100*/

/*EVENTO CLICK DONDE PASAN TRES COSAS: 
SE GENERA UN NUMERO ALEATORIO
SE COMPARA ESE NUMERO CON EL QUE HA ESCRITO LA USUARIA
CONTABILIZAR LOS INTENTOS/CLICKS DE LA USUARIA*/

const button = document.querySelector (".js-button");
const inputNumber = document.querySelector (".js-inputNumber");
const track = document.querySelector (".js-p-track");
const tries = document.querySelector (".tries");

function getRandomNumber(max) { 
  return Math.ceil(Math.random() * max); 
}

const getNumber = getRandomNumber(100);
console.log("el numero generado es:", getNumber);

let clickCount = 0;

const handleClick = (event) => {
    event.preventDefault();
  
    const inputValue = parseInt(inputNumber.value);

     if (inputValue < 1 || inputValue > 100){
         track.innerHTML = "El número debe estar entre 1 y 100"
     } else if (inputValue > getNumber) {
        track.innerHTML = "El número que has introducido es demasiado alto" 
    } else if (inputValue < getNumber) {
        track.innerHTML = "El número que has introducido es demasiado bajo"
    }else if (inputValue === getNumber){
        track.innerHTML = "¡HAS GANADO CAMPEONA!"
    }

    clickCount++;

    tries.innerHTML = `Número de intentos: ${clickCount}`


}

        