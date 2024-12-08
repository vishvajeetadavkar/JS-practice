// var a= 10;
// var b=20;
// prompt("hey");

// // use of this in different cases 

// //global -> window
// console.log(this);

// //function -> window
// function abc(){
//     console.log(this);
// }
// abc();

// // method -> obj
// var obj = {
//     name: function(){
//         console.log(this);
//     },
//     age: 24
// }
// obj.name();

// // method -> any func. inside an object

// //function inside method (es5) -> window
// var obj2 = {
//     name2: function(){
//         function child(){
//             console.log(this);
//         }
//         child();
//     }
// }
// obj2.name2();

// //function inside method (es6) -> obj.
// var obj3 = {
//     name3: function(){
//         child=() =>{
//             console.log(this);
//     }
//     child();
// }
// }
// obj3.name3();

// // constructor func. -> new blank obj.
// function add(){
//     console.log(this);
// }
// const ans= new add();

// // event listener - that element on which event listener is applied
// // document.querySelector("button")
// // .addEventListener("click", function(){
// //     console.log(this);
// // })

// prototypal inheritance
function makeHuman(name, age){
    this.name=name;
    this.age=age;
}
makeHuman.prototype.printName=function(){
    console.log(this.name);
}
const human1=new makeHuman("harsh",25);
const human2=new makeHuman("harshita",35);

//JS Closures
function abc(){
    var a=12;
    return function(){
        console.log(a);
    }
}
var ans=abc();
ans();

// event delegation
var parent=document.querySelector("#parent");
parent.addEventListener("click",function(details){
    if(details.target.id=="play"){
        console.log("play");
    }
    else if(details.target.id=="pause"){
        console.log("pause");
    }
});

//error handelling try catch
function divide(a,b){
    try{
        if(b===0){
            throw Error("Koi gadbad hui");
        }
        console.log(a/b);
    }
    catch(err){
        console.log(err);
    }
}
divide(12,0);

//Custom events
const evt= new Event("pqr");

document.querySelector("button")
.addEventListener("pqr", function(){
    alert("pqr event occured");
})
document.querySelector("button").dispatchEvent(evt);