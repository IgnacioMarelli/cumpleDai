document.addEventListener('DOMContentLoaded', ()=>{
  
var carousel = document.getElementById('myCarousel');
var audioElements = carousel.querySelectorAll('audio');
var slides = carousel.querySelectorAll('.carousel-inner .carousel-item');
let inicio = document.getElementById('audio1');


// Evento que se activa cuando se cambia la diapositiva
carousel.addEventListener('slide', function (event) {
  if (audioElements.length > 0) {
    audioElements.forEach((e)=>{
      e.pause();
      e.currentTime = 0;
    });
  }

  // Obtener la diapositiva activa
  var activeSlide = event.detail.target;
  var activeIndex = Array.from(slides).indexOf(activeSlide);

  // Agregar la clase "active" a la diapositiva activa y quitarla de las demás
  slides.forEach(function (slide, index) {
    if (index === activeIndex) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });

  // Obtener el audio correspondiente a la diapositiva activa
  var audio = activeSlide.querySelector('audio');
  // Reproducir el audio correspondiente
  if (audio) {
    audio.play();
  }
});

// Agregar eventos a los indicadores para cambiar de diapositiva
document.querySelectorAll('.carousel-control-prev, .carousel-control-next').forEach(function (control) {
  control.addEventListener('click', function () {
    var targetSlide = this.getAttribute('data-slide');
    var activeIndex = Array.from(slides).findIndex(function (slide) {
      return slide.classList.contains('active');
    });

    if (targetSlide === 'prev' && activeIndex > 0) {
      carousel.dispatchEvent(new CustomEvent('slide', { detail: { target: slides[activeIndex - 1] } }));
    } else if (targetSlide === 'next' && activeIndex < slides.length - 1) {
      carousel.dispatchEvent(new CustomEvent('slide', { detail: { target: slides[activeIndex + 1] } }));
    }
  });
});
setTimeout(() => {
  inicio.play()
}, 3000);

})