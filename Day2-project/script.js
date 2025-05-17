gsap.registerPlugin(ScrollTrigger);

// Animate scroll heading horizontally
gsap.to(".scroll-heading", {
  x: "-100%",
  scrollTrigger: {
    trigger: ".scroll-section",
    start: "top top",
    end: "bottom top",
    scrub: 1,
    pin: true,
  },
});

// Showcase image parallax
gsap.from(".showcase-img", {
  y: 100,
  scale: 1.2,
  opacity: 0,
  scrollTrigger: {
    trigger: ".showcase-img",
    start: "top 90%",
    end: "top 40%",
    scrub: true,
  },
});

// Final text fade in
gsap.from(".final-text", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".final-text",
    start: "top 80%",
    toggleActions: "play none none none",
  },
});
