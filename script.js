var tl = gsap.timeline()

tl.from("nav h1, nav h4, nav button",{
    y:-20,
    opacity:0,
    duration:0.5,
    delay:0.8,
    stagger:0.2
})
tl.from(".center-part1 h1",{
    x:-300,
    opacity:0,
    duration:0.5
})
tl.from(".center-part1 p",{
    x:300,
    opacity:0,
    duration:0.5
})
tl.from(".center-part1 button",{
    opacity:0,
    duration:0.5
})
tl.from(".center-part2 img",{
    opacity:0,
    duration:0.7
}, "-=0.5") 
// delay in timeline

tl.from(".section1bottom img", {
    opacity:0,
    y:30,
    stagger:0.2,
    duration:0.5
})