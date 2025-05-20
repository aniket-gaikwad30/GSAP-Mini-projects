let initialPath = `M 0 350 Q 350 350 700 350`;
let finalPath = `M 0 350 Q 350 350 700 350`;

let string = document.getElementById("string");
let line = document.querySelector("path");

string.addEventListener("mouseenter", () => {
//   console.log("Entered in the div");
});

string.addEventListener("mouseleave", () => {
//   console.log("Leaving the div");
});

string.addEventListener("mousemove", (dets) => {
//   console.log("Leaving the div");
//   console.log(dets.y);


  path = `M 0 350 Q ${dets.x} ${dets.y} 700 350`;
  // line.setAttribute("d", `M 0 250 Q 350 ${dets.y} 700 250`);
  gsap.to("svg path",{
    attr : { d : path},
    ease : "power3.out"
  })
});


string.addEventListener("mouseleave", (dets) => {
  
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration : 1.2,
    ease: "elastic.out(1,0.3)",
  });
});
