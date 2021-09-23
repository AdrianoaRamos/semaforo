const luzVermelha = document.getElementById ('vermelho')
const luzAmarela = document.getElementById ('amarelo')
const luzVerde = document.getElementById ('verde')
const semaforo = document.getElementById('semaf')


function vermelhoOn(){
    semaf.src = './img/vermelho.png'
}
function amareloOn(){
    semaf.src = './img/amarelo.png'
}
function verdeOn(){
    semaf.src = './img/verde.png'
}


luzVermelha.addEventListener('click', vermelhoOn)
luzAmarela.addEventListener('click', amareloOn)
luzVerde.addEventListener('click', verdeOn)
