console.log("Fui carregado de um arquivo externo");

var titulo = document.querySelector(".titulo");
var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdGordura = paciente.querySelector(".info-gordura");
var gordura = tdGordura.textContent;

var tdImc = paciente.querySelector(".info-imc");
var imc = parseFloat(peso)/(parseFloat(altura) * parseFloat(altura));


tdImc.textContent = imc;
titulo.textContent =  "Aparecida Nutricionista";