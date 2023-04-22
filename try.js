function change(){
    let gett = document.getElementById("inp");
document.getElementById("details").innerHTML = gett.value;
}
function action(){
    var a = 4;
    var b = 6;
// return a*b;
document.getElementById("demo").innerHTML = a*b;
}
function gett(){
    var c = 4;
    var y = 4;
    // return c+y;
    document.getElementById("demo").innerHTML = c+y;
}
function final(){
    let r = gett();
    let j = action();
    if (r === 8){
        return r;
    }else if ( r === 5){
        return j;
    }
}