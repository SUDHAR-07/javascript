const el = document.querySelector('div.first');
console.log(el);
console.log(el.children);
console.log(el.childNodes);

// CHILDREN : only for loop

for(let i = 0; i < el.children.length;i++){
    console.log(el.children[i].textContent);
    console.log(el.children[i]);
}
// CHILD NODES : work with both Normal and foreach

for(let i = 0; i < el.childNodes.length;i++){
    console.log(el.childNodes[i].textContent);
    console.log(el.childNodes[i]);
}

el.childNodes.forEach(function(ele,ind) {
        console.log(ele);
});

console.log(el.parentElement);
console.log(el.parentNode);
console.log(el.nextElementSibling);
console.log(el.nextSibling);
console.log(el.previousElementSibling);
console.log(el.previousSibling);