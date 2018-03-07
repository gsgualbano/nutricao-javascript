var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
    console.log("Buscando pacientes");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function () {
        if(xhr.status == 200) {
            var resposta = xhr.responseText; //recebe os dados da api em forma de string
            var pacientes = JSON.parse(resposta); //converte a string para um array de objetos

            pacientes.forEach(function (paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            var erroAjax = document.querySelector("#erro-ajax");
            erroAjax.textContent = "Error ao buscar os pacientes";
        }
    });

     xhr.send();
});