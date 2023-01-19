const myStates = [
    "delhi", 
    "TamilNadu",
    "Rajastan",
    "lucknow",
    124,
];

for (let i = 0; i < myStates.length; i++) {
    if(typeof myStates[i] !== 'string') continue;
    console.log(myStates[i]);
}


for (let i = 0; i < myStates.length; i++) {
    if(typeof myStates[i] !== 'string') break;
    console.log(myStates[i]);
}
let i = 0;
while(i < myStates.length){
    console.log(myStates[i]);
    i++;
}

let ii = 20
do{
    console.log(myStates[ii]);
    ii++;
} while(ii < 10);
