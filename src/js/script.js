const personagens = document.querySelectorAll(".personagem")

personagens.forEach(personagens => {

    if(window.innerWidth < 450) {
        window.scrollTo({top:0, behavior: "smooth"})
    }

    personagens.addEventListener("mouseenter", () => { 
        editaSelecaoPersonagem(personagens)

        const idPersonagem = alteraImagem(personagens)

        alteraNomePersonagem(idPersonagem)

        alteraDescricao(personagens)
    })
})

function alteraDescricao(personagens) {
    const descricaoPersonagem = document.getElementById("descricao-personagem")
    descricaoPersonagem.innerText = personagens.getAttribute("data-description")
}

function alteraNomePersonagem(idPersonagem) {
    const nomePersonagem = document.getElementById("nome-personagem")
    nomePersonagem.innerText = idPersonagem
}

function alteraImagem(personagens) {
    const personagemGrande = document.querySelector(".personagem-grande")
    const idPersonagem = personagens.attributes.id.value
    personagemGrande.src = `./src/img/card-${idPersonagem}.png`
    return idPersonagem
}

function editaSelecaoPersonagem(personagens) {
    const personagemSelecionado = document.querySelector(".selecionado")
    personagemSelecionado.classList.remove("selecionado")
    personagens.classList.add("selecionado")
}
