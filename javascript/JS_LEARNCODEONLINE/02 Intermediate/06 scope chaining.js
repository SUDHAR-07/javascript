var name = "susan";

console.log("Line no 3",name);

function sayName(){
    var name = "Mr H";
    console.log("Line no 6",name);
    sayNameTwo();
    function sayNameTwo(){
        var name = "surprise"
        console.log("Line no 11", name);
    }
}

function Name(){
    // var name = "Mr H";
    console.log("Line no 16",name);
}

Name();

sayName();

// context mela vangikonga keela mudiyathu 

// bought from eleders not younger ones
