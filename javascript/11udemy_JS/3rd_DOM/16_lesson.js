const li = document.querySelectorAll("li");
for(let x = 0; x < li.length;x++){
    console.log(li[x]);
    li[x].addEventListener("mouseover",function(e){
        // this.classList.add("red");
        this.style.color = "red";
        this.style.backgroundColor = "yellow";
    })
    li[x].addEventListener("mouseout",function(e){
        // this.classList.remove("red");
        this.style.color = "";
        this.style.backgroundColor = "";
    })
}

// mouse enter  mouseleave 