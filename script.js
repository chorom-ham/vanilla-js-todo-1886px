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

  li.addEventListener("click", function () {
    li.classList.toggle("done");
  });
  
  deleteButton.addEventListener("click", function (){
    list.removeChild(li);
  });
};

