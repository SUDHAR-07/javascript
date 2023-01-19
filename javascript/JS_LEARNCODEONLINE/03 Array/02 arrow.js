function isEven(element){
    if (element % 2 === 0){
        return true;
    }
    return false;
};

function isOdd(element){
    return element % 2 === 1;
};

// abobe is equal to

var odd = (element) => {
    return element % 2 ===1;
};
// console.log(odd(7));
// console.log(isOdd(3));
// console.log(isEven(3));

var result  = [2,4,6,8].every(isEven);
console.log(result);

// above is equal to below using CALLBACK with ESP 8

var res = [2,43,6,8].every((e) => e % 2 === 0);
console.log(res);

// curly braces then use return other =wise above is better

