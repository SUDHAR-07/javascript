const ul = document.querySelector("ul");
document.addEventListener("keydown",function(e){
    let li = document.createElement("li");
    let temp = e.key + "(" + e.keyCode + ")";
    let textc = document.createTextNode(temp);
    li.appendChild(textc);
    ul.appendChild(li);
})