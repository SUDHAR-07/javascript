var google = true;
var facebook = false;
var email = false;

if(google || facebook || email){
    console.log("Allow");
} else {
    console.log("Not allow"); 
}

var authenticated = true;
authenticated ? console.log("Signout Button") : console.log("LOGIN");
