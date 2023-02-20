const data = [
  {
    image: "image1.png",
    title: "O Python do vovô não sobe mais",
    paragraph:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    locale: "São Paulo - SP",
  },
  {
    image: "image2.png",
    title: "Todo mundo null",
    paragraph:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    locale: "Florianópolis - SC",
  },
  {
    image: "image3.png",
    title: "Hoje dou exception",
    paragraph:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    locale: "Curitiba - PR",
  },
  {
    image: "image4.png",
    title: "Manda Node",
    paragraph:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    locale: "Salvador - BA",
  },
  {
    image: "image5.png",
    title: "Só no back-end",
    paragraph:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    locale: "São Paulo - SP",
  },
  {
    image: "image6.png",
    title: "Esse anel não é de Ruby",
    paragraph:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    locale: "São Paulo - SP",
  },
  {
    image: "image7.png",
    title: "Pimenta no C# dos outros é refresco",
    paragraph:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    locale: "Rio de Janeiro - RJ",
  },
  {
    image: "image8.png",
    title: "EnCACHE aqui",
    paragraph:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    locale: "Porto Alegre - RS",
  },
  {
    image: "image9.png",
    title: "Não valho nada mas JAVA li",
    paragraph:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    locale: "São Paulo - SP",
  },
]

const gridCards = document.querySelector(".grid-cards")

data.map((content) => {
  return (gridCards.innerHTML += `
        <div class="cards">
          <img src="./assets/${content.image}" alt="imagem do carnaval" />
          <h1>${content.title}</h1>
          <p>
            ${content.paragraph}
          </p>
          <div class="locale">
            <i class="ph-map-pin"></i>
            <p>${content.locale}</p>
          </div>
        </div>
    `)
})

let inputText = document.querySelector("input")
let cards = document.querySelectorAll(".cards")

inputText.addEventListener("input", handleFilterBlocks)

function handleFilterBlocks() {
  if (inputText.value !== "") {
    for (let card of cards) {
      let title = card.querySelector("h1")

      title = title.textContent.toLowerCase()

      let filter = inputText.value.toLowerCase()

      if (title.includes(filter)) {
        card.style.display = "block"
      } else {
        card.style.display = "none"
      }
    }
  } else {
    for (let card of cards) {
      card.style.display = "block"
    }
  }
}

let selectCity = document.querySelector("select")
selectCity.addEventListener("change", handleFilterCity)

function handleFilterCity(event) {
  event.preventDefault()

  for (let card of cards) {
    let states = selectCity.options[selectCity.selectedIndex].value

    let locale = card.querySelector(".cards .locale p")
    locale = locale.textContent

    states.includes(locale)
      ? (card.style.display = "block")
      : (card.style.display = "none")

    states === "state" ? (card.style.display = "block") : ""
  }
}
