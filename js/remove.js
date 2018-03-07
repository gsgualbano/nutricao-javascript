var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function (event) {
    var alvoDoEvento = event.target; //td
    var paiDoAlvo = alvoDoEvento.parentNode; //tr

    //Classe de css que deixa a linha opaca em 0,5s
    paiDoAlvo.classList.add("fadeOut");

    //função para esperar meio segundo antes de excluir
    setTimeout(function () {
        paiDoAlvo.remove();//remove o pai(tr)
    }, 500);
});