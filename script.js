const todoLists = document.getElementById("todoLists");
const form = document.querySelector("form");
const input = form.querySelector("input");
const deleteBtns = document.querySelectorAll(".delete-btn");

const handleDelete = (event) => {
  const list = event.target.parentElement;
  list.remove();
};

const addList = () => {
  const div = document.createElement("div");
  const newList = document.createElement("input");
  const span = document.createElement("span");
  const remove = document.createElement("span");
  const value = input.value;

  newList.type = "checkbox";
  newList.className = "input__checkbox";
  span.innerText = value;
  remove.innerText = "삭제";
  remove.className = "delete-btn";
  div.className = "todo-list";
  div.append(newList);
  div.append(span);
  div.append(remove);
  todoLists.append(div);
  input.value = "";

  remove.addEventListener("click", handleDelete);
};

const handleSubmit = (event) => {
  event.preventDefault();
  addList();
};

form.addEventListener("submit", handleSubmit);
deleteBtns.forEach((btn) => {
  btn.addEventListener("click", handleDelete);
});
