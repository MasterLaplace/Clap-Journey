window.addEventListener("scroll", function() {
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 0);
})

const imagesArray = [
  "https://images.unsplash.com/photo-1497752531616-c3afd9760a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1445820200644-69f87d946277?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1555169062-013468b47731?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
];

const slider = document.querySelector('.slider');
const indicators = document.querySelector('.slider_navigators');
const goBackbtn = document.getElementById('goback-btn');
const goNextbtn = document.getElementById('gonext-btn');

imagesArray.map((imageSrc, index) => {
  const imageElement = document.createElement('img');
  imageElement.src = imageSrc;
  imageElement.id = index;
  imageElement.classList.add("slide");
  slider.appendChild(imageElement);
  
  const indicatorElement = document.createElement('a');
  indicatorElement.href = `#${index}`;
  indicatorElement.classList.add("indicator");
  indicators.appendChild(indicatorElement);
})

const imageWidth = slider.clientWidth;

slider.scrollTo(0, 0);
let currentIndex = 0;
currentIndex == 0 ? goBackbtn.style.display = "none" : goBackbtn.style.display = "block";
document.querySelector(`a[href='#${currentIndex}']`).classList.add('active');

let currentScrollLevel = slider.scrollLeft;
slider.addEventListener('scroll', () => {
  currentScrollLevel = slider.scrollLeft;
  currentIndex = Math.floor(currentScrollLevel / imageWidth);
  currentIndex == 0 ? goBackbtn.style.display = "none" : goBackbtn.style.display = "block";
  currentIndex == imagesArray.lenght - 1 ? goNextbtn.style.display = "none" : goNextbtn.style.display = "block";
  const allIndicators = [...document.getElementsByClassName('indicator')];
  allIndicators.map(indicator => indicator => indicator.classList.remove('active'));
  document.querySelector(`a[href='#${currentIndex}']`).classList.add('active');
})