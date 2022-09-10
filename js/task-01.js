const numberCategories = document.querySelector("#categories").children.length;
console.log("Number of categories:", numberCategories);
const items = document.querySelectorAll(".item");
for (let item of [...items]) {
	const valueCategory = item.querySelector("h2").textContent;
	const numberElements = item.querySelectorAll("li").length;
	console.log("Category:", valueCategory);
	console.log("Elements:", numberElements);
}
