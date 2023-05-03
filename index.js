const counterContent = document.getElementById("counterValue");
const counterButton = document.getElementById("counterAddGlass");
const counterReset = document.getElementById("counterReset");
const counterText = document.getElementById("counterText");

const COUNTER_INITIAL_VALUE = 0;
const COUNTER_INITIAL_TEXT = "Норма воды в день: 8 стаканов";

let counter = COUNTER_INITIAL_VALUE;
let text = counterText;

counterButton.addEventListener("click", function () {
  counter = counter + parseInt(counterAddGlass.dataset.glass);
  counterContent.innerText = counter;
 

  if (counter >= 5 & counter < 8) {
    text.innerText = "Молодец! Еще немного, еще чуть-чуть!";
    console.log(text)
  } else if (counter >= 8 & counter < 11) {
    text.innerText = "Ты достиг цели! Поздравляю!";
  } else if (counter > 11) {
    text.innerText = "Кажется, это уже перебор! Остановись!";
  }
});

counterReset.addEventListener("click", function () {
  counter = COUNTER_INITIAL_VALUE;
  counterContent.innerText = counter;
  text.innerText = COUNTER_INITIAL_TEXT;
});
