document.getElementById('portfolioImage').addEventListener('click', function() {
    document.getElementById('popup1').style.display = 'flex';
});

document.getElementById('closePopupBtn').addEventListener('click', function() {
    document.getElementById('popup1').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('popup1')) {
        document.getElementById('popup1').style.display = 'none';
    }
});


document.getElementById('vino').addEventListener('click', function() {
    document.getElementById('popup2').style.display = 'flex';
});

document.getElementById('closePopupBtn').addEventListener('click', function() {
    document.getElementById('popup2').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('popup2')) {
        document.getElementById('popup2').style.display = 'none';
    }
});






window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopBtn").style.display = "block";
  } else {
    document.getElementById("scrollToTopBtn").style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}
