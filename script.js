
// sidebar 

function opensidebar() {
    const sidebar = document.querySelector('.sidebar') 
    sidebar.style.display = 'flex';
}

function closesidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none'
}


// slider for about me
const slider = document.getElementById('slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
let cardWidth;
let totalItems = slider.querySelectorAll('.slider-item').length;
let visibleItems;
let maxIndex;

function updateSliderSettings() {
  cardWidth = slider.querySelector('.slider-item').offsetWidth + 20; // includes gap
  if (window.innerWidth >= 1024) {
    visibleItems = 3;
  } else if (window.innerWidth >= 768) {
    visibleItems = 2;
  } else {
    visibleItems = 1;
  }
  maxIndex = totalItems - visibleItems;
  slider.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
}

nextBtn.addEventListener('click', () => {
  if (currentIndex < maxIndex) {
    currentIndex++;
    slider.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    slider.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
  }
});

window.addEventListener('resize', updateSliderSettings);
window.addEventListener('load', updateSliderSettings);



// projects

  // project all section
function setupSlider(trackId, prevBtnId, nextBtnId) {
      const track = document.getElementById(trackId);
      const slides = track.querySelectorAll('.slide');
      const prevBtn = document.getElementById(prevBtnId);
      const nextBtn = document.getElementById(nextBtnId);

      let index = 0;
      let slidesToShow = 3;
      const total = slides.length;

      function getSlidesToShow() {
        const w = window.innerWidth;
        if (w <= 768) return 1;
        if (w <= 1024) return 2;
        return 3;
      }

      function getGap() {
        const cs = getComputedStyle(track);
        return parseFloat(cs.gap || '0') || 0;
      }

      function itemWidth() {
        const rect = slides[0].getBoundingClientRect();
        return rect.width + getGap();
      }

      function clampIndex() {
        const maxIndex = Math.max(0, total - slidesToShow);
        if (index > maxIndex) index = 0;
        if (index < 0) index = maxIndex;
      }

      function updateSlider() {
        clampIndex();
        const x = index * itemWidth();
        track.style.transform = `translateX(-${x}px)`;
      }

      function recalc() {
        slidesToShow = getSlidesToShow();
        updateSlider();
      }

      nextBtn.addEventListener('click', () => { index++; updateSlider(); });
      prevBtn.addEventListener('click', () => { index--; updateSlider(); });
      window.addEventListener('resize', recalc);
      window.addEventListener('load', recalc);
    }

    // Initialize both sliders
    setupSlider('slider2', 'prevBtn2', 'nextBtn2');
    setupSlider('slider3', 'prevBtn3', 'nextBtn3');