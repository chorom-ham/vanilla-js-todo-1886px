const todoLists = document.getElementById("todoLists"); // todo 목록이 담긴 div
const form = document.querySelector("form");
const input = form.querySelector("input");
const deleteBtns = document.querySelectorAll(".delete-btn");

let todoItems = []; // todo가 담길 배열
const TODOS_LS = "toDos"; // localStorage item 이름

// 체크 박스 클릭 handler
const handleBoxClick = (event) => {
  const checkbox = event.target;
  const todo = checkbox.nextElementSibling;
  if (checkbox.checked) {
    todo.classList.add("checked"); // checked 클래스 추가하여 todo style 변화
  } else {
    todo.classList.remove("checked"); // checked 클래스 제거하여 todo style 삭제
  }
};

// todo 클릭 handler
const handleTodoClick = (event) => {
  const todo = event.target;
  const checkbox = todo.previousElementSibling;
  if (!checkbox.checked) {
    todo.classList.add("checked"); // checked 클래스 추가하여 todo style 변화
  } else {
    todo.classList.remove("checked"); // checked 클래스 제거하여 todo style 삭제
  }
  checkbox.checked = checkbox.checked ? false : true; // 체크 박스 상태 변화
};

// todo 삭제 handler
const handleDelete = (event) => {
  const list = event.target.parentElement; // 클릭한 list
  const listId = Number(list.dataset.id); // 문자에서 숫자로 변환
  list.remove(); // 화면에서 todo 삭제
  todoItems = todoItems.filter((item) => item.id !== listId); // 배열에서 listId와 동일한 id를 가진 item 제거
  saveTodos();
};

// localStorage에 itemLists 배열 저장
const saveTodos = () => {
  localStorage.setItem(TODOS_LS, JSON.stringify(todoItems)); // object를 JSON 파일로 저장
};

const handleSubmit = (event) => {
  event.preventDefault();
  saveTodos();
  if (input.value) {
    paintTodo(input.value); // form으로 넘어온 todo 화면에 표시
  }
};

// 랜덤 id 부여 함수
const getRandomId = () => {
  let exists = true; // 기존 todo id와 중복되는지 체크
  let id = null;
  while (exists) {
    id = Math.floor(Math.random() * 100);
    exists = todoItems.some((item) => {
      item.id === id;
    });
  }
  return id;
};

const paintTodo = (text) => {
  // 넘겨 받은 text로 todo object 생성
  const todoObj = {
    id: getRandomId(),
    text: text,
  };
  todoItems.push(todoObj);
  saveTodos(); // 추가된 배열을 localStorage에 새로 저장

  // 넘겨 받은 text로 todo 만들어서 화면에 표시
  const div = document.createElement("div");
  const checkbox = document.createElement("input");
  const span = document.createElement("span");
  const remove = document.createElement("span");
  checkbox.type = "checkbox";
  checkbox.className = "input__checkbox";
  span.innerText = text;
  span.className = "todo__text";
  remove.innerText = "삭제";
  remove.className = "delete-btn";
  div.className = "todo-list";
  div.dataset.id = todoObj.id;
  div.append(checkbox);
  div.append(span);
  div.append(remove);
  todoLists.prepend(div);
  input.value = "";
  // 이벤트 추가
  remove.addEventListener("click", handleDelete);
  span.addEventListener("click", handleTodoClick);
  checkbox.addEventListener("click", handleBoxClick);
};

// localStorage에 저장된 todo 가져와서 화면에 표시하기
const loadTodos = () => {
  const loadedTodos = localStorage.getItem(TODOS_LS);
  if (loadedTodos) {
    const parsedTodos = JSON.parse(loadedTodos); // JSON을 object로 가져오기
    // 각 object에 저장된 todo를 화면에 표시
    parsedTodos.forEach((todo) => {
      paintTodo(todo.text);
    });
  }
};

loadTodos();

form.addEventListener("submit", handleSubmit);
