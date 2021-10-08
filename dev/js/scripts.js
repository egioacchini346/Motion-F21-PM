import { gsap } from "gsap";


let mainTL = gsap.timeline();

// mainTL.to("#hero",{duration:0.5, autoAlpha:0});

mainTL.from("h1",{duration:1, y:"+=200", stagger:0.5});
