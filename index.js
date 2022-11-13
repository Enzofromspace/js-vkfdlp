//import required dependencies
const canvasSketch = require('canvas-sketch');

//This is where the fun begins
const settings = {
  dimensions: [ 1080, 1080 ],
  animate: true,
};

//Create an array called particles to store the particle objects

const particles = [];

const sketch = ({width, height}) => {
  let x, y, particle;
//populate the array with a for loop
  for (let i = 0; i < 1; i ++) {
    x = width * 0.5;
    y = height * 0.5;

    particle = new Particle({ x, y });
    particles.push(particle);
  }


//canvas settings
  return ({ context, width, height }) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);
//Create the particle loop
   // particles.forEach(particle => {
      // particle.update();
      particle.draw(context);
    });

  };
};


//Initialize 
canvasSketch(sketch, settings);

//Creating a class of particle

class Particle{
// Set and define params using "this" keyword object
  constructor({x,y, radius = 10}) {
      this.x = x;
      this.y = y;

      this.ax = 0;
      this.ay = 0;

      this.vx = 0;
      this.vy = 0;

      this.ix = x;
      this.iy = y;

      this.radius = radius;
  }
  update(){
      this.ax += 0.001;

      this.vx += this.ax;
      this.vy += this.ay;

      this.x += vx;
      this.y += vy;
  }

  //Under the last function but still inside of the particle class, we create a a function to draw a particle 
  draw(context){
      context.save();
      context.translate(this.x, this.y);
      context.fillStyle = 'white';

//start drawing the particle circle on canvas
      context.beginPath();
      context.arc(0, 0, this.radius, 0, Math.PI * 2);

      context.fill();
      
      context.restore();
      
  }
}