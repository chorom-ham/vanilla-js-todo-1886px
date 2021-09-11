var button = document.getElementById("add-button");
var input = document.getElementById("input-box");
var list = document.getElementById("list");
var count = 1;

function addItem() {
  var temp = document.createElement("li");
  temp.setAttribute("id", "li" + count); //각 item별 id 부여
  temp.innerHTML = input.value;
  temp.innerHTML +=
    "<button type='button' id='delete-button' onclick='removeItem(" +
    count +
    ");'>X</button>"; //각 Item별 삭제 버튼 구현
  list.appendChild(temp);

  temp.addEventListener("click", toggle); //item 클릭시 line-through

  count++;
}
function removeItem(count) {
  var itemToRemove = document.getElementById("li" + count);
  list.removeChild(itemToRemove);
}
function toggle(event) {
  const target = event.target;

  if (target.style.textDecoration !== "line-through") {
    target.style.textDecoration = "line-through";
  } else {
    target.style.textDecoration = "none";
  }
}
function enterKey() {
  if (window.event.keyCode == 13) {
    // 엔터키가 눌렸을 때 실행할 내용
    addItem();
  }
}
