import "./style.css"

const button = document.querySelector(".primary")

button.addEventListener("click", handleButton)

function handleButton(event) {
  const button = event.currentTarget

  button.classList.toggle("loading")
  const text = button.textContent
  button.innerHTML = `
    <i class="ph-circle-notch-bold"></i> ${text}
  `
}
