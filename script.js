var list = document.getElementById("list");

document.getElementById("submit").onclick = function makelist() {
  var li = document.createElement("li");
  li.innerText = document.getElementById("input").value;
  list.appendChild(li);

  var deleteButton = document.createElement("button");
  deleteButton.innerText = "X";
  deleteButton.id = "deleteButton";
  li.appendChild(deleteButton);
  deleteButton.addEventListener("click", function () {
    li.classList.toggle("done");
  });
};


