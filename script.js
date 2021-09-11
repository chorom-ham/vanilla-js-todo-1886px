const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

let todoArr = [];
const TODOS_KEY = "todos";

// 추가
function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";

    const newTodoObj = {
        text: newTodo,
        id: Date.now() //랜덤ID
    }
    todoArr.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodoArr();
}

// 보이기
function paintTodo(newTodoObj) {
    const li = document.createElement("li");
    li.id = newTodoObj.id;

    const span = document.createElement("span");
    const btn = document.createElement("button");
    span.innerText = newTodoObj.text;
    btn.innerText = "ⓧ";
    span.addEventListener("click", doneTodo);
    btn.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(btn);    
    todoList.appendChild(li);
}


// 완료시 클릭하면 빗금 
function doneTodo(event){
    const li = event.target.parentElement; // span의 부모(li)
    li.classList.toggle("strikeout");
}

// 삭제
function deleteTodo(event) {
    const li = event.target.parentElement; // btn의 부모(li)
    li.remove();
    
    todoArr = todoArr.filter((todo) => todo.id != parseInt(li.id)); // 해당 todo 배열에서 삭제
    saveTodoArr();
}

// 로컬스토리지에 투두리스트 저장
function saveTodoArr() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todoArr)); // 값을 문자열로 반환
}

todoForm.addEventListener("submit", handleTodoSubmit);

// 새로고침 했을 때 로컬스토리지에 저장된 요소가 보이도록
const saved = localStorage.getItem(TODOS_KEY);
if (saved) {
    const parsed = JSON.parse(saved); // 배열 -> 텍스트
    todoArr = parsed;
    parsed.forEach(paintTodo); // 배열의 각 요소를 모두 보이기
}