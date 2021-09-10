function addToList(){
    var listContainer = document.getElementById('listSection');
    var newListElement = document.createElement("div");
    var inputBox= document.getElementById('addText');
    var inputBoxText = inputBox.value;

    newListElement.setAttribute("class", "listElement");
    newListElement.innerHTML="\
        <img src='./pinkCircleIcon.png'>\
        <button class='textButton' name='undone' type='button' value='' onclick='doneOrUndone(this);'></button>\
        <button class='removeButton' type='button' onclick='removeFromList(this);'></button>";
    newListElement.children[1].textContent= inputBoxText;
    listContainer.appendChild(newListElement);
    inputBox.value = '할 일을 입력하세요';
}

function removeFromList(ob){
    var parent = ob.parentElement;
    var listSection = document.getElementById('listSection');
    listSection.removeChild(parent);
}

function doneOrUndone(ob){
    var parent = ob.parentElement;

    if(ob.name == 'done'){
        ob.style.fontStyle="normal";
        ob.style.textDecoration="none";
        ob.name = 'undone';
        parent.style.backgroundColor="rgb(7,26,82)";
    }
    else{
        ob.style.fontStyle="italic";
        ob.style.textDecoration="line-through";
        ob.name = 'done';
        parent.style.backgroundColor="rgb(7,26,82, 0.5)";
    }
}
