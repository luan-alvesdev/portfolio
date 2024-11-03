//Scroll
const btnScroll = document.querySelector('.btn-scroll')

btnScroll.addEventListener('click', ()=>{
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    })
})

// URL do Google Docs modificada para baixar como PDF
let cv = "https://docs.google.com/document/d/17Zhb6VYRw3Hv9nAmQYZMt3Y3iF18BWKq1xKuigYgBzE/export?format=pdf"

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
