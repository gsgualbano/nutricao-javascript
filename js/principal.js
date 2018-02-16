var titulo = document.querySelector(".titulo");
titulo.textContent =  "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".pacientes");

for(var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var tdImc = paciente.querySelector(".info-imc");
    var imc = peso/(altura *altura);
    
    var pesoEhValido = true;
    var alturaEhValido = true;

    if(peso <= 0  ||  peso >= 1000) {
        console.log("Peso inválido");
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido";
        //paciente.style.backgroundColor = "lightcoral";
        paciente.classList.add("paciente-invalido");
    }

    if(altura <= 0 || altura >= 3.0) {
        console.log("Altura invalida");
        alturaEhValido = false;
        tdImc.textContent = "Altura Invalido";
        //paciente.style.backgroundColor = "lightcoral";
        paciente.classList.add("paciente-invalido");
    }

    if(pesoEhValido && alturaEhValido) {
        tdImc.textContent = imc.toFixed(2);
    }
}




