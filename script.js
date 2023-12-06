gsap.registerPlugin(ScrollTrigger);

const pageContainer = document.querySelector(".container");

const scroller = new LocomotiveScroll({
  el: pageContainer,
  smooth: true
});
scroller.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(pageContainer, {
  scrollTop(value) {
    return arguments.length
      ? scroller.scrollTo(value, 0, 0)
      : scroller.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  pinType: pageContainer.style.transform ? "transform" : "fixed"
});

////////////////////////////////////
////////////////////////////////////
window.addEventListener("load", function () {
  let pinBoxes = document.querySelectorAll(".pin-wrap > *");
  let pinWrap = document.querySelector(".pin-wrap");
  let pinWrapWidth = pinWrap.offsetWidth;
  let horizontalScrollLength = pinWrapWidth - window.innerWidth;

  // Pinning and horizontal scrolling

  gsap.to(".pin-wrap", {
    scrollTrigger: {
      scroller: pageContainer, //locomotive-scroll
      scrub: true,
      trigger: "#sectionPin",
      pin: true,
      // anticipatePin: 1,
      start: "top top",
      end: pinWrapWidth
    },
    x: -horizontalScrollLength,
    ease: "none"
  });

  ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll

  ScrollTrigger.refresh();
});

/////////////////// vertical scroll///////////////////////////////////

ScrollTrigger.scrollerProxy(pageContainer, {
  scrollTop(value) {
    return arguments.length
      ? scroller.scrollTo(value, 0, 0)
      : scroller.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  pinType: pageContainer.style.transform ? "transform" : "fixed"
});

window.addEventListener("load", function () {
  let pinBoxes = document.querySelectorAll(".pin-wrap-1 > *");
  let pinWrap = document.querySelector(".pin-wrap-1");
  let pinWrapWidth = pinWrap.offsetHeight;
  let horizontalScrollLength = pinWrapWidth - window.innerHeight;

  gsap.to(".pin-wrap-1", {
    scrollTrigger: {
      scroller: pageContainer,
      scrub: true,
      trigger: "#sticky",
      pin: true,
      start: "top top",
      end: "bottom+=200 top-=200"
    },
    y: -horizontalScrollLength,
    ease: "none"
  });

  ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll

  ScrollTrigger.refresh();
});



  const tl = gsap.timeline();

  tl.from(".start-img",{
    opacity:0,
    duration:2,
  });

  tl.from(".start-text",{

    y:30,
    opacity:0,
    duration:1.5
  });
  tl.to("#start",{
    y:500,
    opacity:0,
    duration:.8,
    ease:"none"
  });

  tl.from(".logo",{
    x:-100,
    duration:.9,
    opacity:0
  })
  tl.from("#menu",{
    y:-50,
    opacity:0,
    duration:.5
  })

 const menu = document.querySelector("#menu");
 const nav = document.querySelector(".nav ")

  menu.addEventListener("click", function(){
    gsap.to(nav,{
      opacity:1,
      y:28,
      duration:.3,
      ease:"none"
    })
    gsap.to(menu,{
      opacity:0
    })
  })
  nav.addEventListener("click", function(){
    gsap.to(nav,{
      opacity:0,
      y:0,
      duration:.2,
    })
    gsap.to(menu,{
      opacity:1
    })
  });
 
  gsap.to(".logo",{
    y:-90,
    duration:1,
    scrollTrigger:{
      trigger:".logo",
      scroller:pageContainer,
      scrub:1,
      start:"top -10%",
      end:"top -11%",
    }
  })

  gsap.from("#menu",{
    y:9,
    scrollTrigger:{
      trigger:"#menu",
      scroller:pageContainer,
      scrub:1,
      start:"top -10%",
      end:"top -11%"
    }
  })