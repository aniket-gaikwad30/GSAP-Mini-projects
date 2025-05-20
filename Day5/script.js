let curser = document.querySelector("#curser");
let start = document.querySelector("#main i");
let stop = document.querySelector("#full i");
let full = document.querySelector("#full");
let text = document.querySelector("span");

let body = document.querySelector("body");
body.addEventListener("mousemove", (e) => {
  gsap.to(curser, {
    x: e.x,
    y: e.y,
    ease: "back.out",
  });
});

let t = gsap.timeline();

t.to("#full", {
  right: "0%",
  duration: 2,
  ease: "bounce.out",
});

t.from("#full h4", {
  x: 50,
  opacity: 0,
  duration: 0.4,
  stagger: 0.5,
});

t.pause();

start.addEventListener("click", () => {
  t.restart();
});

stop.addEventListener("click", () => {
  // t.reverse();
  gsap.to("#full", {
    right: "-40%",
    duration: 1,
  });
});

full.addEventListener("mouseenter", () => {
  text.style.fontSize = "4px";
  gsap.to(curser, {
    scale: 4,
    ease: "back.out",
    duration: 1,
  }),
    setTimeout(() => {
      text.style.display = "block";
    }, 100);
});

full.addEventListener("mouseleave", () => {
  text.style.display = "none";
  gsap.to(curser, {
    scale: 1,
    ease: "back.out",
    duration: 1,
    zIndex: 100,
  });
});
