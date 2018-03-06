var botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click", function (event) {
    event.preventDefault();//prevenir comportamento padrão, exemplo: prevenir formulário de recarregar o browser
    
    //Extraindo informações do paciente do form
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);

    //Monta a TR
    var pacienteTr = montaTr(paciente);
    
    //Validação
    var errors = validaPaciente(paciente);

    if(errors.length > 0) {
        exibeMensagensDeErro(errors);
        return;
    }

    //adicionado o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();

    //Apagando nensagens de erro após adicionar na tabela 
    var msgError = document.querySelector("#mensagem-error");
    msgError.innerHTML = "";
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

function validaPaciente(paciente) {
    var errors = [];

    if(paciente.nome.length == 0) {
        errors.push("O nome não pode ser em branco");
    }

    if (paciente.peso.length == 0) {
        errors.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0) {
        errors.push("A altura não pode ser em branco");
    }

    if (paciente.gordura.length == 0) {
        errors.push("A gordura não pode ser em branco");
    }

    if(!validaPeso(paciente.peso)){
        errors.push("Peso inválido");
    } 

    if (!validaAltura(paciente.altura)) {
        errors.push("Altura inválida");
    }

    return errors;
}

function exibeMensagensDeErro(errors) {
    var ol = document.querySelector("#mensagem-error");
    ol.innerHTML = "";
    errors.forEach(function(error) {
        var li = document.createElement("li");
        li.textContent = error;
        ol.appendChild(li);
    });
}