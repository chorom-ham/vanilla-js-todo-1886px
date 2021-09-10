const todoButton = document.getElementById("todo_button");
const todoInput = document.getElementById("todo_input");
const todoList = document.getElementById("todo_list");
const deleteButton = document.getElementById("delete_button");

todoButton.addEventListener("click", function () {
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  todoList.appendChild(newTodo);
  todoInput.value = "";
  newTodo.addEventListener("click", function () {
    newTodo.style.textDecoration = "line-through";
  });
});

deleteButton.addEventListener("click", function () {
  todoList.removeChild(list);
});
