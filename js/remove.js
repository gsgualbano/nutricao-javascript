var pacientes = document.querySelectorAll(".pacientes");

pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function() {
        this.remove();
    });
});