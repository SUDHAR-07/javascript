var user = {
    firstName : "Susan",
    lastName : "Sudharsan",
    role : "Admin",
    loginCount : 32,
    facebookSignedIn : true,
    courseList : [],
    buyCourse : function (courseName) {
        this.courseList.push(courseName);    
    },
    getCourseCount : function (){
        return `${this.firstName} id enrollled in total of ${this.courseList.length}`
    },
    info : function(){
        return console.table(user);
    }
}

// console.log(user.getCourseCount());
// user.buyCourse("React JS course");
// user.buyCourse("Augular JS course");
// console.log(user.getCourseCount());
console.log(user.info());