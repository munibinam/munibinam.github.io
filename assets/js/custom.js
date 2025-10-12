// Custom enhancements for Munib Inam's website

(function() {
  'use strict';

  // 1. Add scrolled class to masthead when scrolling
  let lastScroll = 0;
  const masthead = document.querySelector('.masthead');

  if (masthead) {
    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 50) {
        masthead.classList.add('scrolled');
      } else {
        masthead.classList.remove('scrolled');
      }

      lastScroll = currentScroll;
    });
  }

  // 2. Back to Top Button
  const backToTopButton = document.createElement('button');
  backToTopButton.innerHTML = '↑';
  backToTopButton.className = 'back-to-top';
  backToTopButton.setAttribute('aria-label', 'Back to top');
  document.body.appendChild(backToTopButton);

  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
    }
  });

  backToTopButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

})();
