const btnEl = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const spanEl = document.querySelector(".color");

const getRandomHexColor = function () {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
const onBtnClick = () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = bodyEl.style.backgroundColor;
};

btnEl.addEventListener("click", onBtnClick);

// ==== for styles like in Figma=====
const itemP = document.querySelectorAll("p");
itemP[1].classList.add("textBackgrColor");
