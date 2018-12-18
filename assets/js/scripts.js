import '../scss/style.scss';
import '../scss/fontello.css';
import {
    TweenLite,
    TweenMax,
    Power2,
    TimelineLite
} from "gsap/TweenMax";


// slider
let slider = document.querySelector(".slider");
let slides = Array.from(document.querySelectorAll('.slider__item'));
let h1 = document.querySelectorAll('.slider__h1');
let description = document.querySelectorAll('.slider__description');
let button = document.querySelector('.btn');
// controls
let dots = Array.from(document.querySelectorAll('.icon-circle-empty'));
let tl = new TimelineMax({
    repeat: 123
});
let tl_text = new TimelineMax({
    repeat: 123
});




function setSliderHeight() {
    let image = document.querySelector(".slider__item img").clientHeight;
    slider.style.height = `${image}px`;
}


window.addEventListener('resize', setSliderHeight)
window.addEventListener('load', setSliderHeight)



TweenLite.set(slides[1], {
    opacity: 0
});


tl
    .set(h1[1], {
        display: 'none'
    })
    .set(description[1], {
        display: 'none'
    })
    .set(dots[1], {
        textShadow: 'none'
    })
    .set(dots[0], {
        textShadow: '0 0 10px black'
    })
    .from(slides[0], 1, {
        opacity: 0
    })
    .fromTo(h1[0], 1, {
        transform: "rotateX(-150deg)",
        transformOriginin: '20% 40%'
    }, {
        transform: "rotateX(0)",
        opacity: 1,
        transformOriginin: '20% 40%',
        ease: Bounce.easeOut
    })
    .fromTo(description[0], 3, {
        transform: "translateX(10vw)",
        opacity: 0
    }, {
        transform: "translateX(0)",
        opacity: 1,
        ease: Elastic.easeOut.config(1, 0.3)
    }, '-=1')
    .fromTo(button, 3, {
        transform: "translateX(2vw)",
        opacity: 0
    }, {
        transform: "translateX(0)",
        opacity: 1,
        ease: Elastic.easeOut.config(1, 0.3)
    }, '-=2')
    .set(h1[0], {
        display: 'none'
    })
    .set(description[0], {
        display: 'none'
    })
    .set(button, {
        visibility: 'hidden'
    })
    .set(h1[1], {
        display: 'block'
    })
    .set(description[1], {
        display: 'block'
    })
    .to(slides[0], 1, {
        opacity: 1
    })
    .to(slides[0], 1, {
        opacity: 0
    })
    .set(dots[0], {
        textShadow: 'none'
    })
    .set(dots[1], {
        textShadow: '0 0 10px black'
    })
    .to(slides[1], 1, {
        opacity: 1
    })
    .fromTo(h1[1], 1, {
        transform: "rotateX(-150deg)",
        transformOriginin: '20% 40%'
    }, {
        transform: "rotateX(0)",
        opacity: 1,
        transformOriginin: '20% 40%',
        ease: Bounce.easeOut
    })
    .fromTo(description[1], 3, {
        transform: "translateX(10vw)",
        opacity: 0
    }, {
        transform: "translateX(0)",
        opacity: 1,
        ease: Elastic.easeOut.config(1, 0.3)
    }, '-=1')
    .fromTo(button, 3, {
        visibility: 'visible',
        transform: "translateX(2vw)",
        opacity: 0
    }, {
        transform: "translateX(0)",
        opacity: 1,
        ease: Elastic.easeOut.config(1, 0.3)
    }, '-=2')
    .to(slides[1], 1, {
        opacity: 0
    })
    .set(h1[0], {
        display: 'block'
    })
    .set(description[0], {
        display: 'block'
    })
