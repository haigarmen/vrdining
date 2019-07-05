let scene = document.querySelector('a-scene');
let sky = document.querySelector('a-sky');
let objectContainer = document.querySelector('#object-container');

// set sky values
sky.setAttribute('color', `black`);
// sky.setAttribute('color', `#${getRandomColor()}`);
// sky.setAttribute('animation__color', `property: color; dir: alternate; dur: 2000; easing: easeInOutSine; loop: true; to: #${getRandomColor()}`);

// change this value for more or less rings
let totalRingElements = 30;

function generateAllElements() {

    // element params
    let totalCircleElements = getRandomNumber(10, 3);
    let elementScale = getRandomNumber(3, 1);
    let scaleDuration = getRandomNumber(3000, 1000);

    // path params
    let pathValOne = getRandomNumber(21, -10);
    let pathValTwo = getRandomNumber(11, -20);
    let pathDuration = getRandomNumber(6000, 5000);

    for (let i = 1; i <= totalCircleElements; i++) {

      let currentRotation = 360 / totalCircleElements * i;
      let rotateContainer = document.createElement('a-entity');
      rotateContainer.setAttribute('rotation', `0 0 ${currentRotation}`);

      // generate circle element and set params
      let circleElementContainer = document.createElement('a-entity');
      circleElementContainer.setAttribute('position', `0 1 0`);
      let circleElement = document.createElement('a-entity');
      circleElement.setAttribute('class', `circleElement`);
      circleElement.setAttribute('scale', `${elementScale} ${elementScale} ${elementScale}`);
      circleElement.setAttribute('material', `color: red; metalness: 0; roughness: 0`);
      circleElement.setAttribute('geometry', `primitive: sphere; radius: 1.5`);
      circleElementContainer.appendChild(circleElement);
      rotateContainer.appendChild(circleElementContainer);


      // append element to main container
      objectContainer.appendChild(rotateContainer);
    }
}

// random num generator
function getRandomNumber(x, y) {
  return Math.floor(Math.random() * x + y);
}

// get random hex color
function getRandomColor() {
  let letters = '0123456789abcdef';
  let randomColor = '';
  for (let i = 0; i < 6; i++) {
    randomColor += letters[Math.floor(Math.random() * 16)];
  }
  return randomColor;
}


generateAllElements()
