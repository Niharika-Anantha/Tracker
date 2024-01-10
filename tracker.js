let currentTask = document.getElementById("input-task");
let tasksContainer = document.getElementById("tasks-container");

function addTask() {
	// Check if the element already exists
	if (currentTask.value !== "") {
		let child = document.createElement("li");
		child.innerHTML = currentTask.value;
		let removeIcon = document.createElement("span");
		removeIcon.innerHTML = "\u00d7";
		child.appendChild(removeIcon);
		tasksContainer.appendChild(child);
	} else {
		alert("Enter a task");
	}
	currentTask.value = "";
	setData();
}

tasksContainer.addEventListener("click", (e) => {
	if (e.target.tagName === "LI") {
		e.target.classList.toggle("checked");
		setData();
	} else if (e.target.tagName === "SPAN") {
		e.target.parentElement.remove();
		setData();
	}
});

document.getElementById("input-task").addEventListener("keypress", (e) => {
	if (e.key === "Enter") {
		addTask();
	}
});

function setData() {
	localStorage.setItem("tasks", tasksContainer.innerHTML);
}

function showData() {
	tasksContainer.innerHTML = localStorage.getItem("tasks");
}
showData();
