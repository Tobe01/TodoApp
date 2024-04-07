// JavaScript code for portfolio site

window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  if (window.scrollY > 0) {
    navbar.style.display = 'flex';
  } else {
    navbar.style.display = 'none';
  }
});

// Dark mode 
var icon = document.getElementById("icon");

icon.onclick = function (){
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    icon.src = "thumbnails/toggle on.jpg";
  }else {
    icon.src = "Thumbnails/toggle off.jpg";
  }
} 

// smooth scroll to each section

document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('nav a');

  links.forEach(link => {
      link.addEventListener('click', function (e) {
          e.preventDefault();

          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
              const yOffset = -60; // Adjust this value as needed to offset for any fixed headers
              const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

              window.scrollTo({ top: y, behavior: 'smooth' });
          }
      });
  });
});

// link pages

function goToPage (url){
  window.location.href = url;
}


// Hamburger Menu 
function showMenu (){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex';
}

function hideMenu (){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none';
}

// Read more for About contents

function toggleText() {
  var moreText = document.getElementById('more-text');
  var btnText = document.getElementById('.show-more-btn');

  if (moreText.style.display === 'none') {
      moreText.style.display = 'block';
      btnText.textContent = '...Read Less';
  } else {
      moreText.style.display = 'none';
      btnText.textContent = '...Read More';
  }
}

// Read more for Work experience contents

function toggleHiddenContent() {
  var hiddenDiv = document.getElementById('hiddenContent');
  var readMeText = document.querySelector('.read-me');

  if (hiddenDiv.style.display === 'none') {
    hiddenDiv.style.display = 'block';
    readMeText.textContent = '...Read Less';
  } else {
    hiddenDiv.style.display = 'none';
    readMeText.textContent = '...Read More';
  }
}

function toggleText() {
  var moreText = document.getElementById("more-text");
  var btnText = document.getElementById("toggle-btn");

  if (moreText.style.display === "none") {
      moreText.style.display = "inline";
      btnText.innerHTML = "Show less";
  } else {
      moreText.style.display = "none";
      btnText.innerHTML = "Show more";
  }
}

// Section scrolling effect

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

/*
// Show or hide scroll-to-top button based on scroll position

window.addEventListener('scroll', function() {
  if (window.scrollY > 100) {
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
} */

document.addEventListener("DOMContentLoaded", function() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // Show button when user scrolls down
  window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  };

  // Scroll to the top when button is clicked
  scrollToTopBtn.onclick = function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  };
});



