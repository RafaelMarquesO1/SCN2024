$(document).ready(function() {
    // Quando o documento estiver pronto
    $('.fade-in').addClass('loaded'); // Adiciona a classe 'loaded' para iniciar o efeito fade-in
});

document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = document.querySelector('#carouselExample');
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 5000,
        wrap: true,
        pause: 'hover'
    });

    myCarousel.querySelector('.carousel-item').classList.add('active');
});

// Fazer a função de enviar o usuário ao GMAIL para poder ter a função 'Oração'.

function enviarEmail() {
    var email = document.getElementById('email').value;
    var destinatario = "emailcomunidade@uorak.com"; // Substituir pelo e-mail da igreja
    var assunto = "Pedido de Oração";
    var corpo = "Escreva sua oração aqui! ";
    
    var link = "https://mail.google.com/mail/?view=cm&fs=1&to=" + destinatario + "&su=" + assunto + "&body=" + corpo;
    window.open(link, "_blank");
}