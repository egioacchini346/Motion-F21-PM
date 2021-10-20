import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(GSDevTools, DrawSVGPlugin);

const mainTL = gsap.timeline();

function ballOne(){
    // const tl =gsap.timeline();

    // tl.to("#outline",{duration:1, drawSVG:"0%"});
    // tl.to("#ball-1",{duration:1, scale:9});
    // return tl;
}


function ballTwo(){
    const tl =gsap.timeline();
    tl.to("#ball-2",{duration:1, scale:3});
    return tl;
}

mainTL.add(ballTwo());
        // .add(ballOne());



// GSDevTools.create();

















































// reference the timeline | Do we want to start at the beginning or the end of the timeline? | What thing to you want to animate? | duration of the animation? | What do we want to do?

// from = start point of timeline
// mainTL.from("#hero article",{duration:2,alpha:0, scale:2});

// to = end point of timeline
// mainTL.to("#hero article",{duration:2,alpha:0, scale:2});

// const heroHeight = document.querySelector("#hero");

// const aniTime = 0.5;

// console.log(heroHeight.clientHeight + "px is the height of the hero section");
// console.log(heroHeight.clientWidth + "px is the width of the hero section");


// mainTL.from("#hero article",{duration:aniTime,alpha:0, y: heroHeight.clientHeight})
//     .from("#hero h1",{duration:aniTime, y:"+=300", alpha:0, rotation:180},"madeUp")
//     .from("#hero h2",{duration:aniTime, y:"+=300", alpha:0, rotation:180}, "madeUp");