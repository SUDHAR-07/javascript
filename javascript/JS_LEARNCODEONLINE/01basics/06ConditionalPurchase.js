var isLoggedIn = false;
var isEmailVerified = true;
var cardInfo = true;

// if(isLoggedIn){
//     console.loh("Logged in SUCCESS");
//     if (isEmailVerified){
//         console.log("Email is verified");
//     }
//     if(cardInfo){
//         console.log("you can make a purchase");
//     }
// }

if(isLoggedIn && isEmailVerified && cardInfo){
    console.log("Hi Allow user to make");
} else {
    console.log("you are not allowed");
}