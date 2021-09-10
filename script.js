const todoButton = document.getElementById("todo_button");
const todoInput = document.getElementById("todo_input");
const todoList = document.getElementById("todo_list");
//const deleteButton = document.getElementById("delete_button");
var cnt = 1;

todoButton.addEventListener("click", clickButton);

function clickButton() {
  const newTodo = document.createElement("li");
  newTodo.setAttribute("id", "li" + cnt);
  newTodo.innerHTML = todoInput.value;
  newTodo.innerHTML +=
    "<button style='float: right:' class='todo_button' type='button' onclick='remove(" +
    cnt +
    ")'> X </button>";
  todoList.appendChild(newTodo);
  cnt++;
  todoInput.value = "";
  newTodo.addEventListener("click", function () {
    newTodo.style.textDecoration = "line-through";
  });
}
function remove(cnt) {
  var li = document.getElementById("li" + cnt);
  todoList.removeChild(li);
}

//deleteButton.addEventListener("click", removeFromList(this));
