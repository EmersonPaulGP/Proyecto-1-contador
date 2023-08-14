const buttonDecremento = document.getElementById("decremento");
const buttonIncremento = document.getElementById("incremento");
const buttonReiniciar = document.getElementById("reiniciar");
const countElement = document.getElementById("count");

let count = 0;

function updateCount() {
  countElement.textContent = count;

  if (count > 0) {
    countElement.classList.add("positive");
    countElement.classList.remove("negative");
  } else if (count < 0) {
    countElement.classList.add("negative");
    countElement.classList.remove("positive");
  } else {
    countElement.classList.remove("positive", "negative");
  }
}

buttonDecremento.addEventListener("click", () => {
  count--;
  updateCount();
});

buttonIncremento.addEventListener("click", () => {
  count++;
  updateCount();
});

buttonReiniciar.addEventListener("click", () => {
  count = 0;
  updateCount();
});

updateCount();
