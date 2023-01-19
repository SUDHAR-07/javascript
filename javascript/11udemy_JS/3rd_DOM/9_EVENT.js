const eleList = document.querySelectorAll(".first");
for (let index = 0; index < eleList.length; index++) {
    console.log(eleList[index]);
    eleList[index].style.backgroundColor = "yellow";
    eleList[index].style.padding = "25px";
    // eleList[index].addEventListener("click",makeitRed);
// using anonyms function
    eleList[index].addEventListener("click",function(){
        eleList[index].classList.toggle("red");
    });
}

// function makeitRed(){
//     console.log(this);
//     let temp = this.classList.toggle("red");
//     console.log(temp);
// }


// const h1 = document.getElementById("myID");
// h1.addEventListener("click",function(){
//     console.log("click");
// });
// // console.log("00snby")
// console.log(h1);
// h1.addEventListener("click",myFun);

// function myFun() {
//     console.log("clicked");
// }

