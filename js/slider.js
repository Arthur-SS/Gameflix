let tempo = 3000,
    imagemDoMomento = 0,
    imagens = document.querySelectorAll("#slider img")
    max= imagens.length;

function proximaImg(){

    imagens[imagemDoMomento].classList.remove("selected")

    imagemDoMomento++
    if (imagemDoMomento >= max)
        imagemDoMomento = 0
    
    imagens[imagemDoMomento].classList.add("selected")
}

function inicio(){

    setInterval(()=>{
        proximaImg()
    }, tempo)
}

window.addEventListener("load", inicio)