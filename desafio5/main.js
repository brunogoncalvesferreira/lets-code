let operation = document.querySelector(".operation")
let result = document.querySelector(".result")

function handleInsert(buttonValue) {
  operation.innerHTML += buttonValue
}

function calculate() {
  if (operation) {
    result.innerHTML = `${eval(operation.innerHTML)}`
  }
}

function handleDeleteLast() {
  operation.innerHTML = operation.innerHTML.slice(0, -1)
}

function handleClear() {
  operation.innerHTML = ""
  result.innerHTML = ""
}

function handlePercentage() {
  alert("OPSSS!")
}

function handlePlusMinus() {
  let e = operation.innerHTML
  t =
    e.split(" ").pop().isInteger(parseFloat(t)) &&
    (operation.innerHTML = e.slice(0, e.length - t.length) + -t)
}
