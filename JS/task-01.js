const categoriesList = document.getElementById("categories");
const categoryItems = categoriesList.querySelectorAll(".item");

console.log("Number of categories: " + categoryItems.length);

categoryItems.forEach(function (category) {
  const categoryTitle = category.querySelector("h2").textContent;
  const categoryElements = category.querySelectorAll("li").length;

  console.log("Category: " + categoryTitle);
  console.log("Elements: " + categoryElements);
});
j;
