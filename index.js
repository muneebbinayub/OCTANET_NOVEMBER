var burger = document.getElementById("burger");
var navigation = document.getElementById("navigation");

navigation.classList.toggle("dropdown");

burger.addEventListener("click",function(){
    navigation.classList.toggle("dropdown");
    document.body.style.overflow = 'hidden';
})

// var enquire = document.getElementById("enquire");
// var close = document.getElementById("close");

// enquire.style.display="none";

// setTimeout(() => {
//     enquire.style.display="flex";
// }, 2000);

// close.addEventListener("click",()=>{
//     enquire.style.display="none";
// })

