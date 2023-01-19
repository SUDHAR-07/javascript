let Bg = document.getElementById("Color");


function random(number){
    return Math.floor(Math.random() * (number + 1));
}

Bg.addEventListener("click",function(){
    console.log("color");
    let b = 'rgb('+ random(255) + ',' + random(255) + ','+ random(255) + ')';
    console.log("b");
    document.body.style.backgroundColor = b;
}); 
