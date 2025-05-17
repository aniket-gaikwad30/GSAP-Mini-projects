gsap.registerPlugin(ScrollTrigger);

// Animate the "Experiences" scroll text
gsap.to("#experience-text", {
  x: "-160%",
  scrollTrigger: {
    trigger: "#page2",
    start: "top top",
    end: "bottom top",
    scrub: 1.5,
    pin: true,
  },
});

// Animate the circle in page2
gsap.from(".circle", {
  scale: 0,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page2",
    start: "top center",
    end: "top 100px",
    scrub: true,
  },
});

// Parallax effect on image in page3
gsap.from(".parallax-img", {
  y: 100,
  scale: 1.2,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: "#page3",
    start: "top 80%",
    end: "top 30%",
    scrub: true,
  },
});
