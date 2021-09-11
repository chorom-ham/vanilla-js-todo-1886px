const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

let todoArr = [];
const TODOS_KEY = "todos";

// 시각 불러오기
function getClock(date) {
    const month = String(date.getMonth()).padStart(2, "0");
    const day = String(date.getDay()).padStart(2, "0");
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    return `${month}/${day}   ${hour}:${minute}`;
}

// 추가
function handleTodoSubmit(event) {
    event.preventDefault();
    const date = new Date();
    const newTodo = todoInput.value;
    todoInput.value = "";

    const newTodoObj = {
        text: newTodo,
        id: Date.now(), //랜덤ID
        time: getClock(date),
    }
    todoArr.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodoArr();
    console.log(getClock(date));
}

// 보이기
function paintTodo(newTodoObj) {
    const li = document.createElement("li");
    li.id = newTodoObj.id;

    const span = document.createElement("span");
    const time = document.createElement("span");
    const btn = document.createElement("button");
    span.innerText = newTodoObj.text;
    span.className = "elem";
    time.innerText = newTodoObj.time;
    time.className = "time";
    btn.innerText = "ⓧ";
    span.addEventListener("click", doneTodo);
    btn.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(time);
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