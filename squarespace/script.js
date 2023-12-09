
let tl = gsap.timeline()

tl.from('#nav-part1 img ,#nav-part2 h4, #nav-part3 h4, button',{

    y:-100,
    duration:1,
    delay:0.5,
    stagger:0.25,
    

})
tl.from('h1',{

    y:-500,
    duration:1,
    delay:0.2,
    stagger:0.5
})

tl.from('span',{

    opacity:0

})

tl.from('#body img',{

    scale:0,
    opacity:0,

    
})

tl.from('h6',{

    opacity:0,
    delay:1,

})
tl.to('h6',{

    y:30,
    yoyo:'true',
    repeat:-1,
    delay:0.5
})