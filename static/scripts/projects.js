// Projects Filter
document.addEventListener('DOMContentLoaded', function() {
    // Filter projects
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    filterBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        const filterValue = this.getAttribute('data-filter');
        
        // Filter projects
        projectItems.forEach(item => {
          if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
    
    // Animate stats counting
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsSection = document.querySelector('.stats-section');
    
    function animateStats() {
      const sectionPos = statsSection.getBoundingClientRect().top;
      const screenPos = window.innerHeight / 1.3;
      
      if (sectionPos < screenPos) {
        statNumbers.forEach(stat => {
          const target = parseInt(stat.getAttribute('data-count'));
          const duration = 2000; // 2 seconds
          const step = target / (duration / 16); // 60fps
          let current = 0;
          
          const counter = setInterval(() => {
            current += step;
            if (current >= target) {
              clearInterval(counter);
              stat.textContent = target;
            } else {
              stat.textContent = Math.floor(current);
            }
          }, 16);
        });
        
        // Remove event listener after animation
        window.removeEventListener('scroll', animateStats);
      }
    }
    
    window.addEventListener('scroll', animateStats);
    
    // Initialize testimonial slider
    $('.testimonials-slider').slick({
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000
    });
  });