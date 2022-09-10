const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
	event.preventDefault();
	const {
		elements: { email, password },
	} = event.target;
	const dataProfile = { email: email.value, password: password.value };
	if (email.value === "" || password.value === "") {
		alert("Все поля должны быть заполнены");
	} else {
		console.log(dataProfile);
	}
	event.target.reset();
}
