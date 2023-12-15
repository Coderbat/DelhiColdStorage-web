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

    // Store the last scroll position
    let lastScrollY = window.scrollY;

    // Adjust the position when the page loads
    adjustPosition();
  
    // Adjust the position whenever the window is resized
    window.addEventListener('resize', adjustPosition);

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