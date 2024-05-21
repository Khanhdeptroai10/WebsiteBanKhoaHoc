var u = document.querySelector("#u");
var l = document.querySelector("#l");
var update = document.querySelector("#update");
var list = document.querySelector("#list");
u.addEventListener("click", function() {
    update.style.display = "block";
    u.style.color = "red";
    list.style.display = "none";
    l.style.color = "#4b5563";
});
l.addEventListener("click", function() {
    list.style.display = "block";
    l.style.color = "red";
    update.style.display = "none";
    u.style.color = "#4b5563";
});



var open = document.querySelector("#modal-open");
var show = document.querySelector("#modal-show");
var close = document.querySelector("#modal-close");
var cancel = document.querySelector("#cancel");
open.addEventListener("click", function() {
    show.style.display = "block";
});
close.addEventListener("click", function() {
    show.style.display = "none";
});
cancel.addEventListener("click", function() {
    show.style.display = "none";
});