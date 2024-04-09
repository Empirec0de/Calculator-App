let show = document.getElementById("result")

function appendToShow(input){
    show.value += input
}

function clearDisplay(){
    display.value = ""
}

function calculate(){
    try{
        display.value = eval(display.value)
    }
    catch{
        display.value = "error"
    }
}