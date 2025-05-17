// const scroll = new LocomotiveScroll({
//   el: document.querySelector("body"),
//   smooth: true,
// });

gsap.from("#page1 .box", {
  scale: 0,
  rotate: 360,
  duration: 1,
  delay: 0.5,
});

gsap.from("#page2 .box", {
  scale: 0,
  rotate: 360,
  duration: 1,
  delay: 0.5,
  scrollTrigger: {
    trigger: "#page2 .box",
    scroll: "body",
    markers: true,
    start: "top 90%",
    end : "toop 50%",
    scrub : 2
  },
});
