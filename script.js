const main = document.querySelector("main");
const form = document.querySelector("form");
const newList = form.querySelector("input");
const deleteBtns = main.querySelectorAll("span");

const handleDelete = (event) => {
  const list = event.target.parentElement;
  list.remove();
};

const addList = () => {
  const div = document.createElement("div");
  const input = document.createElement("input");
  const label = document.createElement("label");
  const remove = document.createElement("span");
  const value = newList.value;

  input.type = "checkbox";
  input.id = "todo";
  label.htmlFor = "todo";
  label.innerText = value;
  remove.innerText = "삭제";
  div.append(input);
  div.append(label);
  div.append(remove);
  main.append(div);
  newList.value = "";

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
