const myStates = [
    "delhi", 
    "TamilNadu",
    "Rajastan",
    "lucknow",
    124,
];

//foreach 

myStates.forEach(t => console.log(t));

//forof

const names = ["youtube","amazon","facebook","Instagram","Netflix"]

for(const n of names){
    console.log(n);
}

const symbols = {
    yt : "Youtube",
    fb : "Facebook",
    ig : "Instagram",
    lco : "LearnCodeOnLine.in"
}

for(const n in symbols){
    // console.log(symbols[n]);
    console.log(`Key is : ${n} and Values is : ${symbols[n]}`);
}