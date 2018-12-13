import '../scss/style.scss';
import {TweenLite, TweenMax, Power2, TimelineLite} from "gsap/TweenMax";



let slides = Array.from(document.querySelectorAll('.slider__item'));
let tl = new TimelineMax({repeat: 123});


TweenLite.set(slides[1], {opacity: 0});



tl
.from(slides[0], 1, {opacity: 0})
.to(slides[0],1,{opacity: 1}, '+=3')
.to(slides[0],1,{opacity: 0})
.to(slides[1],1,{opacity: 1})
.to(slides[1],1,{opacity: 0}, '+=3');
