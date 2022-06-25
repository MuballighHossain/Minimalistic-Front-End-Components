// //Examine Documents
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // we can also set the title from here
// //document.title = 123;
// console.log(document.type);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// //document.all[10].textContent='Hello!';
// // don't do this because if we add new elements, that element will be effected
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);
// //Get Elements by ID
// console.log(document.getElementById('contact-info'));
// //we can also save this in a variable
// var contactInfo = documeent.getElementById('contact-info');
// console.log(contactInfo);
// // textContent innerText innerHTML
// // contactInfo.textContent='Hello'; // does not care about style
// // contactInfo.innerText='Goodbye'; // cares about Style
// //contactInfo.innerHTML='<h3> Hello </h3>';
// // Using Selectors to change the CSS Style property
// contactInfo.style.borderBottom='solid 3px #000';
// // Get Elements by class name
// var items = document.getElementsByClassName('row');
// console.log(items);
// console.log(items[1]);
// items[1].textContent='Hello';
// items[1].style.fontWeight='bold';
// items[1].style.backgroundColor='yellow';
// for(var i=0; i<items.length; i++){
//     items[i].style.backgroundColor='red';
// }
// // Get elements by tag name
// var li = document.getElementsByTagName('li');
// //Query Selector
// var header = document.querySelector('#main-header');
// header.style.borderBottom='solid 1px #000';
// var input = document.querySelector('input');
// input.value='Hello World';
// var submit = document.querySelector('input[type="submit"]');
// submit.value="Send";
// var item = document.querySelector('.list-group-item');
// items.style.color='red';
// var lastItems = document.querySelector('.list-group-item:last-child');
// lastItems.style.color ='blue';
// var nthItems = document.querySelector('.list-group-item:nth-child');
// nthItems.style.color='color';
// //Query selector all
// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent='Hello';
// var odd= document.querySelectorAll('li:nth-child(odd)');
// for (var i=0; i<odd.length;i++){
//     odd[i].style.backgroundColor='#f4f4f4';
// }
// var even= document.querySelector('li:nth-child(even');
// for (var i=0; i<even.length; i++){
//     even[i].style.backgroundColor='#ccc';
// }
// // Traversing the DOM 
// var itemList = document.querySelectorAll('#items');
// //parent node
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);
// // Parent Element
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='#f4f4f4';
// // Child Nodes
// console.log(itemList.childNodes);
// // children
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='yellow'; 
// // First Child
// console.log(itemList.firstChild);
// // First element Child 
// itemList.firstElementChild.textContent='Hello1';
// //Last Child
// console.log(itemList.lastChild);
// //Last element Child
// itemList.lastElementChild.textContent='Hello2';
// // next sibling
// console.log(itemList.nextSibling);
// //nextElementSibling
// console.log(itemList.nextElementSibling);
// // previous sibling
// console.log(itemList.previousSibling);
// //Previous Element Sibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='green';
// // create element
// // create a div
// var newDiv = document.createElement('div');
// // Add class to a new element
// newDiv.className='newDiv';
// // Add ID to a new element
// newDiv.id='newDivId';
// // Add Attribute
// newDiv.setAttribute('title', 'Hello Div');
// // Create Text node
// var newDivText = document.createTextNode('Hello World');
// // Add text to div
// newDiv.appendChild(newDivText);
// var container = document.querySelector('header.container');
// var h1=document.querySelector('header h1');
// container.insertBefore(newDiv,h1);
// var button = document.getElementById('button').addEventListener('click',function(){
//     console.log(123);
// })
// var button = document.getElementById('button').addEventListener('click',buttonClick);
// function buttonClick(){
//     document.getElementById('header-title').textContent='Changed';
//     document.querySelector('#main').style.backgroundColor='#f4f4f4';
// }
// function buttonClick(x){
//     console.log(x);
//     console.log(x.target);
//     console.log(x.target.id);
//     console.log(x.className);
//     console.log(x.classList);
//     console.log(x.type);
//     console.log(x.clientX);
//     console.log(x.clientY);
//     console.log(x.offsetX);
//     console.log(x.offsetY);
//     console.log(x.altKey);
//     console.log(x.ctrlKey);
//     console.log(x.shiftKey);
// }
// var button2 = document.getElementById('button');
// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick',runEvent);
// button.addEventListener('mousedown',runEvent);
// button.addEventListener('mouseup',runEvent);

// function runEvent(e){
//     console.log('Event TYPE : '+e.type);
// }
// var box = document.getElementById('box');
// box.addEventListener('mouseenter',runEvent);
// box.addEventListener('mouseleave',runEvent);
// box.addEventListener('mouseover',runEvent);
// box.addEventListener('mouseout',runEvent);
// box.addEventListener('mousemove',runEvent);
// function runEvent(e){
//     console.log('Event Type : '+e.type);
// }
// // Keyboard & Input Events
// // keydown
// // keyup
// // keypress
// // focus & blur
// //  cut
// //  paste
// //  input
// //  change
// //   submit
 








