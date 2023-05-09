const perguntasERespostas = document.querySelectorAll(".perguntas");



console.log(perguntasERespostas)

perguntasERespostas.forEach(function (item) {
    item.addEventListener("click", function () {
        const itemAtivoAtual = document.querySelector(".ativo");

        if (itemAtivoAtual) {
            itemAtivoAtual.classList.remove("ativo");
        }
        item.classList.add("ativo");

    });
});