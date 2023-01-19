
function guess(){
    let aa = prompt("enter your guess");
    let a = Number(aa);
    const g = 7;
    if(a == g){
        console.log("congratualtions");
        window.alert("congratulations");
        return 0;
    }else{
        console.log(a >= g ? "Your guess is bigger than actual" : "your guess is smaller than actual");
        window.alert(a >= g ? "Your guess is bigger than actual" : "your guess is smaller than actual");
        guess();
    }
}

guess();

