const todoLists = document.getElementById("todoLists");
const form = document.querySelector("form");
const input = form.querySelector("input");
const deleteBtns = document.querySelectorAll(".delete-btn");
const todos = document.querySelectorAll(".todo");
const boxes = document.querySelectorAll(".input__checkbox");

let ids = [0, 1, 2];
let toDos = [
  { id: 0, text: "➕ 여기에 할 일이 추가됩니다" },
  { id: 1, text: "✔ 체크박스를 눌러 할 일을 완료합니다" },
  { id: 2, text: "❌ 오른쪽 삭제 버튼을 눌러 삭제하세요" },
];
const TODOS = "toDos";

localStorage.setItem(TODOS, JSON.stringify(toDos));

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

const handleSubmit = (event) => {
  event.preventDefault();
  paintToDo(input.value);
};

const paintToDo = (text) => {
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
  div.append(checkbox);
  div.append(span);
  div.append(remove);
  todoLists.append(div);

  remove.addEventListener("click", handleDelete);
  span.addEventListener("click", handleTodoClick);
  checkbox.addEventListener("click", handleBoxClick);
};

const loadToDos = () => {
  const loadedToDos = localStorage.getItem(TODOS);

  if (loadedToDos) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach((todo) => {
      paintToDo(todo.text);
    });
  }
};

loadToDos();

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
