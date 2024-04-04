window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var scrollPosition = window.scrollY;

    // Se a posição de rolagem for maior que 50px, adiciona a classe 'colored' à navbar, caso contrário, remove a classe 'colored'
    if (scrollPosition > 50) {
        navbar.classList.remove('opacity');
        navbar.classList.add('colored');
        
    } else {
        navbar.classList.remove('colored');
        navbar.classList.add('opacity');
    }
});

window.addEventListener('scroll', function() {
    var card = document.getElementById('card');
    var carddetails = document.getElementById('carddetails');
    var scrollPosition = window.scrollY;

    // Verifica se a posição de rolagem é maior que 0
    if (scrollPosition > 0) {
        card.style.transition = '0.7s';
        card.style.background = '#f5f5f500'; // Esconde o card
        carddetails.style.color = '#f5f5f500';
        card.style.border = '#f5f5f500';
        // $(this).removeClass('.card_hover:hover')
    } else {
        card.style.display = 'block'; // Mostra o card
        card.style.background = '#f5f5f5'; // Esconde o card
        carddetails.style.color = '#000';
        card.style.border = '#FF9A00';

    }
});

