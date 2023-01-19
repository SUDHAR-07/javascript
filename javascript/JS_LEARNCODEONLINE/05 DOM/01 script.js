// SetTimeout(function,milliseconds)


//setInterval(function,milliseconds)

// var counter = document.querySelector(".counter");
// var followers = document.querySelector(".followers");

let count = 1;

// setInterval(() => {
//     if(count < 1000){
//     count++;
//     counter.innerText = count;
//     }
// }, 1)

// setTimeout( () => {
//     followers.innerText = "Followers in INSTAGRAM !!!"
// }, 4500);

var counter = document.getElementsByClassName("counter");
var followers = document.getElementsByClassName("followers");

setInterval(() => {
    if(count < 1000){
    count++;
    counter[0].innerHTML = count;
    }
}, 10)

setTimeout( () => {
    followers[0].innerHTML = "Followers in INSTAGRAM !!!"
}, 10000);

// inn\\\