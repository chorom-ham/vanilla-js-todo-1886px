const Input= document.getElementById("Input");
const addButton= document.getElementById("add-button");
const toDoList=document.getElementById("list");

function addToDo() {
    if(Input.value!=null){
        const li=document.createElement("li");
        const delBtn=document.createElement("button");
        const span =document.createElement("span");
        delBtn.className="del-btn";
        delBtn.textContent="x";
        span.textContent=Input.value;
        li.appendChild(span);
        li.appendChild(delBtn);
        toDoList.appendChild(li);
        delBtn.addEventListener("click", delToDo);
        span.addEventListener("click", toggle);
        Input.value=" ";
    }
}

function delToDo(event) {
    var remove = event.target.parentNode;
    var parentNode=remove.parentNode;
    parentNode.removeChild(remove);
}

function toggle(event){
    if (event.target.style.textDecoration !=="line-through"){
        event.target.style.textDecoration ="line-through";
    }else{
        event.target.style.textDecoration ="none";
    }
}
