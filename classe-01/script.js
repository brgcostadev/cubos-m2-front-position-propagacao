const olho = document.querySelector('.olho')
const alternador = document.querySelector('.senha input')

const clickOlho = olho.addEventListener('click', () => {
    const olhoAberto = "http://127.0.0.1:5500/classe-01/assets/olho-aberto.svg"
    const olhoFechado = "http://127.0.0.1:5500/classe-01/assets/olho-fechado.svg"
    if (olho.src === olhoFechado) {
        olho.src = olhoAberto
        alternador.type = "text"
    } else {
        olho.src = olhoFechado
        alternador.type = "password"
    }
})

