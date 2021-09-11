window.onload = () => {
    //이벤트를 적용할 엘리먼트 선택
    const checkInput = document.querySelector('#todo-input');
    const inputSumbitBtn = document.querySelector('#submit-button');
    const todos = document.querySelector('#todos');
    const removeCheckedBtn = document.querySelector("#removeAllChecked");
    const removeAll = document.querySelector("#removeAll");
    // todo관련 데이터 저장 변수 설정
    let inputValue;
    let todoListData = [];
    // let todo = [];

    // 이벤트 바인딩

    // 인풋값 받아오기
    checkInput.addEventListener("keyup", function(event) {
        if (event.code == "Enter") {
            inputSumbitBtn.onclick();
        } else {
            inputValue = this.value;
        }
    });

    //인풋값 데이터에 등록하기
    inputSumbitBtn.onclick = function() {
        if (inputValue == undefined || inputValue == "") {
            alert("데이터를 입력해 주세요!");
        } else {
            todoListData.push(inputValue);
            checkInput.value = "";
            inputValue = undefined;
            makeList(todos, todoListData);
            let todo = document.querySelectorAll('.todo');
            todoClickEvent(todo, todoListData);
        }
    }
    removeCheckedBtn.addEventListener("click", function() {
        console.log(todoListData)
        let allTodos = document.querySelectorAll(".todo");
        for (let i = 0; i < todoListData.length; i++) {
            if (allTodos[i].classList.value.indexOf("checked") > -1) {

                allTodos[i].remove();
            }
        }

        todoListData = [];
        const aliveTodos = document.querySelectorAll(".todo");

        for (let setData of aliveTodos) {

            todoListData.push(setData.childNodes[3].innerHTML);
        }
    });

    removeAll.onclick = function() {
        let allTodos = document.querySelectorAll(".todo");
        for (let i = 0; i < todoListData.length; i++) {
            allTodos[i].remove();
        }
        todoListData = [];
    }

};

//todo 리스트 템플릿을 생성하는 함수
function makeList(target, data) {
    let targetChild = document.querySelectorAll('.todo');
    for (let child of targetChild) {
        target.removeChild(child);
    }
    for (let i = 0; i < data.length; i++) {
        let template = `<li class="todo list-group-item col-xs-12">
        <input type="checkbox" class="checkbox-inline" style="margin:0;">
        <b>${data[i]}</b>
        <span class="delete glyphicon glyphicon-trash" style="cursor:pointer;">Delete</span>
        <span class="edit glyphicon glyphicon-pencil" style="cursor:pointer;">Edit</span>
        </li>`;
        target.innerHTML += template;
    }
}

//check박스를 클릭 할때 마다 스타일 변화 및 삭제기능 추가
function todoClickEvent(target, data) {
    //this 지정

    for (let i = 0; i < target.length; i++) {
        // console.log(target[i].childNodes)
        //스타일 변화
        target[i].childNodes[1].addEventListener('click', function() {
            if (this.parentNode.classList.value.indexOf("checked") >= 0) {
                this.parentNode.classList.remove("checked");
                this.parentNode.style.color = "#000";
                this.parentNode.style.textDecoration="line-through";
            } else {
                this.parentNode.classList.add("checked");
                this.parentNode.style.textDecoration="line-through";
            }
        });
        //삭제
        target[i].childNodes[5].addEventListener('click', function() {
            if (this.parentNode.classList.value.indexOf("checked") >= 0) {
                this.parentNode.remove();
                data.splice(i, 1);
                target = document.querySelectorAll('.todo');
            }
        });
        // 수정
        target[i].childNodes[7].addEventListener('click', function() {
            var prompt = window.prompt("수정할 내용을 입력해주세요");
            if (prompt.length > 0) {
                this.parentNode.childNodes[3].innerHTML = prompt;
                data[i] = prompt;
            }
        });
    }
};
