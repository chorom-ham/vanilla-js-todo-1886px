var button = document.getElementById("button");
var input = document.getElementById("input");
var list = document.getElementById("list");
var count = 1;

function addItem() {
  var temp = document.createElement("li");
  temp.setAttribute("id", "li" + count); //각 item별 id 부여
  temp.innerHTML = input.value;
  temp.innerHTML +=
    "<button type='button' onclick='removeItem(" + count + ");'>삭제</button>"; //각 Item별 삭제 버튼 구현
  list.appendChild(temp);

  temp.addEventListener("click", toggle(count)); //item 클릭시 line-through

  count++;
}
function removeItem(count) {
  var itemToRemove = document.getElementById("li" + count);
  list.removeChild(itemToRemove);
}
function toggle(count) {
  var itemToLineThrough = document.getElementById("li" + count);

  if (itemToLineThrough.style.textDecoration !== "line-through") {
    itemToLineThrough.style.textDecoration = "line-through";
  } else {
    itemToLineThrough.style.textDecoration = "none";
  }
}
