let counter = 0;
let counterContent = document.querySelector(".js-counter-content");
let counterButton = document.querySelector(".js-counter-button");
let counterReset = document.querySelector(".js-counter-button-reset");
let counterText = document.querySelector(".js-counter-text");

counterButton.addEventListener("click", function () {
  counter = counter + 1;
  counterContent.innerText = counter;
  if (counter >= 5 & counter < 8) {
    counterText.innerText = "Молодец! Еще немного, еще чуть-чуть!";
  } else if (counter >= 8 & counter < 11) {
    console.log("Больше 8ми");
    counterText.innerText = "Ты достиг цели! Поздравляю!";
  } else if (counter > 11) {
    counterText.innerText = "Кажется, это уже перебор! Остановись!";
  }
});

counterReset.addEventListener("click", function () {
  counter = 0;
  counterContent.innerText = counter;
  counterText.innerText = 'Норма воды в день: 8 стаканов';
});
