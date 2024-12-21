var about= document.querySelector("#about");
var home= document.querySelector("#home");
var contact= document.querySelector("#contact");
var hometext= document.querySelector("#hometext");
var contacttext= document.querySelector("#contacttext");
var abouttext= document.querySelector("#abouttext");

hometext.style.display="block";
hometext.style.width="50%";

home.addEventListener("click",function() {
    textremove();
    hometext.style.display="block";
    hometext.style.width="50%";
});
about.addEventListener("click",function() {
    textremove();
    abouttext.style.display="block";
    abouttext.style.width="50%";
});
contact.addEventListener("click",function() {
    textremove();
    contacttext.style.display="block";
    contacttext.style.width="50%";
});

function textremove(){
    document.querySelectorAll("h3").forEach(function(h3){
        h3.style.display="none";
    })
}