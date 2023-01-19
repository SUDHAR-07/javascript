const h1 = document.querySelector('h1');
console.log(h1);
console.log(h1.style.backgroundColor="red");
h1.style.color = "yellow";
h1.style.display = "block";
h1.style.fontSize="40px";
h1.style.fontFamily="timesnewroman";
h1.style.border = "5px dotted purple";
h1.style.padding ="25px";



const eh11 = document.getElementsByClassName('first');
console.log(eh11[0]);
let eh1 = eh11[0];
eh1.style.backgroundColor="red";
eh1.style.color = "yellow";
eh1.style.display = "block";
eh1.style.fontSize="40px";
eh1.style.fontFamily="timesnewroman";
eh1.style.border = "5px dotted purple";
eh1.style.padding ="25px";

for (let index = 0; index < eh11.length; index++) {
    const element = eh11[index];
    console.log(element);
}