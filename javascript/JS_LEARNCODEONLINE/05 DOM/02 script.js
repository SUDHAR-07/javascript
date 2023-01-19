const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");
// const red = document.querySelector(".red");

const center = document.querySelector(".center");

console.log(window.getComputedStyle(red).backgroundColor);

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
};

console.log(orange);

var color = getBGColor(pink);

pink.addEventListener("mouseenter", () =>{
    center.style.background = color;
});

const magicColorCharger = (element,color) =>{
    return element.addEventListener("mouseenter", () => {
        center.style.background = color;
    });
};
// MouseEvent

magicColorCharger(red, getBGColor(red));
magicColorCharger(violet, getBGColor(violet));
magicColorCharger(cyan, getBGColor(cyan));
magicColorCharger(orange, getBGColor(orange));
magicColorCharger(pink, getBGColor(pink));
