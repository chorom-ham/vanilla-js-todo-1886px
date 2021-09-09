const todoLists = document.getElementById("todoLists");
const form = document.querySelector("form");
const input = form.querySelector("input");
const deleteBtns = document.querySelectorAll(".delete-btn");
const todos = document.querySelectorAll(".todo");
const boxes = document.querySelectorAll(".input__checkbox");

let todoItems = [];
const TODOS_LS = "toDos";

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
  const listId = list.dataset.id;
  console.log(listId);
  list.remove();
};

const saveToDos = () => {
  localStorage.setItem(TODOS_LS, JSON.stringify(todoItems));
};

const handleSubmit = (event) => {
  event.preventDefault();
  saveToDos();
  paintToDo(input.value);
};

const getRandomId = () => {
  let exists = true;
  let id = null;
  while (exists) {
    id = Math.floor(Math.random() * 100);
    exists = todoItems.some((obj) => {
      obj.id === id;
    });
  }
  return id;
};

const paintToDo = (text) => {
  const todoObj = {
    id: getRandomId(),
    text: text,
  };
  todoItems.push(todoObj);
  saveToDos();

  const div = document.createElement("div");
  const checkbox = document.createElement("input");
  const span = document.createElement("span");
  const remove = document.createElement("span");

  checkbox.type = "checkbox";
  checkbox.className = "input__checkbox";
  span.innerText = text;
  remove.innerText = "삭제";
  remove.className = "delete-btn";
  div.className = "todo-list";
  div.dataset.id = todoObj.id;
  div.append(checkbox);
  div.append(span);
  div.append(remove);
  todoLists.append(div);
  input.value = "";

  remove.addEventListener("click", handleDelete);
  span.addEventListener("click", handleTodoClick);
  checkbox.addEventListener("click", handleBoxClick);
};

const loadToDos = () => {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach((todo) => {
      paintToDo(todo.text);
    });
  }
};

loadToDos();

form.addEventListener("submit", handleSubmit);
