let curser = document.querySelector("#curser");
let main = document.querySelector("#main")


main.addEventListener("mousemove", (e) => {
   gsap.to(curser,{
    x:e.x,
    y:e.y,
    ease:"back.out"
   })
})