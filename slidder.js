// FIRST OPTION : SLIDER WITH ONLY TWO CARD
let btnNext = document.querySelector('#slider-btn-next')
let btnPrev = document.querySelector('#slider-btn-prev')
const sections = document.querySelectorAll('#testimonials-content');





 btnNext.addEventListener('click', function() {
    for(i=0; i < sections.length; i++) {
        sections[i].classList.toggle('hidden');
        console.log(sections[i]);
    }
} )
btnPrev.addEventListener('click', function() {
    for(i=0; i < sections.length; i++) {
        sections[i].classList.toggle('hidden');
        console.log(sections[i]);
    }
} )
