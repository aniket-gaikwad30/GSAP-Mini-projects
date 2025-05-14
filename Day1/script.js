// script.js

console.log("Welcome to GSAP!");
gsap.to("#box1", {
    x: 800,
    duration : 3,
    delay : 2,
    background: "yellow",
    borderRadius : "50%",
    rotate : 360
})



gsap.to("#box2", {
    x: -750,
    duration : 3,
    delay : 2,
    background: "brown",
    borderRadius : "50%",
    rotate : 360
})