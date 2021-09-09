const todoLists = document.getElementById("todoLists");
const form = document.querySelector("form");
const input = form.querySelector("input");
const deleteBtns = document.querySelectorAll(".delete-btn");
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
  console.log(todoItems);
  const list = event.target.parentElement;
  const listId = Number(list.dataset.id);
  console.log(listId);
  list.remove();
  todoItems = todoItems.filter((item) => item.id !== listId);
  saveTodos();
};

const saveTodos = () => {
  localStorage.setItem(TODOS_LS, JSON.stringify(todoItems));
};

const handleSubmit = (event) => {
  event.preventDefault();
  saveTodos();
  paintTodo(input.value);
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

const paintTodo = (text) => {
  const todoObj = {
    id: getRandomId(),
    text: text,
  };
  todoItems.push(todoObj);
  saveTodos();

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

const loadTodos = () => {
  const loadedTodos = localStorage.getItem(TODOS_LS);
  if (loadedTodos) {
    const parsedTodos = JSON.parse(loadedTodos);
    parsedTodos.forEach((todo) => {
      paintTodo(todo.text);
    });
  }
};

loadTodos();

form.addEventListener("submit", handleSubmit);
