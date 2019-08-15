function myFunctiOn(){
    document. getElementById('demo').innerHTML = 'My first Web Page';
}
function heading(){
    document.getElementById("head1").style.color="green";
    document.getElementById("head1").style.display="block"
}

function background(){
    document.getElementById("bodyBack").style.backgroundColor="yellow";
    document.getElementById("head1").style.display="none";
}
function textFormat(){
    document.getElementById("txt").style.fontSize = "50px";
    document.getElementById("txt").style.fontFamily = "cursive";
}
function alertex(){
    window.alert("Hello, it`s me - Alert!!!");
}
function consoleLog(){
    console.log("Hello, Console");
}
function varEX(){
    var carName = "Volvo";
    var carName, a=5, b=10;
    window.alert(Math.pow(a,b));
}