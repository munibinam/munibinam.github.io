// Custom enhancements for Munib Inam's website

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  'use strict';

  // 1. Add scrolled class to masthead when scrolling
  let lastScroll = 0;
  const masthead = document.querySelector('.masthead');

  if (masthead) {
    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

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
  backToTopButton.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>';
  backToTopButton.className = 'back-to-top';
  backToTopButton.setAttribute('aria-label', 'Back to top');
  document.body.appendChild(backToTopButton);

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > 300) {
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

});
