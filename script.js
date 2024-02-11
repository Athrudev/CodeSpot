var tl=gsap.timeline();


//page 1 aniation

 tl.from("nav .right,nav .mid,nav .left",{
     opacity:0,
     duration:0.9,
     // delay:0.3,
     stagger:0.3,
     y:-50
 })

 tl.from("#line",{
    opacity:0,
     duration:0.7,

 })



 tl.from("#up h1,#right #pfp img",{
     x:-50,
     // stagger:0.5,
     opacity:0,
     duration:0.6,
     // delay:0.4
 })
 tl.from("#up span img",{
     x:-50,
     stagger:0.5,
     opacity:0,
     duration:0.8,
     // delay:0.4
 })

 tl.from("#right .img-body,#down",{
     x:100,
     opacity:0,
     duration:1
 })

 tl.from("#scroll",{
     delay:1,
     y:-30,
     repeat:-1,
     duration:0.9,
     yoyo:true,
     opacity:0

 })

// page2 animation

tl.from(".p2-head h1,.p2-head h1 span",{
    opacity:0,
    y:100,
    duration:0.4,

    scrollTrigger:{
        trigger:".p2-head h1,.p2-head h1 span",
        scroller:"body",
        // markers:true,
        start:"botto 65%",
        scrub:2
        
    }
})

tl.from(".card",{

    opacity:0,
    y:100,
    duration:0.5,
    stagger:0.8,
    
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"down 85%",
        end:"down 65%",
        scrub:2
        
    } 
})

tl.from(".img img",{
    y:4,
    repeat:-1,
    duration:1.1,
    yoyo:true
})


