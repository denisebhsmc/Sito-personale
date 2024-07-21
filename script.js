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

document.getElementById('closePopupBtn2').addEventListener('click', function() {
    document.getElementById('popup2').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('popup2')) {
        document.getElementById('popup2').style.display = 'none';
    }
});


let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function moveSlide(n) {
    showSlide(currentSlide + n);
}

showSlide(currentSlide);





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

