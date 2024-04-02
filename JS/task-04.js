let counterValue = 0;
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const counterSpan = document.getElementById("value");

decrementButton.addEventListener("click", function () {
  counterValue--;
  counterSpan.textContent = counterValue;
});

incrementButton.addEventListener("click", function () {
  counterValue++;
  counterSpan.textContent = counterValue;
});
