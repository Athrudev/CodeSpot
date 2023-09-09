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




// locomotive code

gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
