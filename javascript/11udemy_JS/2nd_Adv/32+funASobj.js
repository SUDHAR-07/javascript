function car(miles,company,color){
    this.color = color;
    this.miles = miles;
    this.company = company;
}

const mycar = new car(100,"hero","blue");
console.log(mycar);
mycar.price = 200;
console.log(mycar);
const mycar1 = new car(700,"gixxer","red");
console.log(mycar1);