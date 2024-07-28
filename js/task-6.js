function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const amountEl = document.querySelector("#controls input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const divBoxes = document.querySelector("#boxes");

const createBoxes = (amount) => {
  let divArr = [];
  for (let i = 0; i < amount; i++) {
    const elemBox = document.createElement("div");
    elemBox.style.width = 30 + 10 * i + "px";
    elemBox.style.height = 30 + 10 * i + "px";
    elemBox.style.backgroundColor = getRandomHexColor();
    divArr.push(elemBox);
  }
  divBoxes.append(...divArr);
};

const onBtnDestroyClick = () => {
  divBoxes.innerHTML = "";
};

const onBtnCreateClick = () => {
  let amount = amountEl.value;
  if (amount <= 100 && amount >= 1) {
    createBoxes(amount);
  } else {
    onBtnDestroyClick();
  }
  amountEl.value = "";
};

amountEl.addEventListener("input", () => amountEl.value);
btnCreate.addEventListener("click", onBtnCreateClick);
btnDestroy.addEventListener("click", onBtnDestroyClick);

// ==== for styles like in Figma=====
amountEl.classList.add("inp-number");
btnCreate.classList.add("btn-create");
btnDestroy.classList.add("btn-destroy");
const divControl = document.querySelector("#controls");

divControl.classList.add("container-control");
divBoxes.classList.add("container-boxes");
