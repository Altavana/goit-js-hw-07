const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
textInput.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value.trim();
  if (output.textContent === "") {
    output.textContent = "Anonymous";
  }
});
// ==== for styles like in Figma=====
const inpName = document.querySelector("#name-input");
inpName.classList.add("name-input");
