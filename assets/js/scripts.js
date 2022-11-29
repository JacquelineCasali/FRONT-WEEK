// seleção de elementos
// botão hambúrguer
// funcionalidade de abrir e fechar o menu
const menuBtn = document.querySelector ("#menu");
const closeMenuBtn = document.querySelector("#close-menu")
const menu = document.querySelector ("#mobile-navbar")

// seleção de elementos
// para selecionar mais de um elementos usa o querySelectorAll
 const desktopLinks = document.querySelectorAll("#navbar a")
const mobileLinks = document.querySelectorAll("#mobile-navbar a")
const allLinks = [...desktopLinks, ...mobileLinks]


// mover slides
// querySelectorAll seleciona mais de um
const slides = document.querySelectorAll(".banner");
const dots = document.querySelectorAll(".dot");
// controla o slide que esta sendo mostrado
let slideIndex = 0;

// Funções

function smoothScroll(e){
    e.preventDefault();

    // this pega o link individual 
const href =this.getAttribute("href");

// onde começa a seção 

const offsetTop =document.querySelector(href).offsetTop;
// leva para onde quer
scroll({
    top:offsetTop,
    behavior:"smooth",
})
// função de fechar o menu
setTimeout(()=>{
if(menu.classList.contains("menu-active")){
    menu.classList.remove("menu-active");
}
},500);
}

function showSlides() {
    console.log(slides);
// estrutura de repetição
// length numero de repetiçao 
    for (let i=0; i < slides.length; i++ ){
        // passa por todos os slides removendo a classe ativa 
        slides[i].classList.remove("active");
        dots[i].classList.remove("active");

    }
// mostrar o proximo banner 

slideIndex++
if(slideIndex > slides.length){
    slideIndex=1;
}

slides[slideIndex - 1].classList.add("active");
dots[slideIndex - 1].classList.add("active");
setTimeout(showSlides,3000);

}


// Eventos
// abrir e mostrar o menu
[menuBtn,closeMenuBtn].forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        menu.classList.toggle("menu-active")
    });
});


allLinks.forEach((link)=>{
    link.addEventListener("click",smoothScroll);
});

// inicialização 

showSlides();

