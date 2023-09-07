function Delete() {
    document.getElementById("MyResult").value = ""
    
}
function calculate(NewValue){
    document.getElementById("MyResult").value += NewValue

}
function Answer(){
    var x = document.getElementById("MyResult").value;
    var y = eval(x);
    document.getElementById("MyResult").value = y;

}