 const temp = document.querySelector("h1");
 temp.innerText = "hello susa";
 temp.innerHTML = "hii <br> hello susaa";
 temp.textContent = "syaaaaaoraa";
 temp.innerText = "hisusan";
 console.log(temp);
 temp.id = "temp1";
 temp.setAttribute('class','red');
 let g =temp.getAttribute('class');
//  temp.remove();

// remove will remove all the changes "VISIBLE" but still in
// CONSOLE it holds the memory (temp in console still gives hi tag value)

const links  =document.querySelectorAll('a');
links.forEach(element => {
    console.log(element.getAttribute('href'));
    element.setAttribute('href','http://www.youtube.com'); 
});

const liItem = document.querySelectorAll('li');
liItem.forEach(function(element,ind){
    element.id = "ind" + ind;
    console.log(element);
    element.innerText = `element  ${ind}`;
    if(element.getAttribute('class')){ // to overcome this we have nxt leson
        console.log(element.getAttribute('class'));
    }
});