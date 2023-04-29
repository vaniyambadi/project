const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-menu"); 
const head = document.querySelector(".head");
const body = document.querySelector(".Body");

hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
    head.classList.toggle("active");
    body.classList.toggle("active");
}
)
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",() =>{
    hamburger.classList.remove("active");
    navmenu.classList.remove("active");
    head.classList.remove("active");
    body.classList.re("active");

}))

const searchinput = document.getElementById('inpsearch');

const sclname = document.getElementsByClassName('scl');

searchinput.addEventListener("keyup",(event) =>{
    const {value} = event.target;

    const searchquery = value.toLowerCase();

    for(const nameElement of sclname){
        let name = nameElement.textContent.toLowerCase();

        if(name.includes(searchquery)){
            nameElement.style.display = 'block';        
        
        }else{
            nameElement.style.display = "none";
        }
    }

});

