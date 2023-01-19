let eleList = document.getElementsByClassName('first');
let tagList = document.getElementsByTagName('span');
let queryS = document.querySelectorAll('span');
console.log(eleList); 
console.log(tagList);
console.log(queryS);
for(let i = 0; i < queryS.length;i++){
    let el = queryS[i];
    console.log(el);
    queryS[i].textContent=(i+1) + 'update';
}

queryS.forEach(function(el,index){
    console.log(index);
    el.textContent = `${index} : updated`;
    el.style.backgroundColor = "red";
})
/* Updating the text content of all the elements in the queryS array. */

