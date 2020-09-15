const input = document.getElementById("inputBox");
function calculate(getValue){
    input.value += getValue;
}

function getResult(){
    input.value = eval(input.value)
}

function resetAll(){
    input.value = null;
}
