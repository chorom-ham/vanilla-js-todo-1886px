const todoLists = document.getElementById("todoLists"); // todo 목록이 담긴 div
const form = document.querySelector("form");
const input = form.querySelector("input");

let todoItems = []; // todo가 담길 배열
const TODOS_LS = "toDos"; // localStorage item 이름

// 배열 todoItems에서 list와 동일한 id 가진 item 반환
const findItem = (event) => {
  const list = event.target.parentElement; // 클릭한 list
  const listId = Number(list.dataset.id); // list의 id 숫자로 변환
  const item = todoItems.find((item) => item.id === listId); // 배열에서 list와 id 동일한 obj 찾기
  return item;
};

// 체크 박스 클릭 handler
const handleBoxClick = (event) => {
  let item = findItem(event);
  const checkbox = event.target;
  const todo = checkbox.nextElementSibling;

  if (checkbox.checked) {
    todo.classList.add("checked"); // checked 클래스 추가하여 todo style 변화
  } else {
    todo.classList.remove("checked"); // checked 클래스 제거하여 todo style 삭제
  }
  item.checked = checkbox.checked ? true : false; // obj의 checked 값 변경
  saveTodos();
};

// todo 클릭 handler
const handleTodoClick = (event) => {
  let item = findItem(event);
  const todo = event.target;
  const checkbox = todo.previousElementSibling;

  if (!checkbox.checked) {
    todo.classList.add("checked"); // checked 클래스 추가하여 todo style 변화
  } else {
    todo.classList.remove("checked"); // checked 클래스 제거하여 todo style 삭제
  }
  checkbox.checked = checkbox.checked ? false : true; // 체크 박스 상태 변화
  item.checked = checkbox.checked ? true : false; // obj의 checked 값 변경
  saveTodos();
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
  //saveTodos();
  const text = input.value;
  if (text) {
    addTodo(text);
    const todo = todoItems.find((item) => item.text === text); // 배열에서 submit 된 obj 찾기
    paintTodo(todo);
  }
};

// 랜덤 id 부여 함수
const getRandomId = () => {
  let exists = true; // 중복 체크 변수
  let id = null;
  // 기존 todo id와 중복되면 id 다시 생성
  while (exists) {
    id = Math.floor(Math.random() * 100);
    exists = todoItems.some((item) => {
      item.id === id;
    });
  }
  return id;
};

// 새로운 todo를 배열에 추가
const addTodo = (text) => {
  // 넘겨 받은 text로 todo object 생성
  const todoObj = {
    id: getRandomId(),
    text: text,
    checked: false,
  };
  todoItems.push(todoObj);
  saveTodos();
};

// 넘겨 받은 text로 todo 만들어서 화면에 표시
const paintTodo = (todo) => {
  const div = document.createElement("div");
  const checkbox = document.createElement("input");
  const span = document.createElement("span");
  const remove = document.createElement("span");
  checkbox.type = "checkbox";
  checkbox.className = "input__checkbox";
  span.innerText = todo.text;
  span.className = "todo__text";
  // todo가 체크되어 있는지 확인하고 표시
  if (todo.checked) {
    checkbox.checked = true;
    span.classList.add("checked");
  }
  remove.innerText = "삭제";
  remove.className = "delete-btn";
  div.className = "todo-list";
  div.dataset.id = todo.id;
  div.append(checkbox);
  div.append(span);
  div.append(remove);
  todoLists.prepend(div); // 목록 맨 앞에 추가
  input.value = ""; // 입력한 값 지우기

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
    parsedTodos.forEach((todo) => {
      todoItems.push(todo); // 배열에 todo 저장
      paintTodo(todo); // 각 object에 저장된 todo를 화면에 표시
    });
  }
};

loadTodos();

form.addEventListener("submit", handleSubmit);
