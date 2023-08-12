const BotonDecremento = document.getElementById("decremento");
const BotonIncremento = document.getElementById("incremento");
const BotonReiniciar = document.getElementById("reiniciar");
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

BotonDecremento.addEventListener("click", () => {
  count--;
  updateCount();
});

BotonIncremento.addEventListener("click", () => {
  count++;
  updateCount();
});

BotonReiniciar.addEventListener("click", () => {
  count = 0;
  updateCount();
});

updateCount();
