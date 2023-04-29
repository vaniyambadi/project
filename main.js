const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-menu"); 
const greet = document.querySelector(".greetings");
const cont = document.querySelector(".Container");

hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
    greet.classList.toggle("active");
    cont.classList.toggle("active");
}
)
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",() =>{
    hamburger.classList.remove("active");
    navmenu.classList.remove("active");
    greet.classList.remove("active");
    cont.classList.remove("active");
}))

