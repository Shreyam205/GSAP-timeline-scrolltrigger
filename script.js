function page1Animation(){
    var tl = gsap.timeline()

tl.from("nav h1, nav h4, nav button",{
    y:-20,
    opacity:0,
    duration:0.5,
    delay:0.5,
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
    duration:0.2
})
}

page1Animation()

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".services h3",
        scroller:"body",
        strat:"top 50%",
        end:"top 10%",
        scrub:2,
    }
})

tl2.from(".services",{
    y:30,
    opacity:0,
    duration:0.5
})

// group1 animation
tl2.from(".left1",{
    x:-300,
    opacity:0,
    duration:1,
    delay:0.5
}, "anim1")
tl2.from(".right1",{
    x:300,
    opacity:0,
    duration:1,
    delay:0.5
}, "anim1")
// group2 animation
tl2.from(".left2",{
    x:-300,
    opacity:0,
    duration:1,
    delay:0.5
}, "anim2")
tl2.from(".right2",{
    x:300,
    opacity:0,
    duration:1,
    delay:0.5
}, "anim2")

var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:".last",
        scroller:"body",
        strat:"top 50%",
    }
})

tl3.from(".make",{
    y:500,
    opacity:0,
    duration:0.8
})
tl3.from(".case",{
    x:-500,
    opacity:0,
    duration:0.5
})
tl3.from(".last",{
    x:500,
    opacity:0,
    duration:0.5
})