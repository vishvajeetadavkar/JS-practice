//select
var h1=document.querySelector('h1');

//text content
h1.textContent += "hello";

//innerHTML
h1.innerHTML += '<i> hi</i>';

//manipulating styles and classes
h1.style.color = 'red';
h1.style.backgroundColor = 'yellow';

//classList
h1.classList.add('makeitblue');
h1.classList.remove('makeitblue');

//creating and deleting elements
var h2= document.createElement('h2');
h2.classList.add('makeitblue');
h2.textContent = "h2";
document.querySelector("body").appendChild(h2);

//event handelling
var btn=document.querySelector('button');
btn.addEventListener('click', function(){
    btn.textContent = "starting...";
    btn.style.backgroundColor="greenyellow";
});

//event object
document.querySelector("body")
.addEventListener("mousemove", function(dets){
    console.log(dets);
})
