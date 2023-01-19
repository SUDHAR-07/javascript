/**
 * The function is called when the button is clicked, and it increments the value of the variable by 1.
 */
const btn = document.querySelectorAll('button');
console.log(btn);
let a,b,c;
a = b = c = 0;
btn[0].onclick= message1;
btn[1].onclick= message2;
btn[2].onclick= message3;

function message1(){
    a++
    message();
}
function message2(){
    b++
    message();
}
function message3(){
    c++
    message();
}
function message(){
    console.log(a + '' + b + '' + c);
}