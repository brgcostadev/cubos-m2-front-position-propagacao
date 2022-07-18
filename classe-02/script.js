const button = document.querySelector("button")
const box = document.querySelector(".box")
const action = button.addEventListener('click', () => {
    console.log("inicio")
    if (box.style.display === "none") {
        box.style.display = "flex"
    } else {
        box.style.display = "none"
    }

})