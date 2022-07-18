const imagensGaleria = document.querySelectorAll(".container img")
const imagemModal = document.querySelector(".modal img")
const modal = document.querySelector(".modal")

const abrirModal = (src) => {
    imagemModal.src = src
    modal.style.display = "flex"
}

imagensGaleria.forEach((imagem) => {
    imagem.addEventListener("click", (event) => {
        abrirModal(event.target.src)
    })
})

const fecharModal = () => {
    modal.style.display = "none"
}

modal.addEventListener("click", () => {
    fecharModal()
})