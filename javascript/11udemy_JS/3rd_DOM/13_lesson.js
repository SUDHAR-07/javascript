const btn = document.querySelector("#Color");
btn.addEventListener("click",function(event){
    console.dir(event);
    console.log(event.target);
    console.log(this);
});


const divs = document.querySelectorAll('span');

divs.forEach(function(el,index){
    console.log(el);
    el.style.padding = "35px";
    el.style.border = "1px solid black";
    el.style.display = "block";
    el.addEventListener("click",function(e){
        console.log(e.target);
        console.log(el);
        console.log(this);
        e.target.style.backgroundColor = ranColor();
    })
})

function ranColor(){
    return "rgb("+ random(255) + ","+ random(255) + "," + random(255)+")";
}

function random(number){
    return Math.floor(Math.random() * (number + 1));
}
