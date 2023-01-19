var testarray = [2,4,6,12,4,56,56,222];
 
console.log(testarray.fill("susan", 2 , 5));

const myNumber = [3,55,676,774,22];

const result = myNumber.filter((num) => (num != 55));

console.log(result);

var users = ["ted","tim","ton","sam","sor","sod"];

// console.log(users.slice(1,3));
// // slice(start, end)

// console.log(users.slice(4));

// users.splice(1,4,"Hi");
// 1 la iruthu 4 remove pani onu 
users.splice(2,2,"hyy","bye");
// splice(start, count, replace)
console.log(users);