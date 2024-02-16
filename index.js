// Javascript code for Portfolio Project

// Hamburger Menu

function showMenu (){
  const sidebar = document.querySelector('.sidebar')
   sidebar.style.display = 'flex';
}

function hideMenu (){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none';
}

// Github repository and live Demo

function live (){
  alert('Project ongoing!');
}

// Smooth scrolling effect

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));

      window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth'
      });
  });
});

// Show or hide scroll-to-top button based on scroll position

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 100) {
      document.getElementById('scroll-to-top-btn').style.display = 'block';
  } else {
      document.getElementById('scroll-to-top-btn').style.display = 'none';
  }
});

// Function to scroll back to the top

function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}