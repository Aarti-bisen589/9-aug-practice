// function locomotive(){
//     gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });










// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();

// }
// locomotive()


var h1Elem = document.querySelectorAll("#page2 h1")
h1Elem.forEach(function(elem){
    var texContainer = elem.textContent
    var splitedtext = texContainer.split("")
    var clutter =""
    splitedtext.forEach(function(e){
        clutter += `<span>${e}</span>`
    })
elem.innerHTML = clutter

})

gsap.to(".imagecontainer",{
    ease: Expo.easeInOut,
    width: "100%",
    duration: 2,
    stagger:2,
    repeat: -1,
    yoyo: -1,
    

})

gsap.to(".text h1",{
    ease: Expo.easeInOut,
    delay:-5,
    duration: 5,
    stagger:2,
    top: "-100%",
    repeat:-1,
    yoyo: -1,

})
gsap.from("#imag1",{
    y: -30,
    delay:3,
    duration: 2,
    stagger:0.5,
    opacity:0,
    scrollTrigger:{
        trigger: "#imag1",
         scroller: "body",
        //  markers:true,
         start: "top 15%",
          end: "top 55%",
          scrub: 1
      }
    }

)
gsap.from("#imag2",{
    x: -30,
    delay:1,
    duration: 1,
    stagger:0.5,
    opacity:0,
    scrollTrigger:{
        // markers: true,
        trigger: "#imag2",
         scroller: "body",
         start: "top 25%",
          end: "top 55%",
          scrub: 1
      }

})
gsap.from("#imag3",{
    x: 130,
    delay:1,
    duration: 1,
    stagger:0.5,
    opacity:0,
    scrollTrigger:{
        //  markers: true,
        trigger: "#imag3",
         scroller: "body",
         start: "top 35%",
          end: "top 65%",
          scrub: 1
      }

})
gsap.from("#why h1",{
    x: 130,
    delay:1,
    duration: 2,
    stagger:0.5,
    opacity:0,
    scrollTrigger:{
        //  markers: true,
        trigger: "#why h1",
         scroller: "body",
         start: "top 45%",
          end: "top 65%",
          scrub: 1
      }



})
gsap.from("#why h2",{
    x: 130,
    delay:1.5,
    duration: 2,
    stagger:0.5,
    opacity:0,
     scrollTrigger:{
        // markers: true,
        trigger: "#why h2",
         scroller: "body",
         start: "top 45%",
          end: "top 55%",
          scrub: 1
      }


    })
gsap.from("#why p",{
    x: 130,
    delay:2,
    duration: 2,
    stagger:0.5,
    opacity:0,
    scrollTrigger:{
        // markers: true,
        trigger: "#why p",
         scroller: "body",
         start: "top 45%",
          end: "top 55%",
          scrub: 1
      }

})
gsap.from("#follow",{
    x: 130,
    delay:1,
    duration: 2,
    stagger:0.5,
    opacity:0,
    scrollTrigger:{
        //  markers: true,
        trigger: "#follow",
         scroller: "body",
         start: "top 45%",
          end: "top 55%",
          scrub: 1
      }

})

gsap.from("#right img",{
    x: 130,
    delay:1,
    duration: 2,
    stagger:0.5,
    opacity:0,
    scrollTrigger:{
        //   markers: true,
        trigger: "#right img",
         scroller: "body",
         start: "top 15%",
          end: "top 85%",
          scrub: 1
      }

})

// var h3Elem = document.querySelectorAll("#page5 h3")
// h3Elem.forEach(function(elem){
//     var texContainer = elem.textContent
//     var splitedtext = texContainer.split("")
//     var clutter =""
//     splitedtext.forEach(function(e){
//         clutter += `<span>${e}</span>`
//     })
// elem.innerHTML = clutter

// })
// gsap.to("h3 ",{

//    y:-40,
//     duration: 1,
//     delay: 1,
//     stagger:.2,

//     scrollTrigger:{
//         trigger:"#page5",
//         scroller: "body",
//         // markers: true,
//         start: "top 10%",
//         end: "top 60%",
//         scrub:1
//     }
// })

function textAnimation(){
    var clutter = ""
    var h1Text = document.querySelector("#page5 h1").textContent
    var splitedText = h1Text.split("")
    splitedText.forEach(function(elem){
      clutter += `<span>${elem}</span>`
    })
    document.querySelector("#page5 h1").innerHTML = clutter
  
    var tl = gsap.timeline({
      scrollTrigger:{
        trigger:"#page5",
        scroller:"body",
        start:"top 0%",
        end:"top -100%",
        pin:true,
        scrub:2,
        markers:true
      }
    })
    tl.to("#page5 h1 span",{
        color:"#000",
        stagger:0.1,
    })
    tl.to("#page5 h1",{
     transform:"translateX(-100vw)"
    },"anim1")
}



