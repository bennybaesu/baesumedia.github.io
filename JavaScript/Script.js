// Function to "open" and "close" the secondary menu
function buttonFlip() {
    var tog = document.getElementById("mobileMenu"); // Gets the element of the mobile menu
    tog.classList.toggle("show"); // Toggles mobile menu between hidden and visible
    var hamburger = document.querySelector(".hamburger"); /// Select the hamburger query 
    hamburger.classList.toggle("is-active"); // Toggle between active and inactive for button animation
  }

  // Function to send user to menu that allows them to get a quote
  function contactButton() {
    var contact = document.getElementById("contact");
    contact.classList.toggle("popup");
  }

  