const imgList = document.querySelectorAll("img");
// /console.log(imgList);


for (let index = 0; index < imgList.length; index++) {
    imgList[index].addEventListener("click",function(){
        console.log(this.src);
        window.open(this.src,"myImage","resizable=yes,width=500,height=500");
})
};


// 2nd type : OLDER VERSION does not support 
for (let index = 0; index < imgList.length; index++) {
    imgList[index].onclick =function(){
        window.open(this.src,"myImage","resizable=yes,width=500,height=500");
}
};