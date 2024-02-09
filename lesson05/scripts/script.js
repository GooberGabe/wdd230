const d = document;
const button = d.querySelector("button");
const input = d.querySelector("input");
const list = d.querySelector("ul");

button.addEventListener("click", () => {
	if (input.value != "") {
		var li = d.createElement("li");
		li.textContent = input.value;

		var deleteButton = d.createElement("button");
		deleteButton.textContent = "X";
		deleteButton.addEventListener("click", () => {
			list.removeChild(li);
			input.focus();
		});
		li.append(deleteButton);
		list.append(li);
		input.focus();
		input.value = "";
	} else {
		input.focus();
	}
});
