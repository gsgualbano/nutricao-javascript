var botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click", function (event) {
    event.preventDefault();//prevenir comportamento padrão, exemplo: prevenir formulário de recarregar o browser
    
    //Extraindo informações do paciente do form
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);

    //Monta a TR
    var pacienteTr = montaTr(paciente);

    if(!validaPaciente(paciente)) {
        console.log("Paciente inválido");
        return;
    }

    //adicionado o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();
});

// Função para extrair informações do paciente do form
function obtemPacienteDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

//Função para criar TR e monta-la
function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    // Criando um elemento td html
    var nomeTd = montaTd(paciente.nome,"info-nome"); 
    var pesoTd = montaTd(paciente.peso,"info-peso");
    var alturaTd = montaTd(paciente.altura,"info-altura");
    var gorduraTd = montaTd(paciente.gordura,"info-gordura");
    var imcTd = montaTd(paciente.imc,"info-imc");

    //Colocando o td como filho do tr
    pacienteTr.appendChild(nomeTd); 
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}

//Função para criar as TDs
function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente() {
    if(validaPeso(paciente.peso)){
        return true;
    } else {
        return false;
    }
}