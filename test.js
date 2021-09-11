const checkInput = document.querySelector('#todo_input');
checkInput.addEventListener("keyup", function(event) {
    if (event.code == "Enter") {
        inputSumbitBtn.onclick();
    } else {
        inputValue = this.value;
    }
});