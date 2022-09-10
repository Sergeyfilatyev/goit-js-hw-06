const input = document.querySelector("#validation-input");
const validationInput = input.addEventListener("blur", event => {
	console.log(event.target.dataset.length);
	console.log(event.target.value.length);
	if (Number(event.target.dataset.length) === event.target.value.length) {
		input.classList.add("valid");
		input.classList.remove("invalid");
	} else {
		input.classList.add("invalid");
		input.classList.remove("valid");
	}
});
