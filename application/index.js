function telaCardapio () {
    window.location.href = "telaCardapio.html";
}

function telaSobre () {
    window.location.href = "sobre.html";
}

function telaInicio () {
    window.location.href = "index.html";
}

function mostrarTela (){
    document.getElementById("loadingScreen").style.display = "flex";
}

// Função do botão de voltar ao topo

// Mostrar/esconder botão ao rolar
window.addEventListener("scroll", function () {
    const btn = document.getElementById("btn-topo");
    if (window.scrollY > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
});

// Rolar suavemente ao topo
document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("btn-topo");
    btn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

// Função Botão Hamburguer
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const barraNavegacao = document.getElementById("barra-de-navegacao");

    menuToggle.addEventListener("click", function () {
        barraNavegacao.classList.toggle("ativo");
    });
});
