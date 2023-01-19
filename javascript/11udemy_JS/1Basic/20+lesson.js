let h = 1;
function susan(h){
    console.log(`${h} times run`);
}
function add(h){
    console.log(Number(h) + 10);
}
susan(h++);
susan(h++);
susan(h++);
add(h);
