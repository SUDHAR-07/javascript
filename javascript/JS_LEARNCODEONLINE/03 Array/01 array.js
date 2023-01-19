var countries = ["India" , "USA" , "Japan" , "Russia"];

var states = new Array("TamilNadu" , "Kerala", "Andhra","Mumbai");

console.log(states);

console.log(countries[0]);

console.log(states.length);

states[3] = "punjab";

var user = ["susan","susan@gamil.com", 3,34,true];

console.log(user);
user.pop();
console.log(user);
user.unshift("NEW");
console.log(user);
user.shift();
console.log(user);
user.push();
console.log(user);
console.log(user.indexOf("susan"));
console.log(user.indexOf("new"));

console.log(Array.from("susan"));

