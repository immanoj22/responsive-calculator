let display=document.getElementById("display");

function appendtodisplay(input){
    display.value+=input;
}

function Clear(){
    display.value="";
}

function repeatit(){
    display.value=display.value;
}
function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="Error"
    }
}
