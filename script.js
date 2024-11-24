var a= 10;
var b=20;
prompt("hey");

// use of this in different cases 

//global -> window
console.log(this);

//function -> window
function abc(){
    console.log(this);
}
abc();

// method -> obj
var obj = {
    name: function(){
        console.log(this);
    },
    age: 24
}
obj.name();

// method -> any func. inside an object

//function inside method (es5) -> window
var obj2 = {
    name2: function(){
        function child(){
            console.log(this);
        }
        child();
    }
}
obj2.name2();

//function inside method (es6) -> obj.
var obj3 = {
    name3: function(){
        child=() =>{
            console.log(this);
    }
    child();
}
}
obj3.name3();

// constructor func. -> new blank obj.
function add(){
    console.log(this);
}
const ans= new add();

// event listener - that element on which event listener is applied
document.querySelector("button")
.addEventListener("click", function(){
    console.log(this);
})