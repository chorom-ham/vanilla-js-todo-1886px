var list = document.getElementById("list");

document.getElementById("submit").onclick = function makelist() {
  var li = document.createElement("li");
  li.innerText = document.getElementById("input").value;
  list.appendChild(li);

  var deleteButton = document.createElement("button");
  deleteButton.innerText = "X";
  deleteButton.id = "deleteButton";
  li.appendChild(deleteButton);
  strikeThrough(li);
};

function strikeThrough(item) {
  item.addEventListener("click", function () {
    item.classList.toggle("done");
  });
} //https://stackoverflow.com/questions/60929824/javascript-strikethrough
