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

let tecla = null;

document.addEventListener("keydown", function(event){
//Mostra qual tecla foi acionada no evento
console.log(event.key)


tecla = event.key;
tecla = tecla.toLowerCase();

//Verificando botao especifico
if(tecla==="q"){
    tocaSomPom();
}
if(tecla==="w"){
    tocaSomClap();
}
if(tecla==="e"){
    tocaSomTim();
}
if(tecla==="a"){
    tocaSomPuff();
}
if(tecla==="s"){
    tocaSomSplash();
}
if(tecla==="d"){
    tocaSomToim();
}
if(tecla==="z"){
    tocaSomPsh();
}
if(tecla==="x"){
    tocaSomTic();
}
if(tecla==="c"){
    tocaSomTom();
}
});