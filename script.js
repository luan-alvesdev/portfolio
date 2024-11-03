//Loader
document.addEventListener('DOMContentLoaded', () =>{
    const tl = gsap.timeline()

    // tl.fromTo('.loader', 1,
    // { width: '100%'},
    // {width: '0%', 
    // delay:3.5,
    // ease: Expo.easeInOut})

    .fromTo('.navbar', 1,
    {y: 50, opacity:0},
    {y: 0, opacity: 1,ease: Expo.ease}, '-=0.5')

    .fromTo('.info-title', 1.5,
    {x: -50, opacity:0},
    {x: 0, opacity: 1,ease: Expo.ease}, '-=0.5')

    .fromTo('.about-logo', 1.5,
    {x: 50, opacity:0},
    {x: 0, opacity: 1,ease: Expo.ease}, '-=1.5')

    .fromTo('.info-p', 1.5,
    {x: 100, opacity:0},
    {x: 0, opacity: 1,ease: Expo.ease}, '-=0.5')

    .fromTo('.project-text', 1.5,
    {x: 50, opacity:0},
    {x: 0, opacity: 1,ease: Expo.ease}, '-=01')

    .fromTo('.slidebar', 1.5,
    {display:"none"},
    {display:"flex", ease: Expo.ease}, '-=1.5')

    .fromTo('.projects', 1.5,
    {display:"none"},
    {display:"flex", ease: Expo.ease}, '-=1.5')

    .fromTo('.contact', 1.5,
    {display:"none"},
    {display:"block", ease: Expo.ease}, '-=1.5')

    .fromTo('footer', 1.5,
    {display:"none"},
    {display:"block", ease: Expo.ease}, '-=1.5')
    
})

//Scroll
const btnScroll = document.querySelector('.btn-scroll')

btnScroll.addEventListener('click', ()=>{
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    })
})

//Mobile Menu
const mobileMenu = document.querySelector(".js-mobile-menu")
const btnMobile = document.querySelector(".js-btn-sidebar")
let cv = "https://docs.google.com/document/d/17Zhb6VYRw3Hv9nAmQYZMt3Y3iF18BWKq1xKuigYgBzE/export?format=pdf"
// URL do Google Docs modificada para baixar como PDF


btnMobile.addEventListener("click", (event) =>{
    event.preventDefault()

    mobileMenu.classList.toggle("show")
})

function mudarIdioma(idioma) {
    initInternacionalizacao(idioma);
    atualizarTraducao();
    console.log(idioma)
    switch (idioma) {
        case 'ENG':
            cv = "https://docs.google.com/document/d/1F-_hs4e0vyYLqBuzuEe747FBt7JaQJLlasSYU6MRZHw/export?format=pdf"
            break;
        case 'ESP':
            cv = "https://docs.google.com/document/d/1ZrJ9v3K1j0i8Q1k3Z7aZl6vZ2FVZDqP6M9h8yfL1Y2Q/export?format=pdf"
            break;
        default:
            cv = "https://docs.google.com/document/d/17Zhb6VYRw3Hv9nAmQYZMt3Y3iF18BWKq1xKuigYgBzE/export?format=pdf"
            
    }
  }

// Função para fazer o download do arquivo
function downloadFile() {
    fetch(cv)
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Luan Alves CV.pdf';
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        })
        .catch(error => console.error('Erro ao baixar o arquivo:', error));
}
