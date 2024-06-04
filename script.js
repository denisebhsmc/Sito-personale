document.getElementById('openPopupBtn').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'flex';
});

document.getElementById('closePopupBtn').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('popup')) {
        document.getElementById('popup').style.display = 'none';
    }
});
// Mostra il pulsante quando l'utente scorre verso il basso di 20 pixel dalla parte superiore della pagina
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopBtn").style.display = "block";
  } else {
    document.getElementById("scrollToTopBtn").style.display = "none";
  }
}

// Quando l'utente clicca sul pulsante, scorrere verso l'alto della pagina
function topFunction() {
  document.body.scrollTop = 0; // Per Safari
  document.documentElement.scrollTop = 0; // Per Chrome, Firefox, IE e Opera
}
