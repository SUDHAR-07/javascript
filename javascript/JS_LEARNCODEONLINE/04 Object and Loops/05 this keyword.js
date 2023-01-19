// for all function calls this points to WINDOW 

console.log(this); // {}

var user = {
    firstName : "Susan",
    courseCount : 4,
    getCourseCount : function(){
        console.log("line 7", this);
        function sayHello(){
            console.log("hello");
            console.log("Line 10", this);
            // WINDOW Obj 
        }
        sayHello(); // dot ilanaa THIS la window
    },
};

//dot irutha THIS la that one which object all member of obj
user.getCourseCount(); // through a OBJECT

