var userRole = function (name, role){
    switch (role) {
        case "admin":
            return `${name} is admin with all access`
            // break;
        case "subadmin":
            return `${name} is sub-admin with access to create and delete course`
            // break;
        case "user":
            return `${name} is a user to consume content`
            // break;
        default:
            return `${name} is a trial user`
            break;
    }
}

var user = (name, role) =>{
     switch (role) {
        case "admin":
            return `${name} is admin with all access`
            // break;
        case "subadmin":
            return `${name} is sub-admin with access to create and delete course`
            // break;
        case "user":
            return `${name} is a user to consume content`
            // break;
        default:
            return `${name} is a trial user`
            break;
    }
}

console.log(userRole("susan","admin"));
console.log(user("s","user"));