
function passarCapa(capa){
    if(capa.classList.contains('virada')){
        capa.classList.remove('virada')
        gsap.to(capa, {rotationY:0, duration:2})
    }else{
        capa.classList.add('virada')
        gsap.to(capa, {rotationY:-180, duration:2})
    }
}

function passarUltimaCapa(capa){
    if(capa.classList.contains('virada')){
        capa.classList.remove('virada')
        gsap.to(capa, {rotationY:0, duration:2, translateZ:390})
    }else{
        capa.classList.add('virada')
        gsap.to(capa, {rotationY:-180, duration:2, translateZ:402})
    }
}

function passarFolha(folha){
    if(folha.classList.contains('virada')){

        let folhas = document.getElementsByClassName('folha').length;
        let folhasViradas = document.getElementsByClassName('folha virada').length;
        let folhasPraVirar = folhas - folhasViradas;

       
        gsap.to(document.getElementsByClassName('folha')[folhasPraVirar], {rotationY:0, duration:2, translateZ:395})
        document.getElementsByClassName('folha')[folhasPraVirar].classList.remove('virada')
    }else{
        folha.classList.add('virada')
        gsap.to(folha, {rotationY:-180, duration:2, translateZ:401})
    }
}

