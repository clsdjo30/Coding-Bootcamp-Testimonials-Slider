// FIRST OPTION : SLIDER WITH ONLY TWO CARD
let btnNext = document.querySelector('#slider-btn-next')
let btnPrev = document.querySelector('#slider-btn-prev')
let testyImages = document.querySelectorAll('#testimonials-images');
let testyContent =document.querySelectorAll('#testimonials-content')


btnNext.addEventListener('click', function() {
    for(i=0; i < testyImages.length; i++) {
        testyImages[i].classList.toggle('hidden');
    }
    for(i=0; i < testyContent.length; i++) {
        testyContent[i].classList.toggle('hidden');
    }
} )
btnPrev.addEventListener('click', function() {
    for(i=0; i < testyImages.length; i++) {
        testyImages[i].classList.toggle('hidden');
    }
    for(i=0; i < testyContent.length; i++) {
        testyContent[i].classList.toggle('hidden');
    }
} )
