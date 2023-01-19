// (function(){
//     setTimeout(()=> console.log(9),10);
//     console.log(2);
//     setTimeout(()=> console.log(11),1);
//     console.log(4);
//     console.log(5);
//    })();

   (function(a){
    return (function(){
    console.log(a);
    a = 9;
    })()
   })(85);