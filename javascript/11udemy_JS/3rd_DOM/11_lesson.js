const mainList = document.querySelector('ul');
const clicker = document.getElementById('clicker');
const inPut = document.querySelector('input');
clicker.addEventListener('click',function(){
    if(inPut.value.length>3){
        let li = document.createElement("li");
        let tempNode = document.createTextNode(inPut.value);
        li.appendChild(tempNode);
        mainList.appendChild(li);
        inPut.value = "";
    }else{
        window.alert("The word length must be greater than 3")
    }
    // inPut.value = "";
});
