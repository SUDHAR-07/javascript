const listItems = document.querySelectorAll('li');
// console.log(listItems);

listItems.forEach(element => {
    // console.log(element.className);
    element.textContent = element.className ? element.className : 'NO Class';
    element.classList.add('test');
    element.classList.toggle('first');
    element.classList.toggle('t');
    element.textContent = element.className ? element.className : 'NO Class';
    // toggle 
    // ADD - if does not have
    // REMOVE : if have
    element.classList.remove('test');
    element.classList.replace('t','susan');
    element.textContent = element.className ? element.className : 'NO Class';
    // console.log(element.className);
    console.log(element.classList.contains('first'));
    element.classList.add('test4');
    element.textContent = element.className ? element.className : 'NO Class';
});