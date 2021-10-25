import {
    gsap
} from "gsap";
import {
    GSDevTools
} from "gsap/GSDevTools";
import {
    DrawSVGPlugin
} from "gsap/DrawSVGPlugin";
import {
    TextPlugin
} from "gsap/TextPlugin";
import {
    MotionPathPlugin
} from "gsap/MotionPathPlugin";

gsap.registerPlugin(GSDevTools, DrawSVGPlugin, TextPlugin, MotionPathPlugin);

gsap.set("#line-2", {
    scaleX: -1,
    transformOrigin: "center center"
});

const mainTL = gsap.timeline();
const aniTime = 0.5;


function dropIn() {
    const tl = gsap.timeline();
    // tl.from("#line-1",{duration: 2, drawSVG:0},"same");
    // tl.from("#line-2",{duration: 2, drawSVG:0},"same");

    // start here
    tl.from(".ball", {
            duration: aniTime,
            y: "-=200",
            alpha: 0,
            ease: "bounce.out",
            stagger: 0.25
        }, "start")
        .from("#outline", {
            duration: 0.25,
            drawSVG: "0%"
        }, "start")
        .to("#welcome-text", {
            duration: 0.25,
            text: "LOADING",
            ease: "none"
        });

    // -------------------
    // see Start here for the line that replaces the 3 lines below
    // tl.from("#ball-1",{duration: 0.5, y:"-=200", alpha:0, ease: "bounce.out"});
    // tl.from("#ball-2",{duration: 0.5, y:"-=200", alpha:0, ease: "bounce.out"},"-=50%");
    // tl.from("#ball-3",{duration: 0.5, y:"-=200", alpha:0, ease: "bounce.out"},"-=50%");
    // -------------------
    return tl;
}

function ballHop() {
    const tl = gsap.timeline({
        repeat: 2
    });
    tl.to("#ball-1", {
            duration: aniTime,
            motionPath: {
                path: "#path-1",
                align: "self"
            },
            scale: 0.5,
            ease: "power4.out"
        })
        .to("#ball-2", {
            duration: aniTime,
            motionPath: {
                path: "#path-2",
                align: "self"
            },
            scale: 0.5,
            ease: "power4.out"
        }, "-=75%")
        .to("#ball-3", {
            duration: aniTime,
            motionPath: {
                path: "#path-3",
                align: "self"
            },
            scale: 0.5,
            ease: "power4.out"
        }, "-=75%")
        .to("#ball-1", {
            duration: aniTime,
            x: "-=158",
            scale: 1
        }, "-=50%")
        .to("#ball-2", {
            duration: aniTime,
            x: "-=158",
            scale: 1
        }, "-=50%")
        .to("#ball-3", {
            duration: aniTime,
            x: "-=158",
            scale: 1
        }, "-=50%")

        .from("#blackOutline", {
            duration: 1,
            autoAlpha: 0
        });

    return tl;
}






mainTL.add(dropIn())
    .add(ballHop());


GSDevTools.create();







// function ballOne(){
//     // const tl =gsap.timeline();

//     // tl.to("#outline",{duration:1, drawSVG:"0%"});
//     // tl.to("#ball-1",{duration:1, scale:9});
//     // return tl;
// }


// function ballTwo(){
//     const tl =gsap.timeline();
//     tl.to("#ball-2",{duration:1, scale:3});
//     return tl;
// }


// .add(ballOne());





















































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