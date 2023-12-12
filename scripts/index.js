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

