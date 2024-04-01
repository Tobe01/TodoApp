// JavaScript code for portfolio site

window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  if (window.scrollY > 0) {
    navbar.style.display = 'flex';
  } else {
    navbar.style.display = 'none';
  }
});

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

// code for Darkmode
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');
}

  // rotate
  document.addEventListener('DOMContentLoaded', function() {
// Simulate loading delay for demonstration
setTimeout(function() {
  // Remove loader and display content
  document.getElementById('loader-wrapper').style.display = 'none';
  document.getElementById('content').style.display = 'block';
}, 2000); // Adjust the delay time (in milliseconds) as needed

// Update progress bar as content loads
const progressBar = document.getElementById('progress-bar-inner');
let progress = 0;
const interval = setInterval(function() {
  progress += 10; // Increment progress (for demonstration)
  progressBar.style.width = progress + '%'; // Update progress bar width
  if (progress >= 100) {
    clearInterval(interval); // Stop interval when progress reaches 100%
  }
}, 200); // Adjust interval time (in milliseconds) as needed
});

// toggle ON and OFF icon
 function toggleOn (){
  const toggle = document.querySelector('.toggle')
  toggle.style.display = 'flex';
 }

 function toggleOff (){
  const toggle = document.querySelector('.toggle')
  toggle.style.display = 'none';
 }

function hideToggle (){
  const toggle2 = document.querySelector('.toggle2')
  toggle2.style.display = 'none';
}

function showToggle (){
  const toggle2 = document.querySelector('.toggle2')
  toggle2.style.display = 'flex';
}


// Read more for About contents

document.addEventListener("DOMContentLoaded", function() {
  // Get references to the read more link and the hidden content
  var showMoreLink = document.getElementById("show-more-linkk");
  var showContent = document.getElementById("show-contentt");

  // Add click event listener to the read more link
   showMoreLink.addEventListener("click", function(event) {
    // Prevent default behavior of the link
    event.preventDefault();

    // Toggle the visibility of the hidden content
    if (showContent.style.display === "none") {
      showContent.style.display = "inline"; // or "block" for block-level elements
      showMoreLink.textContent = "...Read less";
    } else {
      showContent.style.display = "none";
      showMoreLink.textContent = "...Read more";
    }
  });
});


// Read more for Work experience contents

document.addEventListener("DOMContentLoaded", function() {
  // Get references to the read more link and the hidden content
  var readMoreLink = document.getElementById("read-more-linkk");
  var moreContent = document.getElementById("more-contentt");

  // Add click event listener to the read more link
  readMoreLink.addEventListener("click", function(event) {
    // Prevent default behavior of the link
    event.preventDefault();

    // Toggle the visibility of the hidden content
    if (moreContent.style.display === "none") {
      moreContent.style.display = "inline"; // or "block" for block-level elements
      readMoreLink.textContent = "...Read less";
    } else {
      moreContent.style.display = "none";
      readMoreLink.textContent = "...Read more";
    }
  });
});


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

document.addEventListener("DOMContentLoaded", function() {
  // Get references to the read more link and the hidden content
  var readMoreLink = document.getElementById("read-more-link");
  var moreContent = document.getElementById("more-content");

  // Add click event listener to the read more link
  readMoreLink.addEventListener("click", function(event) {
    // Prevent default behavior of the link
    event.preventDefault();

    // Toggle the visibility of the hidden content
    if (moreContent.style.display === "none") {
      moreContent.style.display = "inline"; // or "block" for block-level elements
      readMoreLink.textContent = "Read less";
    } else {
      moreContent.style.display = "none";
      readMoreLink.textContent = "Read more";
    }
  });
});

