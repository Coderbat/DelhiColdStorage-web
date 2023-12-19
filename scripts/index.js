jQuery(document).ready(function() {
    gsap.registerPlugin(ScrollTrigger);
   let tl = gsap.timeline({
       // yes, we can add it to an entire timeline!
       scrollTrigger: {
           trigger: ".door-wrapper",
           pin: true, // pin the trigger element while active
           start: "top", // when the top of the trigger hits the top of the viewport
           end: "bottom", // end after scrolling 500px beyond the start
           scrub: 1,
           markers: false,
           // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
       }
   });

   // add animations and labels to the timeline
   tl.to(".left", {
       //autoAlpha: 0,
       rotationY:"-116px", transformOrigin:"left",
       ease: "circ.in",
       yoyo: true,
   }, 0)
   
   tl.to(".right", {
       //autoAlpha: 0,
       rotationY:"116px", transformOrigin:"right",
       ease: "circ.in",
       yoyo: true,
   }, 0)
  
   
});

window.addEventListener('load', () => {
    // Select the door and contact_form_door divs
    const door = document.querySelector('.door');
    const contactFormDoor = document.querySelector('.contact_form_door');
  
    // Function to adjust the position of contact_form_door
    const adjustPosition = () => {
        // Calculate the bottom position of the door div relative to the top of the document
        const doorBottom = door.getBoundingClientRect().bottom + window.scrollY;
  
        // Position the contact_form_door div right after the door div
        contactFormDoor.style.position = 'absolute';
        contactFormDoor.style.top = `${doorBottom}px`;
    };

    //adjust conditions
let timeoutId;
// Store the last scroll position
let lastScrollY = window.scrollY;

// Adjust the position when the page loads
adjustPosition();

// Adjust the position 2 minutes after the window is resized
window.addEventListener('resize', () => {
    // Clear the previous timeout, if there is one
    if (timeoutId) {
        clearTimeout(timeoutId);
    }

    // Set a new timeout
    timeoutId = setTimeout(adjustPosition, 2 * 1000); // 2 secs
});

// Adjust the position whenever the window is scrolled by at least 100vh
window.addEventListener('scroll', () => {
    // Calculate the change in scroll position
    const deltaY = Math.abs(window.scrollY - lastScrollY);

    // Check if the scroll position has changed by at least 100vh
    if (deltaY >= window.innerHeight) {
        adjustPosition();

        // Update the last scroll position
        lastScrollY = window.scrollY;
    }
});
});

document.addEventListener('DOMContentLoaded', (event) => {
    const contactLink = document.querySelector('a[href="#ContactForm"]');

    // Add a click event listener to the contact link
    contactLink.addEventListener('click', (event) => {
        // Prevent the default link click behavior
        event.preventDefault();

        // Start the recursive scrolling
        scrollToContactForm();
    });

    let timeoutId = null; // Declare and initialize timeoutId

    function scrollToContactForm(previousY) {
        // Select the contact section
        const contactSection = document.getElementById('ContactForm');

        // Check if the contact section exists
        if (contactSection) {
            // Get the current y-coordinate of the contact section
            const currentY = contactSection.getBoundingClientRect().top;

            // Check if the y-coordinate has changed
            if (currentY !== previousY) {
                // Scroll to the contact section
                contactSection.scrollIntoView({ behavior: 'smooth' });

                // Clear the previous timeout, if there is one
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }

                // Call this function again after a delay
                timeoutId = setTimeout(() => {
                    scrollToContactForm(currentY);
                }, 500); // Adjust the delay as needed
            }
        }
    }
});

$(document).ready(function() {
    let lastInvocation = 0;
    const debounceTime = 2000; // 2000 milliseconds = 2 seconds

    $('#about_link').on('click', function(event) {
        event.preventDefault(); // Prevent the default action

        const now = Date.now();
        if (now - lastInvocation < debounceTime) {
            return; // If less than 2 seconds have passed since the last invocation, do nothing
        }
        lastInvocation = now; // Update the time of the last invocation

        // Create a function to check if the about_start element exists
        function checkAndScroll() {
            const aboutStart = $('#about_start');
            if (aboutStart.length) {
                // Get the font-size of the root element
                const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

                // Select the div
                const certainDiv = $('#image_slider_images'); // Replace 'certain_div_id' with the id of your div

                // Get the top and bottom positions of the window
                const topOfWindow = $(window).scrollTop();
                const bottomOfWindow = topOfWindow + $(window).height();

                // Get the top position and height of the div
                const topOfDiv = certainDiv.offset().top;
                const bottomOfDiv = topOfDiv + certainDiv.height();

                // Calculate the extra pixels in rem
                const extraPixels = (topOfWindow <= (bottomOfDiv+(window.innerHeight * 3.5))) ? ((window.innerHeight * 3.5) - $(window).scrollTop()) : -(10 * fontSize);

                // Get the top position and height of the about_start element
                const topOfAboutStart = aboutStart.offset().top;
                const bottomOfAboutStart = topOfAboutStart + aboutStart.height();

                // Check if about_start is already visible in the viewport and if extraPixels is negative
                if (topOfAboutStart >= topOfWindow && bottomOfAboutStart <= bottomOfWindow && extraPixels < 0) {
                    return; // If about_start is visible and extraPixels is negative, return without scrolling
                }

                $('html, body').animate({
                    scrollTop: aboutStart.offset().top + extraPixels
                }, 1000); // Scroll to the about_start element
            } else {
                setTimeout(checkAndScroll, 100); // If the about_start element doesn't exist, check again after 100ms
            }
        }

        // Call the function
        checkAndScroll();
    });
});