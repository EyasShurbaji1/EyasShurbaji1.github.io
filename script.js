// Function to handle the active status on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-list li a');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 50) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});



// document.addEventListener("DOMContentLoaded", function() {
//     const currentLocation = location.href;
//     const menuItem = document.querySelectorAll('.nav-list li a');
//     const menuLength = menuItem.length;
//     for (let i = 0; i < menuLength; i++) {
//         if (menuItem[i].href === currentLocation) {
//             menuItem[i].className = "active";
//         }
//     }
// });



// // JavaScript for Dropdown Menu Toggle
// document.addEventListener('DOMContentLoaded', function() {
//     const menuToggle = document.querySelector('.menu-toggle');
//     const navList = document.querySelector('.nav-list');

//     menuToggle.addEventListener('click', function() {
//         navList.classList.toggle('show');
//         menuToggle.classList.toggle('open');
//     });
// });


// document.addEventListener('DOMContentLoaded', function() {
//     // Get all navigation links
//     const navLinks = document.querySelectorAll('.nav-list a');

//     navLinks.forEach(link => {
//         link.addEventListener('click', function(event) {
//             // Prevent the default action
//             event.preventDefault();

//             // Get the target section ID
//             const targetId = this.getAttribute('href').substring(1);
//             const targetSection = document.getElementById(targetId);

//             if (targetSection) {
//                 // Scroll to the section
//                 targetSection.scrollIntoView({
//                     behavior: 'smooth'
//                 });
//             }
//         });
//     });
// });
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    // Toggle menu when clicking on the menu toggle button
    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('show');
        menuToggle.classList.toggle('open');
    });

    // Close menu when clicking on a navigation link
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Prevent the default action
            event.preventDefault();

            // Get the target section ID
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Scroll to the section
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }

            // Close the menu after clicking a link
            navList.classList.remove('show');
            menuToggle.classList.remove('open');
        });
    });

    // Close menu when clicking outside of it
    document.addEventListener('click', function(event) {
        // Check if the click is outside the navList and menuToggle
        if (!navList.contains(event.target) && !menuToggle.contains(event.target)) {
            navList.classList.remove('show');
            menuToggle.classList.remove('open');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const texts = document.querySelectorAll("#cycle-text span");
    let index = 0;

    function cycleText() {
        texts.forEach(text => text.classList.remove("active"));
        texts[index].classList.add("active");
        index = (index + 1) % texts.length;  // loop back to the first element
    }

    cycleText();  // Initialize the first text
    setInterval(cycleText, 2000);  // Change the interval as needed
});
