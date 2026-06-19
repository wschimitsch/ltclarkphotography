const images = document.querySelectorAll('.img-fade img, .text-fade');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '200px' });

images.forEach(img => observer.observe(img));