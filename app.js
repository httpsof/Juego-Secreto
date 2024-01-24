let numeroSecreto;
let intentos;
let listaNumerosSorteados = [];
let numeroMaximo = 2;

function asignarTextoElemento(elemento, texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
}

function verificarIntento (){
    let numeroUsuario= parseInt(document.getElementById('valorUsuario').value);
    intentos++;
    if (numeroSecreto == numeroUsuario){
        asignarTextoElemento('p','Acertaste el número en '+intentos+' '+ (intentos == 1?'vez':'veces'));
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if (numeroUsuario > numeroSecreto){
            asignarTextoElemento('p',"El número secreto es menor");
        }
        else{
            asignarTextoElemento('p',"El número secreto es mayor");
        }
        limpiarCaja();
    }
    return;
}

function condicionesIniciales (){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p','Indica un número del 1 al '+ numeroMaximo);
    intentos = 0;
    numeroSecreto = generarNumeroSecreto();
    console.log("n:"+numeroSecreto);
}

function nuevoJuego (){
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled','true');
}

function limpiarCaja (){
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles ');
        //nuevoJuego();
    }
    else{
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }
        else{
            console.log("lista: "+listaNumerosSorteados);
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

condicionesIniciales();


