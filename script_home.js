/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and moves a button you can add from the README
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");
let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let montain_behind = document.getElementById('montain-behind');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let montain_front = document.getElementById('montain-front');
let header = document.querySelector('header');

window.addEventListener('scroll', function() {
  let value = window.scrollY;
  stars.style.left = value * 0.25 + 'px';
  moon.style.top = value * 1.05 + 'px';
  montain_behind.style.top = value * 0.05 + 'px';
  montain_front.style.top = value * 0 + 'px';
  text.style.marginRight = value * 4 + 'px';
  text.style.marginTop = value * 1.5 + 'px';
  btn.style.marginTop = value * 1.5 + 'px';
})