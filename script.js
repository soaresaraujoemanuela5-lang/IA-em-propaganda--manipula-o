let paginaAtual = 0;

const paginas = document.querySelectorAll(".pagina");

const contador = document.getElementById("contador");

const botaoVoltar = document.getElementById("voltar");

const botaoProximo = document.getElementById("proximo");

const barraProgresso = document.getElementById("barraProgresso");

function mostrarPagina() {

    paginas.forEach((pagina, indice) => {

        pagina.classList.remove("ativa");

        if (indice === paginaAtual) {
            pagina.classList.add("ativa");
        }

    });

    contador.textContent =
        String(paginaAtual + 1).padStart(2, "0") +
        " / " +
        String(paginas.length).padStart(2, "0");

    // Atualiza a barra de progresso
    let progresso =
        ((paginaAtual + 1) / paginas.length) * 100;

    barraProgresso.style.width = progresso + "%";

    // Desativa o botão voltar na primeira página
    botaoVoltar.disabled = paginaAtual === 0;

    // Altera o texto do botão na última página
    if (paginaAtual === paginas.length - 1) {

        botaoProximo.textContent = "Voltar ao início ↻";

    } else {

        botaoProximo.textContent = "Próxima página →";

    }

}

function proximaPagina() {

    if (paginaAtual < paginas.length - 1) {

        paginaAtual++;

    } else {

        paginaAtual = 0;

    }

    mostrarPagina();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

function voltarPagina() {

    if (paginaAtual > 0) {

        paginaAtual--;

    }

    mostrarPagina();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

mostrarPagina();