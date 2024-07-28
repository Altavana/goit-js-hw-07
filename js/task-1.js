const sumCategories = document.querySelectorAll("h2").length;
console.log("Number of categories: ", sumCategories);
const allLists = document.querySelectorAll("ul");

allLists.forEach((list, index) => {
  if (index > 0) {
    console.log("Category: ", list.previousElementSibling.innerText);
    console.log("Elements: ", list.childElementCount);
  }
});

// ==== for styles like in Figma=====
const itemLi = document.querySelectorAll("li");
itemLi.forEach((item, index) => {
  if (item.classList != "item") {
    item.classList.add("item-group");
  }
});
