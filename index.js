let espada_audio = document.getElementById("espada_audio")
let anclas_sonidos = document.getElementsByClassName("flaming-link")

for(let i=0; i < anclas_sonidos.length; i++){
    anclas_sonidos[i].addEventListener('click', function(){
        espada_audio.play();
    });
}

var deamon_audio = document.getElementById("deamon_audio");
deamon_audio.addEventListener('ended', function() {
    deamon_audio.pause();
});
deamon_audio.play();
