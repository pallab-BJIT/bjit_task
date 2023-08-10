let nameForm;
let name = "";
const deleteAllTaskBtn = document.getElementById("delete-all-btn");
// console.log(deleteAllTaskBtn);
deleteAllTaskBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const allTask = document.querySelector(".task-list-div");
  console.log(allTask.childElementCount);
  const confirmDelete = confirm("Are you sure you want to delete all task?");

  if (allTask) {
    if (confirmDelete) {
      allTask.remove();
    }
  } else {
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const todoForm = document.getElementById("todo-form");
  nameForm = document.getElementById("name-form");
  nameForm.addEventListener("submit", (e) => addNameHandler(e));
  todoForm.addEventListener("submit", (e) => addTaskHandler(e));

  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener("input", () => searchTasks());
});

const taskDeleteHandler = (todoItemDiv) => {
  const confirmDelete = confirm("Are you sure you want to delete this task?");
  if (confirmDelete) {
    todoItemDiv.remove();
  }
};

const createTaskElement = (todoValue, dateTimeString) => {
  const taskItem = document.createElement("li");
  taskItem.innerHTML = `
      <span>Title : ${todoValue}</span>
      <span class="datetime">Created At : ${dateTimeString}</span>
      <span class="datetime">Author: ${name}</span>
      <div class="action-btn">
      <button class="edit-btn">Edit</button>
      <button style="background-color:red" class="delete-btn">Delete</button>
      </div>
    `;

  const editBtn = taskItem.querySelector(".edit-btn");
  const deleteBtn = taskItem.querySelector(".delete-btn");

  editBtn.addEventListener("click", () => editTask(taskItem, todoValue));
  deleteBtn.addEventListener("click", () => taskDeleteHandler(taskItem));

  return taskItem;
};

const addNameHandler = (e) => {
  e.preventDefault();
  const nameForm = document.getElementById("name-form");
  name = e.target[0].value;
  if (name.trim() !== "") {
    const displayName = document.createElement("div");
    displayName.textContent = `Welcome : ${name}`;
    const nameDiv = document.querySelector(".name-div");
    nameDiv.appendChild(displayName);
    e.target[0].value = "";
    nameForm.remove();
  } else {
    alert("Please enter your name.");
  }
};

const addTaskHandler = (e) => {
  e.preventDefault();

  const todoValue = e.target[0].value;

  if (name.trim() == "") {
    console.log("hello");
    alert("Please enter your name.");
  } else {
    if (todoValue.trim() != "") {
      const now = new Date();
      const dateTimeString = now.toLocaleString();
      const taskItem = createTaskElement(todoValue, dateTimeString);
      const taskList = document.getElementById("task-list");
      taskList.appendChild(taskItem);
      e.target[0].value = "";
    } else {
      alert("Please enter a task");
    }
  }
};

function editTask(taskItem, todoValue) {
  const newText = prompt("Edit task:", todoValue);

  if (newText !== null && newText.trim() !== "") {
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    taskItem.querySelector("span").textContent = "Title : " + newText;
    taskItem.querySelector(".datetime").textContent =
      "Created At : " + dateTimeString;
  }
}

const searchTasks = () => {
  const searchInput = document.getElementById("search-input");
  const searchValue = searchInput.value.trim().toLowerCase();
  const taskItems = document.querySelectorAll("#task-list li");

  taskItems.forEach((taskItem) => {
    const taskText = taskItem.querySelector("span").textContent.toLowerCase();
    if (taskText.includes(searchValue)) {
      taskItem.style.display = "flex";
    } else {
      taskItem.style.display = "none";
    }
  });
};
