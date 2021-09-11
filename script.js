const input = document.getElementById('input');
let checkBox = document.querySelector('.checkbox');
let addButton = document.getElementById('add');
let planList = document.getElementById('list');

function addTodo(){
    if (input.value !== ''){
        let list = document.createElement("li");

        let deleteButton = document.createElement("button");
        deleteButton.innerText = "X";
        deleteButton.className = "delete_button";

        let span = document.createElement("span");
        span.innerText = input.value;
        list.appendChild(span);
        list.appendChild(deleteButton);
        planList.appendChild(list);

        deleteButton.addEventListener('click', deleteTodo);
        span.addEventListener('click', toggleTodo);

        input.value = '';
    }
}

function toggleTodo(event){
    let target = event.target;
    if(target.style.textDecoration !== "line-through"){
        target.style.textDecoration = "line-through";
    }
    else
    target.style.textDecoration = "none";
}

function deleteTodo(event){
    let target = event.target;
    let deleteli = target.parentNode;
    planList.removeChild(deleteli);
}

function pressEnter(){
    if(window.event.keyCode == 13){
        addTodo();
    }
}

checkBox.addEventListener('submit', (event) => {
    event.preventDefault();
    addTodo();
});
