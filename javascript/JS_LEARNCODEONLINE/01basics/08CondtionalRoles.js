var user = "testprep";

switch (user) {
    case "admin":
        console.log("You get full access");
        break;
    case "subadmin":
        console.log("you have access to create/delete course");   
        break;
    case "testprep":
        console.log("get access to create / delete tests");  
        break;
    case "user":
        console.log("get access to consume content");      
        break;
    default:
        console.log("trial user");
        break;
}