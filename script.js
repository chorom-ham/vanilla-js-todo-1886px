var button = document.getElementById('button');
var input = document.getElementById('input');
var list = document.getElementById('list');
var count = 1;

function addItem(){
  var temp = document.createElement('li');
  temp.setAttribute("id","li"+count);
  temp.innerHTML = input.value;
  temp.innerHTML += "<button type='button' onclick='removeItem("+count+");'>삭제</button>";
  list.appendChild(temp);
  count++;
}
function removeItem(count){
  var itemToRemove= document.getElementById('li'+count);
  list.removeChild(itemToRemove);
}