function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector("body");
const colorName = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");
changeColorBtn.addEventListener("click", () => {
	const randomColor = `${getRandomHexColor()}`;
	body.style.backgroundColor = randomColor;
	colorName.innerHTML = randomColor;
});
