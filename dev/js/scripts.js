import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(GSDevTools, DrawSVGPlugin, TextPlugin, MotionPathPlugin, MorphSVGPlugin);

MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

// gsap.set("#line-2",{scaleX:-1, transformOrigin: "center"});
gsap.set("#progress-bar",{transformOrigin: "center"});

// gsap.set("#ball-1",{x:"+=-100"});

const mainTL = gsap.timeline();
const aniTime = 0.5;


function dropIn(){
    const tl = gsap.timeline();
    // tl.from("#line-1",{duration: 2, drawSVG:0},"same");
    // tl.from("#line-2",{duration: 2, drawSVG:0},"same");

    // start here
    tl.from(".ball",{duration: aniTime, y:"-=200", alpha:0, ease: "bounce.out", stagger:0.25},"start")
    .from("#outline",{duration: 0.25, drawSVG: "0%"},"start")
    .to("#welcome-text",{duration: 0.25, text: "LOADING", ease: "none"});

    // -------------------
        // see Start here for the line that replaces the 3 lines below
        // tl.from("#ball-1",{duration: 0.5, y:"-=200", alpha:0, ease: "bounce.out"});
        // tl.from("#ball-2",{duration: 0.5, y:"-=200", alpha:0, ease: "bounce.out"},"-=50%");
        // tl.from("#ball-3",{duration: 0.5, y:"-=200", alpha:0, ease: "bounce.out"},"-=50%");
    // -------------------
    return tl;
}

function ballHop(){
    const tl = gsap.timeline({repeat:2});
    tl.to("#ball-1",{duration:aniTime, motionPath:{path:"#path-1", align:"self"}, scale:0.5, ease: "power4.out", morphSVG:"#star"})
    .to("#ball-2",{duration:aniTime, motionPath:{path:"#path-2", align:"self"}, scale:0.5, ease: "power4.out"},"-=75%")
    .to("#ball-3",{duration:aniTime, motionPath:{path:"#path-3", align:"self"}, scale:0.5, ease: "power4.out", morphSVG:"#star-2"},"-=75%")
    .to("#ball-1",{duration:aniTime,x:"-=158", scale:1, ease:"none"},"-=50%")
    .to("#ball-2",{duration:aniTime,x:"-=158", scale:1, ease:"none"},"-=50%")
    .to("#ball-3",{duration:aniTime,x:"-=158", scale:1, ease:"none"},"-=50%")
    
    return tl;
}

function barFill(){
    const tl = gsap.timeline();
    tl.from("#fill",{duration: 5.5, scaleX:0})
    .to("#welcome-text",{duration: 0.25, text: "COMPLETE", ease: "none"});
    return tl;
}

function flipBar(){
    const tl = gsap.timeline();
    tl.to("#welcome-text",{duration:aniTime, alpha:0})
    .to("#outline",{duration:aniTime, alpha:0},"sameTime")
    .to("#progress-bar",{duration:aniTime, rotation: 90},"sameTime")
    .to("#ball-1",{duration:aniTime, y:"-=200", x:"-=600", autoAlpha:0, scale:0},"-=90%")
    .to("#ball-2",{duration:aniTime, y:"-=100", x:"+=300", autoAlpha:0, scale:0},"-=90%")
    .to("#ball-3",{duration:aniTime, y:"-=10", x:"+=200", autoAlpha:0, scale:0},"-=80%")
    .to("#progress-bar",{duration:aniTime, scaleX: 10})
    .to("#progress-bar",{duration:aniTime, scaleY: 150})
    .to("#preloader",{duration:0.25, alpha:0, onComplete:backToTop})
    return tl;
}

function backToTop(){
    window.scrollTo(0,0);
    gsap.set("#preloader",{display:"none"});
}

function heroAnimation(){
    const tl = gsap.timeline();

    const heroHeight = document.querySelector("#hero");

    tl.from("#hero article",{duration:aniTime,alpha:0, y: heroHeight.clientHeight})
    .from("#hero h1",{duration:aniTime, y:"+=300", alpha:0, rotation:180},"madeUp")
    .from("#hero h2",{duration:aniTime, y:"+=300", alpha:0, rotation:180}, "madeUp");

    return tl;
}


mainTL.add(dropIn())
.add(ballHop(),"sameStuff")
.add(barFill(),"sameStuff")
.add(flipBar())
.add(heroAnimation(),"-=25%");


GSDevTools.create();


















































