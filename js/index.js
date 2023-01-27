const body = document.querySelector('body')
const aviso = document.querySelector('#aviso')

body.addEventListener('click', () => {
    aviso.style.display= 'block';
    aviso.style.animation = "aviso 2s"
    setTimeout(()=>{
        aviso.style.display= 'none';
    },2000)
})