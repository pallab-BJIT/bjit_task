const todoForm = document.getElementById("todo-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
let nameForm;
let nameValue;
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskText = taskInput.value.trim();

  if (nameValue !== "") {
    addTask(taskText);
    taskInput.value = "";
  } else {
    alert("Please enter name");
  }
});

const addTask = (taskText) => {
  if (taskText.trim() != "") {
    const taskItem = document.createElement("li");
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    taskItem.innerHTML = `
    <span>Title : ${taskText}</span>
    <span>Created By: ${nameValue}</span>
    <span class="datetime">Created At : ${dateTimeString}</span>
    <div class='action-btn'>
    <button class="edit-btn"><img class ='img-tag' src=${"edit.png"}></button>
    <button class="delete-btn">X</button>
    </div>
  `;
    taskList.appendChild(taskItem);

    const editBtn = taskItem.querySelector(".edit-btn");
    const deleteBtn = taskItem.querySelector(".delete-btn");

    editBtn.addEventListener("click", () => editTask(taskItem, taskText));
    deleteBtn.addEventListener("click", () => deleteTask(taskItem));
  } else {
    alert("Please Enter Your Task");
  }
};

const editTask = (taskItem, taskText) => {
  const newText = prompt("Edit task:", taskText);

  if (!newText.trim() !== "") {
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    taskItem.querySelector("span").textContent = "Title : " + newText;
    taskItem.querySelector(".datetime").textContent =
      "Created At : " + dateTimeString;
  }
};

const deleteTask = (taskItem) => {
  const confirmDelete = confirm("Are you sure you want to delete this task?");
  if (confirmDelete) {
    taskItem.remove();
  }
};

const addName = () => {
  nameForm = document.getElementById("name-form");
  nameForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameDiv = document.querySelector(".name-div");
    nameValue = nameForm[0].value;
    if (nameValue.trim() !== "") {
      nameDiv.textContent = "Welcome : " + nameForm[0].value;
      nameForm.remove();
    } else {
      alert("Please Enter Your Name");
    }
  });
};
addName();
