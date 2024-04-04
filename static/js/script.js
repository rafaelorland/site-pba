// SCRIPT PARA OS SLIDES
let slideIndex = 0;
carousel();

function carousel() {
let slides = document.getElementsByClassName("slide");
for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}

slideIndex++;
if (slideIndex > slides.length) {slideIndex = 1}
slides[slideIndex-1].style.display = "block";
setTimeout(carousel, 2800);
}


// PARA OS DADOS DO FORM IR EM LETRA MAIÚSCULAS
document.getElementById("meuFormulario").addEventListener("submit", function(event) {
var nomeInput = document.getElementById("nome");
nomeInput.value = nomeInput.value.toUpperCase();
});


// PARA O MENU RESPONSIVO
function clickMenu(){
    if(option.style.display == 'block'){
        option.style.display = 'none'
    }
    else{
        option.style.display = 'block'
    }
}