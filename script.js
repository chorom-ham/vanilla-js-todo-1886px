var list = document.getElementById("list");

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

deleteButton.addEventListener("click", cross);
function cross(item) {
  var str = item.target.parentNode.firstChild.innerText;
  var result = str.strike();
  document.getElementById("li").innerHTML = result;
}

/*deleteButton.addEventListener("click", cross);
function cross(item) {
  var str = item.target.parentNode.firstChild.innerText;
  var result = str.strike();
  str = result;
}

document.getElementById("deleteButton").onclick = function cross() {
  var str = getElementById("li");
  var result = str.strike();
  document.getElement("li").innerText = result;
};*/
