let show = document.getElementById("answer")

function appendToShow(input){
    show.value += input
}

function delShow(){
    show.value = show.value.slice(0,-1);
}

function clearShow(){
    show.value = ""
}

function calc(){
    try{
        show.value = eval(show.value)
    }
    catch {
        show.value = "SyntaxError"
    }
}
