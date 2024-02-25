//   humburger menu js 


document.getElementById('menu-link').addEventListener('click', function() {
  document.getElementById('nav-links').style.display = (document.getElementById('nav-links').style.display === 'flex') ? 'none' : 'flex';
  
});

// registartion butto
document.getElementById('event-button').addEventListener('click', function() {
  document.getElementById('event-container').scrollIntoView({ behavior: 'smooth' });

});

document.getElementById('reg-button').addEventListener('click', function() {
  window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdXIOHr4lXMrTic7gNB6oN8r144Y5gEy7kLAyaDoMJglS216A/viewform?usp=sf_link'; 
});


// Slide cards automatically
document.addEventListener('DOMContentLoaded', () => {
  
  //------ Slider Begin
    const CaroS = document.querySelector('.Carousel-slider');
    const CaroSlider = new MicroSlider(CaroS, { indicators: true, indicatorText: '' });
    const hammer = new Hammer(CaroS);
    const CaroSTimer = 2000;
    let CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
    
  //------- Mouseenter Event
    CaroS.onmouseenter = function(e) {
        clearInterval(CaroAutoplay); 
        console.log(e.type + ' mouse detected');
    }
  
  //----- Mouseleave Event
    CaroS.onmouseleave = function(e) {
        clearInterval(CaroAutoplay); 
        CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
        console.log(e.type + ' mouse detected');
    }
  
  //----- Mouseclick Event
    CaroS.onclick = function(e) {
        clearInterval(CaroAutoplay); 
        console.log(e.type + ' mouse detected');
    }
  
  //------ Gesture Tap Event
    hammer.on('tap', function(e) {
        clearInterval(CaroAutoplay);
        console.log(e.type + ' gesture detected');
    });
  
  //----- Gesture Swipe Event
    hammer.on('swipe', function(e) {
        clearInterval(CaroAutoplay); 
        CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
        console.log(e.type + ' gesture detected');
    });

  let slideLink = document.querySelectorAll('.slider-item');
  if (slideLink && slideLink !== null && slideLink.length > 0){
    slideLink.forEach( el => el.addEventListener('click', e => {
      e.preventDefault();
      let href = el.dataset.href;
      let target = el.dataset.target;
      if (href !== '#') window.open(href, target);
    }));
  }
  
  //---- Slider End
  
});

//added from here
document.getElementById('readMoreButton1').addEventListener('click', function() {
  document.getElementById('overlay1').style.display = 'block';
  openPopout();
});

document.getElementById('CloseButton1').addEventListener('click', function() {
  document.getElementById('overlay1').style.display = 'none';
  closePopout();
  
});
document.getElementById('readMoreButton2').addEventListener('click', function() {
  document.getElementById('overlay2').style.display = 'block';
  openPopout();
});

document.getElementById('CloseButton2').addEventListener('click', function() {
  document.getElementById('overlay2').style.display = 'none';
  closePopout();
});

document.getElementById('readMoreButton3').addEventListener('click', function() {
  document.getElementById('overlay3').style.display = 'block';
  openPopout();
});

document.getElementById('CloseButton3').addEventListener('click', function() {
  document.getElementById('overlay3').style.display = 'none';
  closePopout();
});
document.getElementById('readMoreButton4').addEventListener('click', function() {
  document.getElementById('overlay4').style.display = 'block';
  openPopout();
});

document.getElementById('CloseButton4').addEventListener('click', function() {
  document.getElementById('overlay4').style.display = 'none';
  closePopout();
});
document.getElementById('readMoreButton5').addEventListener('click', function() {
  document.getElementById('overlay5').style.display = 'block';
  openPopout();
});

document.getElementById('CloseButton5').addEventListener('click', function() {
  document.getElementById('overlay5').style.display = 'none';
  closePopout();
});
document.getElementById('readMoreButton6').addEventListener('click', function() {
  document.getElementById('overlay6').style.display = 'block';
  openPopout();
  
});

document.getElementById('CloseButton6').addEventListener('click', function() {
  document.getElementById('overlay6').style.display = 'none';
  closePopout();
});

// Open popout
function openPopout() {
  document.body.classList.add('popup-open');
  document.querySelector('.overlay').style.display = 'block';
}

// Close popout
function closePopout() {
  document.body.classList.remove('popup-open');
  document.querySelector('.overlay').style.display = 'none';
}