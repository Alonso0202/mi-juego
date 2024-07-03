let numeroSecreto = 0;
let intentos = 0;
let listaNúmeroSorteado = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){

    let elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML = texto;
    return;

}
function verificarIntento(){

    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos ===1)?'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor')
        }else{
            asignarTextoElemento('p','El número secreto es mayor')
        }
        intentos++;
        limpiarCaja();
        }
    return;

}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {

    let númeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(númeroGenerado);
    console.log(listaNúmeroSorteado);
    //Si ya sorteamos todos los numeros
    if(listaNúmeroSorteado.length == numeroMaximo){
        asignarTextoElemento('p',' Ya se sortearon todos los numeros posibles')
    }else{
        // Si el numero generado esta incluido en la lista
        if (listaNúmeroSorteado.includes(númeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNúmeroSorteado.push(númeroGenerado)
            return númeroGenerado;
        }
    }
}

function condicionesIniciales() {

    asignarTextoElemento('h1','Juego número secreto Alonso');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);  
    //generar el numero aleatore
    numeroSecreto = generarNumeroSecreto();
    //Inicial el numero de intentos
    intentos = 1;

}

function reiniciarJuego() {

    //Limpiar caja
    limpiarCaja();
    //Iniciar el número de intervalo de números
    //Genera número aleatorio
    //Inicializar el número interno
        condicionesIniciales();
    //Deshabilita el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();