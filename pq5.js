var btn = document.querySelector("#Start");
var h3 = document.querySelector("h3");
var stop = document.querySelector("#Stop");
var int;
btn.addEventListener("click", function(){
    var count=0;
   int= setInterval(function(){
        h3.textContent = count;
        count++;
    }, 1000);
})
stop.addEventListener("click", function(){
    clearInterval(int);
});