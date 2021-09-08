var button = document.getElementById('button');
var input = document.getElementById('input');
var list = document.getElementById('list');
var cnt=1;

function addItem(){
  var temp = document.createElement('li');
  temp.setAttribute("id", "li"+cnt);
  temp.innerHTML = input.value;
  temp.innerHTML += "<button type='button' onclick='deleteItem("+cnt+")'>삭제</button>";
  list.appendChild(temp);
 
}
function deleteItem(){
  var li= documet.getElementById('li'+cnt);
  list.removeChild(li);
}