const todoLists = document.getElementById("todoLists");
const form = document.querySelector("form");
const input = form.querySelector("input");
const deleteBtns = document.querySelectorAll(".delete-btn");
const todos = document.querySelectorAll(".todo");
const boxes = document.querySelectorAll(".input__checkbox");

const handleBoxClick = (event) => {
  const checkbox = event.target;
  const todo = checkbox.nextElementSibling;
  if (checkbox.checked) {
    todo.classList.add("checked");
  } else {
    todo.classList.remove("checked");
  }
  checkbox.checked = checkbox.checked ? true : false;
};

const handleTodoClick = (event) => {
  const todo = event.target;
  const checkbox = todo.previousElementSibling;
  if (!checkbox.checked) {
    todo.classList.add("checked");
  } else {
    todo.classList.remove("checked");
  }
  checkbox.checked = checkbox.checked ? false : true;
};

const handleDelete = (event) => {
  const list = event.target.parentElement;
  list.remove();
};

const addList = () => {
  const div = document.createElement("div");
  const checkbox = document.createElement("input");
  const span = document.createElement("span");
  const remove = document.createElement("span");
  const value = input.value;

  checkbox.type = "checkbox";
  checkbox.className = "input__checkbox";
  span.innerText = value;
  remove.innerText = "삭제";
  remove.className = "delete-btn";
  div.className = "todo-list";
  div.append(checkbox);
  div.append(span);
  div.append(remove);
  todoLists.append(div);
  input.value = "";

  remove.addEventListener("click", handleDelete);
  span.addEventListener("click", handleTodoClick);
  checkbox.addEventListener("click", handleBoxClick);
};

const handleSubmit = (event) => {
  event.preventDefault();
  addList();
};

form.addEventListener("submit", handleSubmit);

deleteBtns.forEach((btn) => {
  btn.addEventListener("click", handleDelete);
});

todos.forEach((todo) => {
  todo.addEventListener("click", handleTodoClick);
});

boxes.forEach((box) => {
  box.addEventListener("click", handleBoxClick);
});
