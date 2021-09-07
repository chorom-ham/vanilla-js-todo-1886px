var list = document.getElementById("list");

document.getElementById("input").onclick = function disappear() {
  document.getElementById("input").innerText = "";
};

document.getElementById("submit").onclick = function makelist() {
  var li = document.createElement("li");
  li.innerText = document.getElementById("input").value;
  list.appendChild(li);
  li.id = "li";

  var deleteButton = document.createElement("button");
  deleteButton.innerText = "x";
  deleteButton.id = "deleteButton";
  li.appendChild(deleteButton);
};

document.getElementById("deleteButton").onclick = function cross() {
  var str = getElementById("li");
  var result = str.strike();
  str.replace = result;
};
