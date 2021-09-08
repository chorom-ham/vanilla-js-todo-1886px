var button = document.getElementById('button');
var input = document.getElementById('input');
var list = document.getElementById('list');

function addItem(){
  var temp = document.createElement('li');
  temp.innerHTML = input.value;
  list.appendChild(temp);
}