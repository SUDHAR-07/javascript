const div = document.createElement("div");
div.style.backgroundColor = "blue";
div.id = "new";
div.style.padding = "45px";
div.style.fontSize = "50px";
// div.textContent = "hello";
const textInside = document.createTextNode("susan rules");
div.appendChild(textInside);
document.body.appendChild(div);
console.log(div);


const h1 = document.querySelector("h1");
document.body.insertBefore(div,h1);

//chalenges

const susan = document.createElement('div');
susan.id = "test";
susan.textContent = "Trio";
// console.log(susan);
susan.style.backgroundColor = "gold";
susan.style.fontSize = "30px";
susan.style.textAlign = "center";
const temp = document.createTextNode(" Is a Unpredictable");
susan.appendChild(temp);
console.log(susan);
// susan.appendChild(textInside);

const myId = document.querySelector("#myID");
myId.appendChild(susan);

