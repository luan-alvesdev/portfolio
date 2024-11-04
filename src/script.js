//Loader
document.addEventListener('DOMContentLoaded', () =>{
    const links = document.querySelectorAll('a.page-scroll');
    
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth' // Rolagem suave
                });
            }
        });
    });
    
})

// ---------------------- Animacao Menu ----------------------
// Função de destaque do menu ao rolar a página
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-fixed-top a');

    let currentSectionId = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 50; // Ajuste de margem se necessário
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSectionId = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
            link.classList.add('active');
        }
    });
});

// Fecha o menu responsivo ao clicar em um item do menu
const menuItems = document.querySelectorAll('.navbar-collapse-menu');
const navbarToggle = document.querySelector('.navbar-toggle');

menuItems.forEach(item => {
    item.addEventListener('click', function() {
        if (navbarToggle && window.getComputedStyle(navbarToggle).display !== 'none') {
            navbarToggle.click();
        }
    });
});


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

// ---------------------- FIM Animacao Menu ----------------------

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
