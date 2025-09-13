// Infinite responsive carousel for .pillars-section using tiny-slider
// Make sure to include tiny-slider in your HTML

document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('.pillars-grid')) {
    var slider = tns({
      container: '.pillars-grid',
      items: 1,
      slideBy: 1,
      autoplay: true,
      autoplayButtonOutput: false,
      controls: false,
      nav: true,
      loop: true,
      gutter: 24,
      responsive: {
        640: {
          items: 2
        },
        900: {
          items: 3
        },
        1200: {
          items: 4
        }
      }
    });
  }
});
