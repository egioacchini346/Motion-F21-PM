import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin, GSDevTools);

gsap.set("#t-down",{scaleY:0.5});
gsap.set("#t-cross",{transformOrigin: "center"});
gsap.set("#e",{transformOrigin: "left bottom"});
gsap.set("#i",{transformOrigin: "center bottom"});
gsap.set("#dot",{transformOrigin: "50% 50%", xPercent:-50, yPercent:-50});

const mainTL = gsap.timeline();

function tAnimation(){
    const tl = gsap.timeline();
    tl.from("#t-down",{duration:0.5, y:"-=500", ease:"none"})

    // stretch out bottom of T
    .to("#t-down",{duration:0.5, scaleY:1.5, ease: "none)"})

    // animate the bottom of the T path
    .from("#t-path",{duration:0.25, scaleY:0, ease: "none)"},"-=20%")
    .fromTo("#t-path",{duration:0.25, drawSVG: "0% 10%"}, {drawSVG:"90% 100%", ease:"none"}, "tAnimation")

    // animate the t cross bar
    .from("#t-cross",{duration:0.5, scaleX:0, ease: "elastic.out(1, 0.3)"}, "tAnimation")

    // snap T back into shape
    .to("#t-down",{duration:0.5, scaleY:1, ease: "elastic.out(1, 0.3)"},"-=80%")
    return tl;
}

function eAnimation(){
    const tl = gsap.timeline();
    //rotate E 
    tl.from("#e", {duration:0.75, rotate: 120, ease: "elastic.out(1, 0.5)"},"-=0.25")
    return tl;
}

function kAnimation(){
    const tl = gsap.timeline();
    tl.from("#k", {duration:0.25, y:"-=200", ease: "bounce",autoAlpha:0},"-=0.6")
    return tl;
}

function nAnimation(){
    const tl = gsap.timeline();
    tl .from("#n", {duration:0.25, scaleX:0},"-=0.35")
    return tl;
}

function iAnimation(){
    const tl = gsap.timeline();
    tl.from("#i",{duration:0.5, scaleY:0, ease: "elastic.out(1, 0.5)"},"-=0.6")
    // make T path disappear
    .to("#t-path",{duration:0.25, scaleY:0},"-=0.6")
  
    // dot pops out and lands
    .from("#dot",{duration:0.001, autoAlpha:0},"-=0.55")
    .from("#dot",{duration:1, motionPath:{path:"#dot-path", align:"#dot-path"},ease: "bounce.out"},"-=0.65");
    return tl;
}


mainTL.add(eAnimation())
.add(tAnimation())
.add(kAnimation())
.add(nAnimation())
.add(iAnimation());




// mainTL.from("#t-down",{duration:0.5, y:"-=500", ease:"none"})

//  // stretch out bottom of T
//  .to("#t-down",{duration:0.5, scaleY:1.5, ease: "none)"})

// // animate the bottom of the T path
// .from("#t-path",{duration:0.25, scaleY:0, ease: "none)"},"-=20%")
// .fromTo("#t-path",{duration:0.25, drawSVG: "0% 10%"}, {drawSVG:"90% 100%", ease:"none"}, "tAnimation")

// // animate the t cross bar
// .from("#t-cross",{duration:0.5, scaleX:0, ease: "elastic.out(1, 0.3)"}, "tAnimation")

// // snap T back into shape
// .to("#t-down",{duration:0.5, scaleY:1, ease: "elastic.out(1, 0.3)"},"-=80%")

//rotate E 
// .from("#e", {duration:0.75, rotate: 120, ease: "elastic.out(1, 0.5)"},"-=0.25")

//  // drop in K
//  .from("#k", {duration:0.25, y:"-=200", ease: "bounce",autoAlpha:0},"-=0.6")

//  //skew the N in
//  .from("#n", {duration:0.25, scaleX:0},"-=0.35")

//   // make I pop out
//   .from("#i",{duration:0.5, scaleY:0, ease: "elastic.out(1, 0.5)"},"-=0.6")
//   // make T path disappear
//   .to("#t-path",{duration:0.25, scaleY:0},"-=0.6")

//   // dot pops out and lands
//   .from("#dot",{duration:0.001, autoAlpha:0},"-=0.55")
//   .from("#dot",{duration:1, motionPath:{path:"#dot-path", align:"#dot-path"},ease: "bounce.out"},"-=0.65");






GSDevTools.create();