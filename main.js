function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}
document.querySelector('.tecla_pom').onclick = tocaSomPom;

function tocaSomClap(){
    document.querySelector('#som_tecla_clap').play();
}
document.querySelector('.tecla_clap').onclick = tocaSomClap;

function tocaSomTim(){
    document.querySelector('#som_tecla_tim').play();
}
document.querySelector('.tecla_tim').onclick = tocaSomTim;

function tocaSomPuff(){
    document.querySelector('#som_tecla_puff').play();
}
document.querySelector('.tecla_puff').onclick = tocaSomPuff;

function tocaSomSplash(){
    document.querySelector('#som_tecla_splash').play();
}
document.querySelector('.tecla_splash').onclick = tocaSomSplash;

function tocaSomToim(){
    document.querySelector('#som_tecla_toim').play();
}
document.querySelector('.tecla_toim').onclick = tocaSomToim;

function tocaSomPsh(){
    document.querySelector('#som_tecla_psh').play();
}
document.querySelector('.tecla_psh').onclick = tocaSomPsh;

function tocaSomTic(){
    document.querySelector('#som_tecla_tic').play();
}
document.querySelector('.tecla_tic').onclick = tocaSomTic;

function tocaSomTom(){
    document.querySelector('#som_tecla_tom').play();
}
document.querySelector('.tecla_tom').onclick = tocaSomTom;

//Adicionar o evento de tecla
document.addEventListener("keydown", function(event){
//Mostra qual tecla foi acionada no evento
console.log(event.key)

//Verificando botao especifico
if(event.key==="q"){
    tocaSomPom();
}
if(event.key==="w"||event.key==="Q"){
    tocaSomClap();
}
if(event.key==="e"){
    tocaSomTim();
}
if(event.key==="a"){
    tocaSomPuff();
}
if(event.key==="s"){
    tocaSomSplash();
}
if(event.key==="d"){
    tocaSomToim();
}
if(event.key==="z"){
    tocaSomPsh();
}
if(event.key==="x"){
    tocaSomTic();
}
if(event.key==="c"){
    tocaSomTom();
}
});