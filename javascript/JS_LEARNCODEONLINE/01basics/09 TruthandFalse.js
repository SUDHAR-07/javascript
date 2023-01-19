
// Falsy values
// undefined
// null
// 0
// ''
// NaN

var user = null;
var h = "null";
var g = "";
if(user || h){
    console.log("Condition is True");
}

var a = 2+ 2 + "2" + "2";
console.log(2 + 2);
console.log(2 + "2");
console.log("2" + 2);
console.log(typeof a);

var num = "2";

if(2 == num){
    console.log("double equal check only value ");
}

if(2 === num){
    console.log("triple check both datatype and value");
}

if(NaN == NaN){
    console.log("eyeyess");
}

